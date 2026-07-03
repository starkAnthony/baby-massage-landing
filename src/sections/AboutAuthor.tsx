import { AUTHOR_TIMELINE, AUTHOR_ROLES, BRAND } from '../data/content'
import { MEDIA } from '../data/media'
import { MediaPhotoFrame } from '../components/MediaImage'
import { Section, SectionHeader } from '../components/Section'

export function AboutAuthor() {
  return (
    <Section id="about" altBg>
      <SectionHeader
        eyebrow="Ekspert"
        title="Muallif haqida"
        subtitle={`${BRAND.author} — amaliyotchi reabilitolog, osteopat va bolalar massaji treneri`}
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="image-ring relative mx-auto w-full max-w-md lg:max-w-none">
          <MediaPhotoFrame
            src={MEDIA.author.src}
            fallback={MEDIA.author.fallback}
            alt={MEDIA.author.alt}
            variant="photo"
            fit="cover"
            className="card card-shadow-lg"
          />
        </div>

        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {AUTHOR_ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary"
              >
                {role}
              </span>
            ))}
          </div>

          <h3 className="font-display mb-5 text-lg font-bold">Kasbiy yo'li</h3>
          <div className="space-y-0">
            {AUTHOR_TIMELINE.map((item, i) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {item.year.slice(2)}
                  </div>
                  {i < AUTHOR_TIMELINE.length - 1 && (
                    <div className="my-1 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="text-xs font-bold text-primary">{item.year}</p>
                  <p className="mt-0.5 text-sm text-text">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-2 border-l-4 border-l-cta p-5">
            <h3 className="font-display mb-2 font-bold text-text">Missiyasi</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Har bir ayolga bolalar massaji orqali mustaqil daromad topish va
              farzandining sog'lig'ini asrash imkoniyatini berish. Malakali
              mutaxassislarni tayyorlash orqali minglab oilalarga yordam berish.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
