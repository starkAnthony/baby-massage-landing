export type LeadFormFields = {
  name: string
  phone: string
  region: string
  goal: string
  tarif: string
}

export function validateLeadForm(form: LeadFormFields): string | null {
  if (!form.tarif) return 'Iltimos, tarifni tanlang.'
  if (!form.name.trim()) return 'Iltimos, ismingizni kiriting.'
  if (!form.phone.trim()) return 'Iltimos, telefon raqamingizni kiriting.'
  if (!form.region) return 'Iltimos, viloyatni tanlang.'
  if (!form.goal) return 'Iltimos, kurs maqsadini tanlang.'
  return null
}
