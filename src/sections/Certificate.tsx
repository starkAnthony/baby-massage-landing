import { Award, ShieldCheck } from 'lucide-react'
import { Section, SectionHeader } from '../components/Section'

export function Certificate() {
  return (
    <Section id="certificate" altBg>
      <SectionHeader
        eyebrow="Sertifikat"
        title="Rasmiy sertifikat"
        subtitle="Yakuniy imtihondan muvaffaqiyatli o'tgan o'quvchilarga taqdim etiladi"
      />

      <div className="mx-auto max-w-2xl">
        <div className="card relative overflow-hidden p-8 card-shadow-lg sm:p-12">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-gold via-primary to-gold" />
          <div className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-gold/5" />

          <div className="text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gold-light">
              <Award className="h-10 w-10 text-gold" />
            </div>

            <h3 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
              Sertifikat
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              Shahnoza Soliyeva Bolalar Massaji Onlayn Akademiyasi
            </p>

            <div className="my-8 rounded-2xl border border-border bg-surface py-6">
              <p className="font-display text-lg font-semibold text-text">
                Bolalar massaji bo'yicha malakali mutaxassis
              </p>
              <p className="mt-2 text-sm text-text-muted">[O'quvchi ismi]</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-cta">
              <ShieldCheck className="h-4 w-4" />
              <span>Rasmiy tasdiqlangan sertifikat</span>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs text-text-muted">
              <span>Shahnoza Soliyeva</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
