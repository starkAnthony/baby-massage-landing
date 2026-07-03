import { WHY_MASSAGE } from '../data/content'
import { Section, SectionHeader } from '../components/Section'

export function WhyMassage() {
  return (
    <Section id="why" altBg>
      <SectionHeader
        eyebrow="Nega aynan bolalar massaji?"
        title="Bugungi kunda bolalar massajiga talab nega juda yuqori?"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {WHY_MASSAGE.map((item, i) => (
          <div
            key={item}
            className="card card-hover flex items-start gap-4 p-5 sm:p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cta-light text-sm font-bold text-cta">
              {String(i + 1).padStart(2, '0')}
            </div>
            <p className="text-sm leading-relaxed text-text sm:text-base">{item}</p>
          </div>
        ))}
      </div>

      <div className="card mt-14 overflow-hidden p-0 card-shadow-lg">
        <div className="bg-primary px-6 py-4 text-center sm:px-8">
          <h3 className="font-display text-base font-bold text-white sm:text-lg">
            Bolalar massaji bozoridagi statistika
          </h3>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {[
            { value: '73%', label: 'Ota-onalar massaj xizmatiga qiziqish bildiradi' },
            { value: '2.5x', label: "So'nggi 3 yilda talab o'sishi" },
            { value: '85%', label: 'Uy sharoitida xizmat afzal' },
            { value: '0', label: 'Katta investitsiya kerak emas' },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:py-8">
              <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
