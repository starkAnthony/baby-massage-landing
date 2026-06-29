import { scrollToForm } from '../utils/analytics'
import { Button } from './Button'

export function StickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-border/80 bg-white/95 p-3 shadow-[0_-4px_24px_rgba(15,28,46,0.08)] backdrop-blur-xl sm:hidden">
      <Button
        className="w-full"
        trackLabel="sticky_enroll"
        onClick={scrollToForm}
      >
        Kursga yozilish
      </Button>
    </div>
  )
}
