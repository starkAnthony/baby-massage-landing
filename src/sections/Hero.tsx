import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { BRAND, STATS, AUTHOR_ROLES } from '../data/content'
import { MEDIA } from '../data/media'
import { MediaPhotoFrame } from '../components/MediaImage'
import { scrollToForm, scrollToSection } from '../utils/analytics'
import { Button } from '../components/Button'

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-cta/5 blur-3xl" />

      <div className="container-narrow section-padding !pb-16 lg:!pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">{BRAND.name}</span>

            <h1 className="text-[1.75rem] leading-[1.2] sm:text-4xl lg:text-[2.75rem]">
              6 hafta ichida{' '}
              <span className="text-gradient">bolalar massaji</span> bo'yicha talabi
              yuqori bo'lgan kasbni egallang
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Amaliyotchi reabilitolog Shahnoza Soliyevaning mualliflik dasturi
              asosida bolalar massajini noldan o'rganing va uni daromad
              manbaiga aylantiring.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="card flex flex-col items-center px-3 py-4 text-center sm:px-4"
                >
                  <p className="font-display text-xl font-extrabold text-primary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-tight text-text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button trackLabel="hero_enroll" onClick={() => scrollToForm()}>
                Kursga yozilish
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                trackLabel="hero_program"
                onClick={() => scrollToSection('modules')}
              >
                Dastur bilan tanishish
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="image-ring relative mx-auto w-full max-w-sm lg:max-w-none">
              <MediaPhotoFrame
                src={MEDIA.hero.src}
                fallback={MEDIA.hero.fallback}
                alt={MEDIA.hero.alt}
                variant="hero"
                fit="cover"
                className="card card-shadow-lg"
                loading="eager"
              />

              <div className="absolute right-0 -bottom-4 left-0 mx-2 card rounded-2xl p-4 card-shadow-lg sm:mx-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    SS
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-text">
                      Shahnoza Soliyeva
                    </p>
                    <p className="text-xs text-text-muted">
                      {AUTHOR_ROLES.join(' · ')}
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto h-5 w-5 text-cta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
