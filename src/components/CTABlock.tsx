import { scrollToForm } from '../utils/analytics'
import { Button } from './Button'

export function CTABlock({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 sm:flex-row sm:justify-center ${className}`}
    >
      <Button trackLabel="mid_section_enroll" onClick={scrollToForm}>
        Kursga yozilish
      </Button>
      <Button variant="ghost" trackLabel="mid_section_consult" onClick={scrollToForm}>
        Bepul konsultatsiya olish
      </Button>
    </div>
  )
}
