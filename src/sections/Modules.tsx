import { CheckCircle, BookOpen } from 'lucide-react'
import { MODULES } from '../data/content'
import { Section, SectionHeader } from '../components/Section'
import { AccordionItem } from '../components/Accordion'

export function Modules() {
  const totalTopics = MODULES.reduce((sum, m) => sum + m.lessonsCount, 0)

  return (
    <Section id="modules" altBg>
      <SectionHeader
        eyebrow="Dastur"
        title="Kurs davomida nimalarni o'rganasiz?"
        subtitle={`3 ta modul, ${totalTopics}+ mavzu — har biri aniq natija va uy vazifasi bilan`}
      />

      <div className="space-y-3">
        {MODULES.map((mod, i) => (
          <AccordionItem
            key={mod.id}
            title={`Modul ${mod.id}: ${mod.title}`}
            defaultOpen={i === 0}
          >
            <p className="mb-4 text-sm leading-relaxed text-text-muted">
              {mod.description}
            </p>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
              {mod.lessonsCount} ta mavzu
            </p>
            <div className="flex flex-wrap gap-2">
              {mod.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-primary/10 bg-primary-light/60 px-3 py-1.5 text-sm text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-text">Uy vazifasi: </span>
                {mod.homework}
              </p>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-cta-light p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
              <p className="text-sm text-text">
                <span className="font-bold text-cta">Natija: </span>
                {mod.result}
              </p>
            </div>
          </AccordionItem>
        ))}
      </div>
    </Section>
  )
}
