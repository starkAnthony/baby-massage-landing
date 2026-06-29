import {
  Play,
  BookOpen,
  CheckSquare,
  UserCheck,
  Award,
  FileBadge,
  ChevronRight,
} from 'lucide-react'
import { LEARNING_FLOW } from '../data/content'
import { Section, SectionHeader } from '../components/Section'

const iconMap = {
  play: Play,
  book: BookOpen,
  check: CheckSquare,
  user: UserCheck,
  award: Award,
  certificate: FileBadge,
} as const

export function LearningFormat() {
  return (
    <Section id="format">
      <SectionHeader
        eyebrow="O'qish jarayoni"
        title="Qanday formatda o'qiysiz?"
      />

      <div className="hidden lg:block">
        <div className="card flex items-stretch justify-between p-6 card-shadow-lg sm:p-8">
          {LEARNING_FLOW.map((step, i) => {
            const Icon = iconMap[step.icon]
            return (
              <div key={step.step} className="flex flex-1 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-3 max-w-[90px] text-xs font-semibold leading-tight text-text">
                    {step.step}
                  </p>
                  <span className="mt-1 text-[10px] text-text-muted">{step.detail}</span>
                </div>
                {i < LEARNING_FLOW.length - 1 && (
                  <ChevronRight className="mx-1 h-5 w-5 shrink-0 text-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {LEARNING_FLOW.map((step, i) => {
          const Icon = iconMap[step.icon]
          return (
            <div key={step.step} className="card flex items-center gap-4 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-semibold text-text">{step.step}</p>
                <p className="text-xs text-text-muted">{step.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
