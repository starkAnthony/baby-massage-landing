import { Check, Gift, Sparkles, Users } from 'lucide-react'
import { PRICING } from '../data/content'
import { scrollToForm } from '../utils/analytics'
import { Section, SectionHeader } from '../components/Section'
import { Button } from '../components/Button'

export function Pricing() {
  return (
    <Section id="pricing" altBg>
      <SectionHeader
        eyebrow="Tariflar"
        title="O'zingizga mos tarifni tanlang"
        subtitle="Har bir tarif aniq natija va qo'llab-quvvatlash bilan"
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:items-center lg:gap-5">
        {PRICING.map((plan) => {
          const isVip = 'isVip' in plan && plan.isVip
          const isPopular = plan.popular

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-6 transition-all duration-300 sm:p-8 ${
                isPopular
                  ? 'card z-10 scale-[1.02] border-2 border-primary bg-white card-shadow-lg lg:scale-105'
                  : isVip
                    ? 'card border-2 border-gold/40 bg-gradient-to-b from-gold-light/30 to-white'
                    : 'card bg-white'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-cta px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  ENG KO'P TANLANADI
                </div>
              )}

              <div className="text-center">
                <h3
                  className={`font-display text-lg font-extrabold tracking-wide ${
                    isVip ? 'text-gold' : 'text-primary'
                  }`}
                >
                  {plan.name}
                </h3>
              <div className="mt-5">
                <span className="font-display text-3xl font-extrabold text-text sm:text-4xl">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-text-muted">{plan.currency}</span>
              </div>
              <p className="mt-2 flex items-center justify-center gap-1 text-xs text-text-muted">
                <Users className="h-3.5 w-3.5" />
                {plan.spots} ta joy
              </p>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.bonuses.length > 0 && (
                <div className="mt-5 rounded-2xl border border-gold/20 bg-gold-light/40 p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-bold text-gold">
                    <Gift className="h-3.5 w-3.5" /> Bonuslar
                  </p>
                  <ul className="space-y-1">
                    {plan.bonuses.map((bonus) => (
                      <li key={bonus} className="text-xs text-text-muted">
                        • {bonus}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-5 rounded-xl bg-cta-light px-4 py-2.5 text-center text-sm font-semibold text-cta">
                {plan.result}
              </p>

              <Button
                className="mt-6 w-full"
                variant={isVip ? 'gold' : isPopular ? 'primary' : 'secondary'}
                trackLabel={`pricing_${plan.id}`}
                onClick={scrollToForm}
              >
                Shu tarifni tanlash
              </Button>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
