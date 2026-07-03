import { MEDIA } from '../data/media'
import { Section, SectionHeader } from '../components/Section'

export function Certificate() {
  const { certificate } = MEDIA

  return (
    <Section id="certificate" altBg>
      <SectionHeader
        eyebrow="Sertifikat"
        title="Rasmiy sertifikat"
        subtitle="Yakuniy imtihondan muvaffaqiyatli o'tgan o'quvchilarga beriladi"
      />

      <div className="mx-auto max-w-3xl">
        <div className="card relative overflow-hidden card-shadow-lg">
          <div className="absolute top-0 right-0 left-0 z-10 h-1.5 bg-gradient-to-r from-gold via-primary to-gold" />
          <img
            src={certificate.src}
            alt={certificate.alt}
            className="block w-full bg-white"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
