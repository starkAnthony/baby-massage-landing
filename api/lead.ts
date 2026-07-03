import type { VercelRequest, VercelResponse } from '@vercel/node'

type LeadPayload = {
  name: string
  phone: string
  region: string
  goal: string
  tarif: string
}

const VALID_TARIFS = new Set(['standart', 'expert', 'vip'])

const TARIF_LABELS: Record<string, string> = {
  standart: 'STANDART',
  expert: 'EXPERT',
  vip: 'VIP MENTOR',
}

function getAmoConfig() {
  const subdomain = process.env.AMO_SUBDOMAIN
  const token = process.env.AMO_TOKEN
  const domain = process.env.AMO_BASE_DOMAIN || 'amocrm.ru'

  if (!subdomain || !token) return null

  return {
    subdomain,
    token,
    baseUrl: `https://${subdomain}.${domain}`,
    pipelineId: process.env.AMO_PIPELINE_ID
      ? Number(process.env.AMO_PIPELINE_ID)
      : undefined,
    statusId: process.env.AMO_STATUS_ID
      ? Number(process.env.AMO_STATUS_ID)
      : undefined,
    responsibleUserId: process.env.AMO_RESPONSIBLE_USER_ID
      ? Number(process.env.AMO_RESPONSIBLE_USER_ID)
      : undefined,
  }
}

function validatePayload(body: unknown): LeadPayload | null {
  if (!body || typeof body !== 'object') return null

  const { name, phone, region, goal, tarif } = body as Partial<LeadPayload>

  if (
    typeof name !== 'string' ||
    typeof phone !== 'string' ||
    typeof region !== 'string' ||
    typeof goal !== 'string' ||
    typeof tarif !== 'string'
  ) {
    return null
  }

  const trimmed: LeadPayload = {
    name: name.trim(),
    phone: phone.trim(),
    region: region.trim(),
    goal: goal.trim(),
    tarif: tarif.trim().toLowerCase(),
  }

  if (
    !trimmed.name ||
    !trimmed.phone ||
    !trimmed.region ||
    !trimmed.goal ||
    !VALID_TARIFS.has(trimmed.tarif)
  ) {
    return null
  }

  return trimmed
}

async function addLeadNote(
  baseUrl: string,
  token: string,
  leadId: number,
  payload: LeadPayload,
) {
  const tarifLabel = TARIF_LABELS[payload.tarif] ?? payload.tarif
  const noteText = [
    'Manba: Landing page',
    `Tarif: ${tarifLabel}`,
    `Maqsad: ${payload.goal}`,
    `Viloyat: ${payload.region}`,
    `Telefon: ${payload.phone}`,
  ].join('\n')

  await fetch(`${baseUrl}/api/v4/leads/${leadId}/notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        note_type: 'common',
        params: { text: noteText },
      },
    ]),
  })
}

async function createAmoLead(payload: LeadPayload) {
  const config = getAmoConfig()
  if (!config) throw new Error('CRM_NOT_CONFIGURED')

  const tarifLabel = TARIF_LABELS[payload.tarif] ?? payload.tarif.toUpperCase()
  const leadName = `[${tarifLabel}] ${payload.name} — ${payload.region}`

  const leadBody: Record<string, unknown> = {
    name: leadName,
    _embedded: {
      contacts: [
        {
          first_name: payload.name,
          custom_fields_values: [
            {
              field_code: 'PHONE',
              values: [{ value: payload.phone, enum_code: 'WORK' }],
            },
          ],
        },
      ],
    },
  }

  if (config.pipelineId) leadBody.pipeline_id = config.pipelineId
  if (config.statusId) leadBody.status_id = config.statusId
  if (config.responsibleUserId) leadBody.responsible_user_id = config.responsibleUserId

  const response = await fetch(`${config.baseUrl}/api/v4/leads/complex`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([leadBody]),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`AMO_API_ERROR:${response.status}:${details}`)
  }

  const data = (await response.json()) as {
    _embedded?: { leads?: { id: number }[] }
  }

  const leadId = data._embedded?.leads?.[0]?.id
  if (leadId) {
    await addLeadNote(config.baseUrl, config.token, leadId, payload)
  }

  return leadId
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const payload = validatePayload(req.body)
  if (!payload) {
    return res.status(400).json({ error: 'Invalid form data' })
  }

  if (!getAmoConfig()) {
    return res.status(503).json({
      error: 'CRM is not configured yet',
      code: 'CRM_NOT_CONFIGURED',
    })
  }

  try {
    const leadId = await createAmoLead(payload)
    return res.status(200).json({ ok: true, leadId })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    if (message === 'CRM_NOT_CONFIGURED') {
      return res.status(503).json({
        error: 'CRM is not configured yet',
        code: 'CRM_NOT_CONFIGURED',
      })
    }

    console.error('AmoCRM lead error:', message)
    return res.status(502).json({
      error: 'Failed to send lead to CRM',
      code: 'CRM_SEND_FAILED',
    })
  }
}
