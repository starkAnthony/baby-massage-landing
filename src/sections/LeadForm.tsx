import { useEffect, useState, type FormEvent } from 'react'
import { ChevronDown, Phone, Send, Instagram, MessageCircle } from 'lucide-react'
import { CONTACT, COURSE_GOALS, PRICING, UZBEK_REGIONS } from '../data/content'
import { SELECTED_TARIF_KEY, TARIF_SELECTED_EVENT, trackCTA } from '../utils/analytics'
import { validateLeadForm } from '../utils/leadFormValidation'
import { submitLead } from '../utils/submitLead'
import { Section, SectionHeader } from '../components/Section'
import { Button } from '../components/Button'

interface FormData {
  name: string
  phone: string
  region: string
  goal: string
  tarif: string
}

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted/50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15'

function tarifCardClass(planId: string, selected: boolean) {
  if (!selected) return 'border-border bg-white hover:border-primary/30'

  const plan = PRICING.find((p) => p.id === planId)
  if (plan && 'isVip' in plan && plan.isVip) {
    return 'border-gold bg-gold-light/50 font-semibold text-gold shadow-sm'
  }
  if (plan?.popular) {
    return 'border-primary bg-cta-light font-semibold text-cta shadow-sm'
  }
  return 'border-cta bg-cta-light font-medium text-cta shadow-sm'
}

function readSavedTarif() {
  return sessionStorage.getItem(SELECTED_TARIF_KEY) ?? ''
}

export function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    region: '',
    goal: '',
    tarif: readSavedTarif(),
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const syncTarif = (tarifId: string) => {
      setForm((prev) => ({ ...prev, tarif: tarifId }))
    }

    const onTarifSelected = (event: Event) => {
      const tarifId = (event as CustomEvent<string>).detail
      if (tarifId) syncTarif(tarifId)
    }

    window.addEventListener(TARIF_SELECTED_EVENT, onTarifSelected)
    return () => window.removeEventListener(TARIF_SELECTED_EVENT, onTarifSelected)
  }, [])

  const setTarif = (tarifId: string) => {
    sessionStorage.setItem(SELECTED_TARIF_KEY, tarifId)
    setForm((prev) => ({ ...prev, tarif: tarifId }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationError = validateLeadForm(form)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    trackCTA('form_submit', `${form.goal}_${form.tarif}`)

    try {
      await submitLead(form)
      sessionStorage.removeItem(SELECTED_TARIF_KEY)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Section id="lead-form" altBg>
        <div className="card mx-auto max-w-lg p-12 text-center card-shadow-lg">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cta-light">
            <Send className="h-7 w-7 text-cta" />
          </div>
          <h2 className="font-display text-2xl font-bold text-text">Rahmat!</h2>
          <p className="mt-3 text-text-muted">
            Tez orada siz bilan bog'lanamiz. Menejerimiz qo'ng'iroq qiladi.
          </p>
        </div>
      </Section>
    )
  }

  return (
    <Section id="lead-form" altBg>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          align="left"
          eyebrow="Ro'yxatdan o'tish"
          title="Bugun yangi kasb sari birinchi qadamni qo'ying"
          subtitle="Shahnoza Soliyevaning mualliflik akademiyasiga qo'shiling. Formani to'ldiring — menejerimiz 24 soat ichida siz bilan bog'lanadi."
          className="mb-0 sm:mb-0"
        />

        <form onSubmit={handleSubmit} noValidate className="card p-6 card-shadow-lg sm:p-8">
          {error && (
            <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium text-text">Tarif</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {PRICING.map((plan) => {
                  const selected = form.tarif === plan.id
                  const isVip = 'isVip' in plan && plan.isVip

                  return (
                    <label
                      key={plan.id}
                      className={`flex cursor-pointer flex-col rounded-xl border p-3 text-center transition ${tarifCardClass(plan.id, selected)}`}
                    >
                      <input
                        type="radio"
                        name="tarif"
                        value={plan.id}
                        checked={selected}
                        onChange={() => setTarif(plan.id)}
                        className="sr-only"
                      />
                      <span
                        className={`font-display text-xs font-extrabold tracking-wide sm:text-sm ${
                          selected && isVip ? 'text-gold' : selected ? 'text-cta' : 'text-primary'
                        }`}
                      >
                        {plan.name}
                      </span>
                      <span
                        className={`mt-1 text-[11px] leading-tight ${
                          selected ? 'text-inherit opacity-90' : 'text-text-muted'
                        }`}
                      >
                        {plan.price} {plan.currency}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
                Ism
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Ismingiz"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
                Telefon raqam
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="+998 90 123 45 67"
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="region" className="mb-2 block text-sm font-medium text-text">
                Viloyat
              </label>
              <div className="relative">
                <select
                  id="region"
                  value={form.region}
                  onChange={(e) => setForm({ ...form, region: e.target.value })}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Viloyatni tanlang</option>
                  {UZBEK_REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-text-muted"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-text">Siz uchun kurs maqsadi</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {COURSE_GOALS.map((goal) => (
                  <label
                    key={goal}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-sm transition ${
                      form.goal === goal
                        ? 'border-cta bg-cta-light font-medium text-cta'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={goal}
                      checked={form.goal === goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="accent-cta"
                    />
                    {goal}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 w-full"
            trackLabel="form_enroll"
            disabled={loading}
          >
            {loading ? 'Yuborilmoqda...' : 'Hoziroq kursga yozilish'}
          </Button>
        </form>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {[
          { href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, icon: Phone, label: CONTACT.phone, cta: 'contact_phone' },
          { href: CONTACT.telegram, icon: Send, label: 'Telegram', cta: 'contact_telegram' },
          { href: CONTACT.instagram, icon: Instagram, label: 'Instagram', cta: 'contact_instagram' },
          { href: CONTACT.whatsapp, icon: MessageCircle, label: 'WhatsApp', cta: 'contact_whatsapp' },
        ].map(({ href, icon: Icon, label, cta }) => (
          <a
            key={cta}
            href={href}
            target={href.startsWith('tel') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="card card-hover flex items-center gap-2.5 px-4 py-2.5 text-sm text-text-muted transition hover:text-primary"
            data-cta={cta}
          >
            <Icon className="h-4 w-4 text-primary" />
            {label}
          </a>
        ))}
      </div>
    </Section>
  )
}
