export function trackCTA(action: string, label?: string) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    gtag?.('event', action, { event_category: 'CTA', event_label: label })
  }
}

export function scrollToForm() {
  trackCTA('click', 'scroll_to_form')
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToSection(id: string) {
  trackCTA('click', `scroll_to_${id}`)
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
