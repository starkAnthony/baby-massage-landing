export type LeadPayload = {
  name: string
  phone: string
  region: string
  goal: string
  tarif: string
}

type SubmitResponse = {
  ok?: boolean
  error?: string
  code?: string
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data: SubmitResponse = {}
  try {
    data = await response.json()
  } catch {
    // non-JSON response
  }

  if (!response.ok) {
    if (data.code === 'CRM_NOT_CONFIGURED') {
      throw new Error(
        'CRM hali ulangan emas. Ma\'lumotlaringiz saqlanmadi — iltimos, telefon orqali bog\'laning.',
      )
    }
    throw new Error(
      data.error ?? 'Arizani yuborib bo\'lmadi. Iltimos, qayta urinib ko\'ring.',
    )
  }
}
