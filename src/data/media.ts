import { CONTACT } from './content'

export type MediaVideoEntry = {
  id: string
  title: string
  mp4: string
  poster?: string
  externalUrl?: string
}

/**
 * Media fayllarni `public/media/` papkasiga qo'ying.
 * Fayl bo'lmasa, avtomatik fallback (placeholder) ko'rsatiladi.
 *
 * Tavsiya etilgan fayl nomlari:
 *   public/media/hero.jpg
 *   public/media/author.jpg
 *   public/media/videos/message.web.mp4
 *   public/media/videos/message-poster.jpg
 *   public/media/gallery/1.jpg … 6.jpg
 *   public/media/certificate-sample.pdf
 */
export const MEDIA = {
  hero: {
    src: '/media/hero.jpg',
    fallback:
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
    alt: 'Shahnoza Soliyeva bolaga professional massaj qilmoqda',
  },
  author: {
    src: '/media/author.jpg',
    fallback:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Shahnoza Soliyeva — amaliyotchi reabilitolog va bolalar massaji treneri',
  },
  /** Asosiy video murojaat — mp4 bo'lsa sahifada o'ynaydi, bo'lmasa Instagram havolasi */
  videoMessage: {
    mp4: '/media/videos/message.web.mp4',
    poster: '/media/videos/message-poster.jpg',
    posterFallback:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    instagramUrl: CONTACT.instagramReel,
    title: 'Shahnoza Soliyevaning video murojaati',
  },
  certificate: {
    src: '/media/certificate-sample.png',
    pdf: '/media/certificate-sample.pdf',
    alt: 'Shahnoza Soliyeva Bolalar Massaji Onlayn Akademiyasi sertifikati',
  },
  /** Amaliyot va kurs jarayoni fotolari — 6–8 ta yetarli */
  gallery: [
    { src: '/media/gallery/1.jpg', alt: 'Bolalar massaji amaliyoti' },
    { src: '/media/gallery/2.jpg', alt: 'Massaj texnikasi' },
    { src: '/media/gallery/3.jpg', alt: 'Kurs jarayoni' },
    { src: '/media/gallery/4.jpg', alt: 'Reabilitatsiya mashqlari' },
    { src: '/media/gallery/5.jpg', alt: 'Fitbol terapiyasi' },
    { src: '/media/gallery/6.jpg', alt: 'Professional massaj xonasi' },
  ],
  galleryFallbacks: [
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80',
    'https://images.unsplash.com/photo-1584515933487-779824ad3d8f?w=600&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508a39?w=600&q=80',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
    'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80',
  ],
  /** Qo'shimcha videolar */
  videos: [
    {
      id: 'practice',
      title: 'Amaliyotdan lavhalar',
      mp4: '/media/videos/practice.web.mp4',
    },
    {
      id: 'students',
      title: "O'quvchilar natijalari",
      mp4: '/media/videos/students.web.mp4',
    },
  ] as MediaVideoEntry[],
} as const
