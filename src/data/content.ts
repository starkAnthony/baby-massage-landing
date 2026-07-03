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
  { value: '30 000+', label: 'bolalarning rivojlanishiga yordam bergan' },
  { value: '1000+', label: "o'quvchilar" },
] as const

export const WHY_MASSAGE = [
  'Rivojlanishida kechikish kuzatilayotgan bolalar soni ortmoqda',
  'Ota-onalar malakali mutaxassis qidirmoqda',
  'Uy sharoitida xizmat ko\'rsatish imkoniyati',
  'Katta investitsiya talab qilmaydigan kasb',
  'Erkin ish grafigi',
] as const

export const PROBLEMS = [
  'Kasbingiz yo\'q',
  'Daromadingiz yetarli emas',
  'Farzandingiz tufayli ishga chiqa olmaysiz',
  'Internetdagi videolar sizni chalkashtirgan',
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
  { year: '2012', title: 'Bolalar massaji va reabilitatsiyasiga ixtisoslashdi' },
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
      'Rivojlanish holatini kuzatish, massaj muhitini tayyorlash va raxit belgilarini aniqlash bo\'yicha test',
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
      '3 ta klinik holat bo\'yicha tahlil, massaj algoritmi va 5 daqiqalik fitbol mashg\'uloti videosi',
    result: 'Turli tashxislarda qanday yondashish kerakligini tushunasiz.',
    lessonsCount: 33,
  },
  {
    id: 3,
    title: 'Professional massaj amaliyoti va mutaxassis sifatida rivojlanish',
    description:
      'Professional massaj amaliyoti, fizioterapiya usullari va mijozlar bilan ishlash tizimi.',
    topics: [
      'Massajga qarshi ko\'rsatmalar',
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
  { step: 'Video mavzu', icon: 'play', detail: 'Haftasiga 3 marta' },
  { step: 'Uy vazifasi', icon: 'book', detail: 'Har modul yakunida' },
  { step: 'Tekshirish', icon: 'check', detail: 'Kurator nazorati' },
  { step: 'Jonli sessiya', icon: 'user', detail: 'EXPERT va VIP' },
  { step: 'Imtihon', icon: 'award', detail: 'Yakuniy attestatsiya' },
  { step: 'Sertifikat', icon: 'certificate', detail: 'Muvaffaqiyatli bitiruvchilar' },
] as const

export const PRICING = [
  {
    id: 'standart',
    name: 'STANDART',
    price: '1 490 000',
    currency: "so'm",
    popular: false,
    spots: 25,
    features: [
      'Barcha mavzular (video formatda)',
      'Uy vazifasi: modul vazifalari (tasodifiy 5 tasi tekshiriladi)',
      '6 oy davomida kurs kanaliga kirish huquqi',
    ],
    bonusLabel: 'Bonus videolar',
    bonuses: [
      'Ayollar uchun sog\'lomlashtiruvchi massaj',
      'Korreksion limfodrenaj massaji amaliyoti',
      'Yuz lifting massaji',
      'Sunnatga muvofiq sog\'lom ovqatlanish sirlari',
      '2 oyda 6–10 kg vazn tashlash bo\'yicha amaliyotda qo\'llanilgan texnikalar',
    ],
    results: [
      'Bolalar massajining asosiy texnikalarini o\'rganasiz',
      'Uy sharoitida bemalol ishlay olasiz',
      'Bolaning rivojlanish bosqichlarini tushunib olasiz',
    ],
  },
  {
    id: 'expert',
    name: 'EXPERT',
    tagline: 'Kasb egallash va birinchi mijozlarga qadar',
    price: '3 490 000',
    currency: "so'm",
    popular: true,
    popularBadge: 'ENG KO\'P TANLANADIGAN TARIF',
    spots: 25,
    features: [
      'STANDART tarifidagi barcha imkoniyatlar',
      'Haftalik jonli sessiyalarda kurator yordami',
      '18 oy davomida kursga kirish imkoniyati',
      'Yakuniy imtihon',
      'Sertifikat',
    ],
    bonusLabel: 'Bonus darsliklar',
    bonuses: [
      'Birinchi mijozlarni topish va ular bilan ishlash bo\'yicha qo\'llanma videosi',
      'Xizmat narxlarini shakllantirish bo\'yicha ma\'lumotlar',
      'Ish jarayonida ishlatiladigan mahsulotlarni to\'g\'ri tanlash va qayerdan olish haqidagi ma\'lumotlar',
    ],
    results: [
      'Bolalar massajini professional darajada bajara olasiz',
      'Birinchi mijozlar bilan ishlashga tayyor bo\'lasiz',
      'Qo\'shimcha daromad topishni boshlaysiz',
    ],
  },
  {
    id: 'vip',
    name: 'VIP MENTOR',
    tagline: 'Shahnoza Soliyeva bilan shaxsiy mentorlik',
    price: '5 990 000',
    currency: "so'm",
    popular: false,
    isVip: true,
    spots: 10,
    features: [
      'EXPERT tarifidagi barcha imkoniyatlar',
      'Mualliflik o\'quv qo\'llanmasi — 17 yillik tajribaga asoslangan kitob',
      'Shahnoza Soliyeva bilan real simptomli bolalarda (modellarda) 5 kunlik amaliyot darslari',
      'Umrbod davomida kursga bepul kirish',
      '3 oylik qo\'llab-quvvatlash xizmati (yopiq savol-javob guruhi)',
    ],
    bonusLabel: 'Bonuslar',
    bonuses: [
      'Instagramni to\'g\'ri yuritish bo\'yicha darslik va 30 kunlik kontent-reja',
      'Tayyor sotuv skriptlari',
      'Ish boshlash uchun hujjatlar paketi',
      'Topilgan mablag\'ni to\'g\'ri investitsiya qilish',
    ],
    results: [
      'Mutaxassis sifatida tezroq rivojlanasiz',
      'Shahnoza Soliyevadan individual tajriba olasiz',
      'O\'z mijozlar bazangizni shakllantirasiz',
      'Kuchli shaxsiy brend yaratishni boshlaysiz',
    ],
  },
] as const

export const COMPARISON_FEATURES = [
  { name: 'Barcha mavzular', standart: true, expert: true, vip: true },
  { name: 'Modul vazifalari (tekshiruv)', standart: '5 ta', expert: true, vip: true },
  { name: 'Haftalik jonli kurator sessiyasi', standart: false, expert: true, vip: true },
  { name: 'Yakuniy imtihon va sertifikat', standart: false, expert: true, vip: true },
  { name: 'Shahnoza bilan amaliyot darslari', standart: false, expert: false, vip: '5 kunlik' },
  { name: 'Mualliflik o\'quv qo\'llanmasi', standart: false, expert: false, vip: true },
  { name: 'Bonus darsliklar', standart: '5 ta video', expert: '3 ta', vip: 'Barchasi' },
  { name: 'Kursga kirish muddati', standart: '6 oy', expert: '18 oy', vip: 'Umrbodlik' },
  { name: 'Qo\'llab-quvvatlash', standart: 'Guruh', expert: 'Kurator', vip: '3 oy VIP' },
  { name: 'Joylar soni', standart: '25', expert: '25', vip: '10' },
] as const

export const BONUSES = [
  { title: 'Ayollar uchun massaj', icon: 'flower' },
  { title: 'Korreksion limfodrenaj', icon: 'hand' },
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
      'Yo\'q. Kurs noldan boshlab o\'rgatiladi. Har qanday kasb egallari va onalar o\'qishi mumkin. Kurs kasallikka tashxis qo\'yishni emas, balki mutaxassis nazoratida to\'g\'ri yondashuv va amaliy usullarni o\'rgatadi.',
  },
  {
    question: 'Kurs materiallari qolib turadimi?',
    answer:
      'Ha. STANDART — 6 oy, EXPERT — 18 oy, VIP MENTOR — umrbodlik kirish imkoniyati mavjud. Mavzularni istalgan vaqtda qayta ko\'rishingiz mumkin.',
  },
  {
    question: 'Kurs qancha davom etadi?',
    answer:
      'Kurs davomiyligi 1,5 oy. Haftasiga 3 marta yangi mavzular yuboriladi. Mavzular maxsus onlayn o\'quvchilar uchun yozilgan bo\'lib, yopiq Telegram guruhi orqali taqdim etiladi.',
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
      'Ha. Har bir modul yakunida uy vazifalari beriladi. VIP tarifida Shahnoza Soliyeva bilan real simptomli bolalarda 5 kunlik amaliyot darslari mavjud.',
  },
  {
    question: 'Internetdan o\'rganib bo\'lmaydimi?',
    answer:
      'YouTube sizga qaysi bolaga qaysi massajni qilish kerakligini aytmaydi va xatolaringizni hech kim to\'g\'rilamaydi. Bolalar bilan ishlash katta mas\'uliyat talab qiladi — tizimli ta\'lim kelajakdagi ishonchingiz uchun muhim.',
  },
  {
    question: 'Qaysi tarifni tanlash kerak?',
    answer:
      'Kasb egallash va birinchi mijozlarga qadar — EXPERT tarifini tavsiya qilamiz (eng ko\'p tanlanadi). Tezroq rivojlanish va shaxsiy mentorlik uchun — VIP MENTOR.',
  },
  {
    question: 'Guruhda nechta o\'quvchi bo\'ladi?',
    answer:
      'Har bir tarif uchun joylar cheklangan: STANDART va EXPERT — 25 tadan, VIP MENTOR — 10 ta joy.',
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
    question: 'Nega aynan Shahnoza Soliyevaning kursi?',
    answer:
      '17 yillik tajriba, 30 000 dan ortiq bolalar bilan ishlash va amaliyot tajribasi — bu internetdagi nazariy ma\'lumot emas, balki ko\'p yillik haqiqiy tajriba.',
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
