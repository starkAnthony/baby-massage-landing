import { Baby, Heart, Stethoscope, Hand, Sparkles } from 'lucide-react'
import { AUDIENCE } from '../data/content'
import { Section, SectionHeader } from '../components/Section'
import { CTABlock } from '../components/CTABlock'

const iconMap = {
  baby: Baby,
  heart: Heart,
  stethoscope: Stethoscope,
  hands: Hand,
  sparkles: Sparkles,
} as const

export function Audience() {
  return (
    <Section id="audience">
      <SectionHeader
        eyebrow="Maqsadli auditoriya"
        title="Kurs kimlar uchun?"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {AUDIENCE.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.title} className="card card-hover group p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light transition group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6 text-primary transition group-hover:text-white" />
              </div>
              <h3 className="font-display mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                <span className="font-semibold text-cta">Natija: </span>
                {item.result}
              </p>
            </div>
          )
        })}
      </div>

      <CTABlock className="mt-14" />
    </Section>
  )
}
