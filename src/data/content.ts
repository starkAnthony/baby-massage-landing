export const BRAND = {
  name: 'Shahnoza Soliyeva Bolalar Massaji Onlayn Akademiyasi',
  shortName: 'Hi Baby',
  author: 'Shahnoza Soliyeva',
  authorFull: 'Shahnoza Soliyeva Dilmuradovna',
  tagline: 'Bolalar massaji va reabilitatsiya bo\'yicha professional onlayn kurs',
  courseDuration: '1,5 oy',
  lessonsPerWeek: '3 marta',
} as const

export const CONTACT = {
  phone: '+998 99 844 98 28',
  telegram: 'https://t.me/+998998449828/shahnoza_reabilitolog',
  instagram: 'https://www.instagram.com/shahnoza.kids.care',
  instagramReel: 'https://www.instagram.com/reel/DK1ld_kMN4L/',
  whatsapp: 'https://wa.me/998998449828',
} as const

export const STATS = [
  { value: '17', label: 'yillik tajriba' },
  { value: '30 000+', label: 'bolaga rivojlanishida yordam bergan' },
  { value: '1000+', label: "o'quvchilar" },
] as const

export const WHY_MASSAGE = [
  'Rivojlanishida kechikish kuzatilayotgan bolalar soni ortmoqda',
  'Ota-onalar malakali mutaxassis izlayapti',
  'Uy sharoitida xizmat ko\'rsatish imkoniyati',
  'Katta investitsiya talab qilmaydigan kasb',
  'Erkin ish grafigi',
] as const

export const PROBLEMS = [
  'Kasbingiz yo\'q',
  'Daromadingiz yetarli emas',
  'Farzandingiz sabab ishga chiqa olmaysiz',
  'Internetdagi videolar chalkashtirib yuborgan',
  'Mijoz topishni bilmaysiz',
  'O\'zingizga ishonmaysiz',
] as const

export const AUTHOR_ROLES = [
  'Amaliyotchi reabilitolog',
  'Osteopat',
  'Bolalar massaji bo\'yicha trener',
] as const

export const AUTHOR_TIMELINE = [
  { year: '2008', title: 'Reabilitolog sifatida faoliyat boshlandi' },
  { year: '2012', title: 'Bolalar massaji va reabilitatsiyaga ixtisoslashdi' },
  { year: '2016', title: 'Osteopatiya va nevrologiya yo\'nalishlarida malaka oshirdi' },
  { year: '2020', title: '1000+ o\'quvchini professional darajaga yetkazdi' },
  { year: '2024', title: 'Onlayn akademiyani tashkil etdi' },
] as const

export const AUDIENCE = [
  {
    title: 'Dekretdagi onalar',
    result: 'Uyda ishlash va qo\'shimcha daromad topish imkoniyatiga ega bo\'lasiz',
    icon: 'baby',
  },
  {
    title: 'Yosh onalar',
    result: 'Farzandingizning yoshiga mos rivojlanishini tushunasiz va to\'g\'ri massajni o\'rganasiz',
    icon: 'heart',
  },
  {
    title: 'Hamshiralar va shifokorlar',
    result: 'Bolalar reabilitatsiyasi bo\'yicha bilimlaringizni kengaytirasiz',
    icon: 'stethoscope',
  },
  {
    title: 'Massajchilar',
    result: 'Bolalar massaji yo\'nalishida yangi xizmat va mijozlar bazasini ochasiz',
    icon: 'hands',
  },
  {
    title: 'Yangi kasb izlayotgan ayollar',
    result: 'Barqaror daromad va erkin ish grafigiga ega bo\'lasiz',
    icon: 'sparkles',
  },
] as const

