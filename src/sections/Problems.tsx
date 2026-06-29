import { X } from 'lucide-react'
import { PROBLEMS } from '../data/content'
import { Section, SectionHeader } from '../components/Section'
import { CTABlock } from '../components/CTABlock'

export function Problems() {
  return (
    <Section id="problems">
      <SectionHeader
        eyebrow="Tanish holatlar"
        title="Siz ham quyidagi holatlardan birini boshdan kechiryapsizmi?"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {PROBLEMS.map((problem) => (
          <div
            key={problem}
            className="card card-hover flex items-center gap-4 p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50">
              <X className="h-4 w-4 text-red-400" />
            </div>
            <p className="text-sm font-medium leading-snug text-text sm:text-base">
              {problem}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white sm:p-12">
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <p className="relative font-display text-xl font-bold sm:text-2xl">
          Shu sababli biz ushbu akademiyani yaratdik.
        </p>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          Sizning muammolaringizni tushunamiz va ularni hal qilish uchun aniq yo'l
          xaritasini taqdim etamiz.
        </p>
      </div>

      <CTABlock className="mt-12" />
    </Section>
  )
}
