import { useState, type ImgHTMLAttributes, type VideoHTMLAttributes } from 'react'

interface MediaImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  fallback: string
}

export function MediaImage({ src, fallback, alt, ...props }: MediaImageProps) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      {...props}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback)
      }}
    />
  )
}

type FrameVariant = 'portrait' | 'photo' | 'landscape' | 'square' | 'auto'
type FitMode = 'contain' | 'cover'

const frameVariants: Record<FrameVariant, string> = {
  portrait: 'aspect-[9/16] w-full max-h-[min(75vh,640px)]',
  photo: 'aspect-[3/4] w-full max-h-[min(70vh,520px)]',
  landscape: 'aspect-video w-full max-h-[420px]',
  square: 'aspect-square w-full max-h-[360px]',
  auto: 'w-full min-h-[200px] max-h-[min(75vh,640px)]',
}

interface MediaPhotoFrameProps {
  src: string
  fallback: string
  alt: string
  variant?: FrameVariant
  /** cover = ramkani to'ldiradi (portretlar uchun), contain = kesmaydi */
  fit?: FitMode
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
}

export function MediaPhotoFrame({
  src,
  fallback,
  alt,
  variant = 'portrait',
  fit = 'contain',
  className = '',
  imgClassName = '',
  loading = 'lazy',
}: MediaPhotoFrameProps) {
  const isCover = fit === 'cover'

  return (
    <div
      className={`overflow-hidden rounded-2xl ${isCover ? 'bg-surface-alt' : 'media-box flex items-center justify-center'} ${frameVariants[variant]} ${className}`}
    >
      <MediaImage
        src={src}
        fallback={fallback}
        alt={alt}
        loading={loading}
        className={
          isCover
            ? `h-full w-full object-cover object-[center_20%] ${imgClassName}`
            : `max-h-full max-w-full object-contain ${imgClassName}`
        }
      />
    </div>
  )
}

interface MediaVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  mp4: string
  poster?: string
  onLoadError?: () => void
  variant?: FrameVariant
}

/** Phone videolari — kesmasdan to'liq ko'rsatish */
export function MediaVideo({
  mp4,
  poster,
  onLoadError,
  variant = 'portrait',
  className = '',
  ...props
}: MediaVideoProps) {
  return (
    <div
      className={`media-box-dark flex items-center justify-center overflow-hidden ${frameVariants[variant]} ${className}`}
    >
      <video
        {...props}
        className="max-h-full max-w-full object-contain"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => onLoadError?.()}
      >
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  )
}
