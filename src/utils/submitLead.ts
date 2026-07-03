import type { LeadFormFields } from './leadFormValidation'

export type LeadPayload = LeadFormFields

type SubmitResponse = {
  ok?: boolean
  error?: string
  code?: string
}

const API_ERROR_MESSAGES: Record<string, string> = {
  CRM_NOT_CONFIGURED:
    'CRM hali ulangan emas. Ma\'lumotlaringiz saqlanmadi — iltimos, telefon orqali bog\'laning.',
  CRM_SEND_FAILED:
    'Arizani yuborib bo\'lmadi. Iltimos, telefon orqali bog\'laning yoki birozdan keyin qayta urinib ko\'ring.',
  INVALID_FORM: 'Forma to\'liq to\'ldirilmagan. Barcha maydonlarni tekshiring.',
}

const DEFAULT_SUBMIT_ERROR =
  'Arizani yuborib bo\'lmadi. Iltimos, qayta urinib ko\'ring.'

const NETWORK_ERROR =
  'Serverga ulanib bo\'lmadi. Internet aloqasini tekshiring va qayta urinib ko\'ring.'

export async function submitLead(payload: LeadPayload): Promise<void> {
  let response: Response

  try {
    response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error(NETWORK_ERROR)
  }

  let data: SubmitResponse = {}
  try {
    data = await response.json()
  } catch {
    // non-JSON response
  }

  if (!response.ok) {
    const message =
      (data.code && API_ERROR_MESSAGES[data.code]) || DEFAULT_SUBMIT_ERROR
    throw new Error(message)
  }
}