export const MODULES = [
  {
    id: 1,
    title: 'Bolalar massaji asoslari va sog\'lom rivojlanish',
    description:
      'Bolalar massajining nazariy asoslari, sog\'lom rivojlanish jarayonlari va eng ko\'p uchraydigan muammolarni aniqlash.',
    topics: [
      'Massaj nima va nima uchun kerak',
      'Raxit va D vitamini yetishmovchiligi',
      'Massaj yog\'lari va dengiz suvi',
      'Yoshiga mos rivojlanish bosqichlari',
      'Massaj xonasi talablari',
      'Tayyorgarlik va xavfsizlik qoidalari',
    ],
    homework:
      'Rivojlanish holatini kuzatish, massaj muhitini tayyorlash, raxit belgilarini aniqlash bo\'yicha test',
    result: 'Bolani baholashni va xavfsiz massaj qilishni o\'rganasiz.',
    lessonsCount: 18,
  },
  {
    id: 2,
    title: 'Ortopediya, nevrologiya va erta reabilitatsiya',
    description:
      'Bolalarda uchraydigan ortopedik va nevrologik muammolarni aniqlash hamda massaj va reabilitatsiyaning o\'rni.',
    topics: [
      'Displaziya, valgus, varus, yassi oyoqlik',
      'Skolioz, kifoz, lordoz',
      'Gipertonus, gipotonus, bo\'yin qiyshiqligi',
      'BSF, gidrosefaliya, mikrosefaliya',
      'Fitbol terapiyasi va LFK',
      'Imkoniyati cheklangan bolalar bilan ishlash',
    ],
    homework:
      '3 ta klinik holat bo\'yicha tashxis, massaj algoritmi, 5 daqiqalik fitbol mashg\'uloti videosi',
    result: 'Turli tashxislarda qanday yondashish kerakligini tushunasiz.',
    lessonsCount: 33,
  },
  {
    id: 3,
    title: 'Professional massaj amaliyoti va mutaxassis sifatida rivojlanish',
    description:
      'Professional massaj amaliyoti, fizioterapiya usullari va mijozlar bilan ishlash tizimi.',
    topics: [
      'Massaj qarshi ko\'rsatmalar',
      'Elektroforez va parafin terapiya',
      'Kompleks reabilitatsiya dasturi',
      'Konsultatsiya va mijoz kartasi',
      'Xizmat narxini shakllantirish',
      'Birinchi mijozlarni topish va shaxsiy brend',
    ],
    homework:
      'To\'liq reabilitatsiya rejasi, 15–20 daqiqalik amaliy massaj videosi, yakuniy attestatsiya',
    result: 'Kasbni daromad manbaiga aylantirishni o\'rganasiz.',
    lessonsCount: 17,
  },
] as const

export const LEARNING_FLOW = [
  { step: 'Video dars', icon: 'play', detail: 'Haftasiga 3 marta' },
  { step: 'Uy vazifasi', icon: 'book', detail: 'Har modul yakunida' },
  { step: 'Tekshirish', icon: 'check', detail: 'Kurator nazorati' },
  { step: 'Jonli sessiya', icon: 'user', detail: 'EXPERT va VIP' },
  { step: 'Imtihon', icon: 'award', detail: 'Yakuniy attestatsiya' },
  { step: 'Sertifikat', icon: 'certificate', detail: 'Muvaffaqiyatli bitiruvchilar' },
] as const

