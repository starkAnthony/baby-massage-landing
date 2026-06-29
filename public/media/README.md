# Media fayllar

Landing pageda ishlatiladigan foto va videolarni shu papkaga qo'ying.

## Qaysi fayllar kerak?

| Fayl | Qayerda ko'rinadi | Tavsiya |
|------|-------------------|---------|
| `hero.jpg` | Birinchi ekran | Shahnoza massaj qilayotgan professional surat |
| `author.jpg` | Ustoz bo'limi | Portret yoki ish jarayonidan surat |
| `videos/message.mp4` | Video murojaat (asl nusxa) | 1–3 daqiqalik tanishuv videosi |
| `videos/message-poster.jpg` | Video poster | Videodan kadr |
| `gallery/1.jpg` … `6.jpg` | Galereya | Amaliyot, xona, mashqlar |

## Videolarni siqish (Vercel uchun muhim)

Vercel bitta fayl uchun **100 MB** cheklov qo'yadi. Telefon videolari ko'pincha undan katta bo'ladi.

**Ishlash tartibi:**

1. Asl videoni `videos/` papkasiga qo'ying (`message.mp4`, `practice.mp4`, `students.mp4`)
2. Loyiha ildizida ishga tushiring:

```bash
npm run compress:videos
```

3. Sahifa `*.web.mp4` fayllardan foydalanadi (masalan `message.web.mp4` — ~23 MB)
4. GitHub/Vercelga faqat `*.web.mp4` yuklanadi; asl `*.mp4` fayllar `.gitignore` da

## Qo'shimcha videolar

| Asl fayl | Siqilgan | Bo'limda |
|----------|----------|----------|
| `videos/practice.mp4` | `practice.web.mp4` | Amaliyotdan lavha |
| `videos/students.mp4` | `students.web.mp4` | O'quvchilar natijalari |

## Eslatmalar

- **Barcha fotolarni qo'shmang** — 6–8 ta sifatli surat yetarli
- Video formati: **MP4** (H.264)
- Rasm hajmi: **500 KB – 1 MB** (tez yuklanish uchun)
- Ruxsatsiz o'quvchi/bola suratlarini qo'ymang
- **Telefon surat/video** — vertikal format ham qo'llab-quvvatlanadi

Yangi video qo'shsangiz, `src/data/media.ts` dagi yo'llarni yangilang va `npm run compress:videos` ni qayta ishga tushiring.
