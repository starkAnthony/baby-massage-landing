export function trackCTA(action: string, label?: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    gtag?.('event', action, { event_category: 'CTA', event_label: label })
  }
}

export const SELECTED_TARIF_KEY = 'selected_tarif'
export const TARIF_SELECTED_EVENT = 'lead-tarif-selected'

export function scrollToForm(tarifId?: string) {
  if (tarifId && typeof window !== 'undefined') {
    sessionStorage.setItem(SELECTED_TARIF_KEY, tarifId)
    window.dispatchEvent(new CustomEvent(TARIF_SELECTED_EVENT, { detail: tarifId }))
  }
  trackCTA('click', tarifId ? `scroll_to_form_${tarifId}` : 'scroll_to_form')
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToSection(id: string) {
  trackCTA('click', `scroll_to_${id}`)
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
