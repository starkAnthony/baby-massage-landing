import { useState } from 'react'
import { Instagram } from 'lucide-react'
import { MEDIA } from '../data/media'
import { CONTACT } from '../data/content'
import { MediaImage } from '../components/MediaImage'
import { Section, SectionHeader } from '../components/Section'

interface VideoBlockProps {
  title?: string
  mp4: string
  poster?: string
  instagramUrl?: string
  featured?: boolean
}

function VideoBlock({ title, mp4, poster, instagramUrl, featured = false }: VideoBlockProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    if (!instagramUrl) return null
    return (
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card flex aspect-video flex-col items-center justify-center gap-3 transition hover:card-shadow-lg"
        data-cta="video_instagram_fallback"
      >
        <Instagram className="h-10 w-10 text-primary" />
        <span className="text-sm font-semibold text-primary">Videoni Instagramda ko'rish</span>
      </a>
    )
  }

  return (
    <div className={`card overflow-hidden ${featured ? '' : 'h-full'}`}>
      {title && (
        <p className="border-b border-border px-4 py-3 text-sm font-semibold text-text">
          {title}
        </p>
      )}
      <div className="relative aspect-video w-full bg-surface-alt">
        <video
          className="absolute inset-0 h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      {featured && instagramUrl && (
        <div className="flex items-center justify-center border-t border-border px-4 py-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            data-cta="video_instagram"
          >
            <Instagram className="h-4 w-4" />
            @shahnoza.kids.care
          </a>
        </div>
      )}
    </div>
  )
}

function OptionalVideo({ title, mp4, poster, externalUrl }: {
  title: string
  mp4: string
  poster?: string
  externalUrl?: string
}) {
  const [failed, setFailed] = useState(false)
  if (failed) return null

  return (
    <div className="card overflow-hidden">
      <p className="border-b border-border px-4 py-3 text-sm font-semibold">{title}</p>
      <div className="aspect-video w-full bg-surface-alt">
        <video
          className="h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-t border-border px-4 py-2 text-center text-xs text-primary hover:underline"
        >
          Instagramda ko'rish
        </a>
      )}
    </div>
  )
}

export function MediaShowcase() {
  const { videoMessage, gallery, galleryFallbacks, videos } = MEDIA

  return (
    <Section id="media" altBg>
      <SectionHeader
        eyebrow="Video"
        title="Shahnoza Soliyevadan qisqacha"
        subtitle="Akademiya, dastur va natijalar bilan qisqacha tanishing"
      />

      <div className="mx-auto mb-14 max-w-3xl">
        <VideoBlock
          featured
          mp4={videoMessage.mp4}
          poster={videoMessage.poster}
          instagramUrl={videoMessage.instagramUrl}
        />
      </div>

      {videos.length > 0 && (
        <div className="mx-auto mb-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {videos.map((v) => (
            <OptionalVideo
              key={v.id}
              title={v.title}
              mp4={v.mp4}
              poster={v.poster}
              externalUrl={v.externalUrl || CONTACT.instagramReel}
            />
          ))}
        </div>
      )}

      <SectionHeader
        title="Amaliyotdan lavhalar"
        subtitle="Kurs va professional faoliyatdan fotosuratlar"
        className="mb-8 sm:mb-10"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.map((item, i) => (
          <div
            key={item.src}
            className="card aspect-square overflow-hidden rounded-xl bg-surface-alt"
          >
            <MediaImage
              src={item.src}
              fallback={galleryFallbacks[i] ?? galleryFallbacks[0]}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
