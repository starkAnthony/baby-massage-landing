import {
  Flower2,
  Hand,
  Sparkles,
  Leaf,
  Scale,
  Users,
  Camera,
  MessageSquare,
  Calendar,
  FileText,
  Gift,
} from 'lucide-react'
import { BONUSES } from '../data/content'
import { Section, SectionHeader } from '../components/Section'

const iconMap = {
  flower: Flower2,
  hand: Hand,
  sparkle: Sparkles,
  leaf: Leaf,
  scale: Scale,
  users: Users,
  camera: Camera,
  message: MessageSquare,
  calendar: Calendar,
  file: FileText,
} as const

export function Bonuses() {
  return (
    <Section id="bonuses" altBg>
      <SectionHeader
        eyebrow="Sovg'alar"
        title="Bonuslar"
        subtitle="EXPERT va VIP tariflarida beriladigan qo'shimcha materiallar"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {BONUSES.map((bonus) => {
          const Icon = iconMap[bonus.icon]
          return (
            <div
              key={bonus.title}
              className="card card-hover flex flex-col items-center p-5 text-center"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-light">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <Gift className="mb-1.5 h-3.5 w-3.5 text-gold" />
              <p className="text-xs font-semibold leading-snug text-text sm:text-sm">
                {bonus.title}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