export const PRICING = [
  {
    id: 'start',
    name: 'START',
    price: '1 490 000',
    currency: "so'm",
    popular: false,
    spots: 25,
    features: [
      'Barcha videodarslar (68+ dars)',
      'Uyga vazifa — modul testlar (5 tasi tekshiriladi)',
      '12 oy davomida kursga kirish',
      'Yopiq Telegram guruhi',
    ],
    bonuses: [
      'Ayollar uchun sog\'lomlashtiruvchi massaj',
      'Karrikson massaji',
      'Yuz lifting massaji',
      'Sunnatga muvofiq sog\'lom ovqatlanish',
      '2 oyda 6–10 kg vazn tashlash texnikalari',
    ],
    result: 'Bolalar massaji asoslarini o\'rganib, uy sharoitida ishlaysiz',
  },
  {
    id: 'expert',
    name: 'EXPERT',
    price: '3 490 000',
    currency: "so'm",
    popular: true,
    spots: 25,
    features: [
      'START tarifidagi barcha imkoniyatlar',
      'Haftalik jonli sessiyada kurator yordami',
      'Har modul yakunida video hisobotlarni tahlil qilish',
      '18 oy davomida kursga kirish',
      'Yakuniy imtihon va sertifikat',
    ],
    bonuses: [
      'Birinchi mijozlarni topish qo\'llanmasi',
      'Xizmat narxlarini shakllantirish bo\'yicha tavsiyalar',
    ],
    result: 'Professional darajada massaj qilib, birinchi mijozlaringizni topasiz',
  },
  {
    id: 'vip',
    name: 'VIP MENTOR',
    price: '5 990 000',
    currency: "so'm",
    popular: false,
    isVip: true,
    spots: 10,
    features: [
      'EXPERT tarifidagi barcha imkoniyatlar',
      'Shahnoza Soliyeva bilan 5 ta individual uchrashuv (2 soatdan)',
      'Kurs davomida shaxsiy mentorlik — yopiq savol-javob guruhi',
      'Kursga umrbod bepul kirish',
      '3 oylik qo\'llab-quvvatlash xizmati',
      'O\'quv qo\'llanmalari',
    ],
    bonuses: [
      'Instagramni to\'g\'ri yuritish darsligi + 30 kunlik kontent-reja',
      'Tayyor sotuv skriptlari',
      'Ish boshlash uchun hujjatlar paketi',
    ],
    result: 'Shahnoza Soliyevadan individual tajriba va kuchli shaxsiy brend',
  },
] as const

export const COMPARISON_FEATURES = [
  { name: 'Videodarslar (68+)', start: true, expert: true, vip: true },
  { name: 'Uy vazifasi va modul testlar', start: true, expert: true, vip: true },
  { name: 'Haftalik jonli kurator sessiyasi', start: false, expert: true, vip: true },
  { name: 'Video hisobot tahlili', start: false, expert: true, vip: true },
  { name: 'Shahnoza Soliyeva bilan individual uchrashuv', start: false, expert: false, vip: '5 ta' },
  { name: 'Shaxsiy mentorlik (yopiq guruh)', start: false, expert: false, vip: true },
  { name: 'Yakuniy imtihon va sertifikat', start: false, expert: true, vip: true },
  { name: 'Bonus darsliklar', start: '5 ta', expert: '7 ta', vip: 'Barchasi' },
  { name: 'Kursga kirish muddati', start: '12 oy', expert: '18 oy', vip: 'Umrbod' },
  { name: 'Qo\'llab-quvvatlash', start: 'Guruh', expert: 'Kurator', vip: '3 oy VIP' },
  { name: 'Joylar soni', start: '25', expert: '25', vip: '10' },
] as const

