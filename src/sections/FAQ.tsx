import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../data/content'
import { Section, SectionHeader } from '../components/Section'
import { CTABlock } from '../components/CTABlock'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Ko'p beriladigan savollar"
        subtitle="Javob topa olmasangiz, bepul konsultatsiya oling"
      />

      <div className="mx-auto max-w-3xl space-y-2">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.question}
              className={`card overflow-hidden transition-all ${
                isOpen ? 'border-primary/30 card-shadow-lg' : ''
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <h3 className="text-sm font-semibold text-text sm:text-base">
                  {item.question}
                </h3>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    isOpen ? 'bg-primary text-white' : 'bg-primary-light text-primary'
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <CTABlock className="mt-14" />
    </Section>
  )
}
