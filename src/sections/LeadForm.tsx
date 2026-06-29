import { useState, type FormEvent } from 'react'
import { Phone, Send, Instagram, MessageCircle } from 'lucide-react'
import { CONTACT, COURSE_GOALS, UZBEK_REGIONS } from '../data/content'
import { trackCTA } from '../utils/analytics'
import { Section, SectionHeader } from '../components/Section'
import { Button } from '../components/Button'

interface FormData {
  name: string
  phone: string
  region: string
  goal: string
}

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition placeholder:text-text-muted/50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15'

export function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    region: '',
    goal: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    trackCTA('form_submit', form.goal)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
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
          subtitle="Shahnoza Soliyevaning mualliflik akademiyasiga qo'shiling. Formani to'ldiring — menejerimiz 24 soat ichida bog'lanadi."
          className="mb-0 sm:mb-0"
        />

        <form onSubmit={handleSubmit} className="card p-6 card-shadow-lg sm:p-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
                Ism
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Ismingiz"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
                Telefon raqam
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div>
              <label htmlFor="region" className="mb-2 block text-sm font-medium text-text">
                Viloyat
              </label>
              <select
                id="region"
                required
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className={inputClass}
              >
                <option value="">Viloyatni tanlang</option>
                {UZBEK_REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
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
                      required
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