export const BONUSES = [
  { title: 'Ayollar massaji', icon: 'flower' },
  { title: 'Karrikson massaji', icon: 'hand' },
  { title: 'Yuz lifting massaji', icon: 'sparkle' },
  { title: 'Sog\'lom ovqatlanish', icon: 'leaf' },
  { title: 'Vazn tashlash metodikasi', icon: 'scale' },
  { title: 'Mijoz topish qo\'llanmasi', icon: 'users' },
  { title: 'Instagram kursi', icon: 'camera' },
  { title: 'Sotuv skriptlari', icon: 'message' },
  { title: '30 kunlik kontent-reja', icon: 'calendar' },
  { title: 'Hujjatlar paketi', icon: 'file' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Tibbiy bilim kerakmi?',
    answer:
      'Yo\'q. Kurs 0 dan boshlab o\'rgatiladi. Har qanday kasb egallari va onalar o\'qishi mumkin. Kurs kasallikka tashxis qo\'yishni emas, mutaxassis nazoratida to\'g\'ri yondashuv va amaliy usullarni o\'rgatadi.',
  },
  {
    question: 'Video darslar qoladimi?',
    answer:
      'Ha. START — 12 oy, EXPERT — 18 oy, VIP MENTOR — umrbod kirish imkoniyati mavjud. Darslarni istalgan vaqtda qayta ko\'rishingiz mumkin.',
  },
  {
    question: 'Kurs qancha davom etadi?',
    answer:
      'Kurs davomiyligi 1,5 oy. Haftasiga 3 marta darsliklar yuboriladi. Darslar maxsus onlayn o\'quvchilar uchun yozilgan va yopiq Telegram guruhda o\'tkaziladi.',
  },
  {
    question: 'Bo\'lib to\'lash mumkinmi?',
    answer:
      'Ha. Bo\'lib to\'lash imkoniyati mavjud. Batafsil ma\'lumot uchun menejer bilan bog\'laning — sizga mos tarifni tanlab beramiz.',
  },
  {
    question: 'Erkaklar o\'qishi mumkinmi?',
    answer: 'Ha. Kursda jinsga cheklov yo\'q. Asosiy maqsad — malakali mutaxassis tayyorlash.',
  },
  {
    question: 'Sertifikat beriladimi?',
    answer:
      'Ha. Yakuniy imtihon va attestatsiyadan muvaffaqiyatli o\'tgan o\'quvchilarga rasmiy sertifikat taqdim etiladi (EXPERT va VIP tariflarida).',
  },
  {
    question: 'Amaliyot bormi?',
    answer:
      'Ha. Har bir modul yakunida uy vazifalari beriladi. EXPERT tarifida video hisobotlar tahlil qilinadi. VIP tarifida Shahnoza Soliyeva bilan 5 ta individual amaliyot darsligi (2 soatdan) mavjud.',
  },
  {
    question: 'Internetdan o\'rganib bo\'lmaydimi?',
    answer:
      'YouTube sizga qaysi bolaga qaysi massajni qilish kerakligini aytmaydi va xatolaringizni hech kim to\'g\'rilamaydi. Bolalar bilan ishlash katta mas\'uliyat talab qiladi — tizimli ta\'lim kelajakdagi ishonchingiz uchun muhim.',
  },
  {
    question: 'Qaysi tarifni tanlash kerak?',
    answer:
      'Kasb egallash va birinchi mijozlargacha — EXPERT tarifini tavsiya qilamiz (eng ko\'p tanlanadi). Tezroq rivojlanish va shaxsiy mentorlik uchun — VIP MENTOR.',
  },
  {
    question: 'Guruhda nechta o\'quvchi bo\'ladi?',
    answer:
      'Har bir tarif uchun joylar cheklangan: START va EXPERT — 25 tadan, VIP MENTOR — 10 ta joy.',
  },
  {
    question: 'Telefondan o\'qish mumkinmi?',
    answer: 'Ha. Darslar Telegram orqali yuboriladi va mobil qurilmalarda qulay ko\'riladi.',
  },
  {
    question: 'Viloyatdan o\'qish mumkinmi?',
    answer: 'Ha. Kurs to\'liq onlayn — O\'zbekistonning istalgan nuqtasidan o\'qishingiz mumkin.',
  },
  {
    question: 'Kurs kasallikni davolaydimi?',
    answer:
      'Yo\'q. Kurs kasallikni davolashni emas, mutaxassis nazoratida massaj va reabilitatsiyaning o\'rni, to\'g\'ri yondashuv va amaliy usullarni o\'rgatadi. Aniq tashxisni faqat shifokor qo\'yadi.',
  },
  {
    question: 'Nega aynan Shahnoza Soliyevaning kursi?',
    answer:
      '17 yillik tajriba, 30 000+ bolalar bilan ishlash va amaliyotchilik — bu internetdagi nazariy ma\'lumot emas, ko\'p yillik haqiqiy tajriba.',
  },
  {
    question: 'Bepul konsultatsiya bormi?',
    answer:
      'Ha. Kursga yozilishdan oldin bepul konsultatsiya olishingiz mumkin — formani to\'ldiring yoki Telegram orqali yozing.',
  },
] as const

export const COURSE_GOALS = [
  'Farzandim uchun',
  'Kasb egallash uchun',
  'Qo\'shimcha daromad uchun',
  'Malaka oshirish uchun',
] as const

export const UZBEK_REGIONS = [
  'Toshkent shahri',
  'Toshkent viloyati',
  'Andijon',
  'Buxoro',
  'Farg\'ona',
  'Jizzax',
  'Xorazm',
  'Namangan',
  'Navoiy',
  'Qashqadaryo',
  'Qoraqalpog\'iston',
  'Samarqand',
  'Sirdaryo',
  'Surxondaryo',
] as const
