// ── I18N ──
const i18n = {
  uz: {
    "nav.skills":"Ko'nikmalar","nav.portfolio":"Portfolio","nav.services":"Xizmatlar","nav.experience":"Tajriba","nav.education":"Ta'lim","nav.contact":"Aloqa",
    "hero.available":"Loyiha uchun ochiqman","hero.greeting":"Salom, men","hero.name":"Ahmedov","hero.role":"Frontend Dasturchiman",
    "hero.sub":"Zamonaviy va tezkor web ilovalar yaratuvchi. React, TypeScript va Node.js bo'yicha 3+ yillik tajribaga egaman.",
    "hero.cta1":"Ishlarimni ko'rish","hero.cta2":"Bog'lanish",
    "skills.label":"// ko'nikmalar","skills.title":"Texnologiyalar","skills.sub":"Zamonaviy frontend ekosistemasi bilan ishlashda keng tajribaga egaman.",
    "portfolio.label":"// ishlar","portfolio.title":"Portfolio","portfolio.sub":"Real muammolarni hal qiluvchi, foydalanuvchi uchun qulay ilovalar.",
    "p1.title":"Endokrinolog Dildora","p1.desc":"Dr. Dildora Xasanovna uchun tibbiy landing page. Diabet, qalqonsimon bez va gormonal buzilishlar bo'yicha mutaxassis shifokor sayti. SEO optimizatsiya, qabulga yozilish formasi.",
    "p2.title":"Allergolog Ahmedov","p2.desc":"Dr. Xushnud Ahmedov — allergolog-immunolog uchun professional tibbiy sayt. 23+ yillik tajriba, ASIT immunoterapiya, bronxial astma. Online qabul yozilish tizimi.",
    "p3.title":"Assistly — AI Biznes Yordamchisi","p3.desc":"Telegram, Instagram, WhatsApp va sayt uchun AI yordamchi platforma. Mijozlarga 24/7 avtomatik javob, qabul yozish, savollarga javob berish.",
    "p4.title":"Algoritmus","p4.desc":"Raqamli texnologiyalar bilan muammolaringizni hal qiluvchi IT jamoa sayti. Korporativ web-ilovalar, dizayn va dasturlash xizmatlari.",
    "p5.title":"Assistly — Dashboard","p5.desc":"Assistly platformasining asosiy boshqaruv paneli. AI botlarni sozlash, suhbatlar monitoringi, statistika va tahlil. To'liq funksional SPA ilova.",
    "proj.live":"Live Demo","proj.code":"GitHub",
    "exp.label":"// tajriba","exp.title":"Ish Tajribasi","exp.sub":"Turli kompaniyalarda amaliy tajriba ortirdim.",
    "e1.date":"2023 — HOZIR","e1.role":"Senior Frontend Developer","e1.desc":"React va TypeScript yordamida korporativ veb-ilovalar ishlab chiqish. Jamoa rahbari sifatida 5 ta dasturchiga mentor bo'lish. Performance optimizatsiyasi orqali yuklanish vaqtini 40% qisqartirish.",
    "e2.date":"2022 — 2023","e2.role":"Frontend Developer","e2.desc":"Landing page, korporativ saytlar va web-ilovalar ishlab chiqish. Figma dizaynlarini pixel-perfect kodga aylantirish. 20+ muvaffaqiyatli loyiha yetkazib berish.",
    "e3.date":"2021 — 2022","e3.role":"Junior Developer","e3.desc":"HTML/CSS/JavaScript asosida statik saytlar yaratish. React ni o'rganib, birinchi SPA loyihasini muvaffaqiyatli tamomlash.",
    "edu.label":"// ta'lim","edu.title":"Ta'lim","edu.sub":"Bilim va ko'nikmalarni doimiy yangilab boraman.",
    "ed1.degree":"Axborot Texnologiyalari","ed1.date":"2018 — 2022","ed1.desc":"Kompyuter tizimlari va tarmoqlari mutaxassisligi bo'yicha bakalavr.",
    "ed2.degree":"React Professional","ed2.date":"2022","ed2.desc":"Meta tomonidan berilgan rasmiy React sertifikati.",
    "ed3.degree":"AWS Solutions Architect","ed3.date":"2023","ed3.desc":"Cloud arxitekturasi va AWS xizmatlari bo'yicha sertifikat.",
    "ed4.degree":"Najot Ta'lim","ed4.date":"2021","ed4.desc":"O'zbekistondagi eng yaxshi frontend bootcamp. HTML, CSS, JS, React.",
    "contact.label":"// buyurtma","contact.title":"Loyiha Buyurtma Qiling","contact.sub":"Sizning g'oyangizni haqiqatga aylantiramiz. Quyidagi formani to'ldiring — 24 soat ichida javob beraman!",
    "contact.services_label":"// xizmatlar",
    "svc1":"🌐 Web sayt — korporativ, portfolio, biznes","svc2":"🚀 Landing page — konversiya uchun optimallashtirilgan","svc3":"🤖 Telegram bot — avtomatlashtirish, savdo","svc4":"📊 CRM tizimi — mijozlar boshqaruvi","svc5":"🛠 Admin panel — to'liq boshqaruv tizimi","svc6":"🛒 E-Commerce — onlayn do'kon","svc7":"📱 Dashboard — analitika va hisobotlar",
    "form.title":"Ariza Qoldirish","form.subtitle":"// barcha maydonlarni to'ldiring",
    "form.name":"// ISM","form.phone":"// TELEFON","form.service":"// XIZMAT TURI","form.service_placeholder":"— Xizmatni tanlang —",
    "opt.website":"🌐 Web sayt","opt.landing":"🚀 Landing page","opt.bot":"🤖 Telegram bot","opt.crm":"📊 CRM tizimi","opt.admin":"🛠 Admin panel","opt.ecommerce":"🛒 E-Commerce do'kon","opt.dashboard":"📱 Dashboard / Analitika","opt.other":"💡 Boshqa",
    "form.budget":"// BYUDJET","budget.discuss":"Kelishamiz",
    "form.desc":"// LOYIHA HAQIDA","form.deadline":"// MO'LJALLANGAN MUDDAT","form.deadline_placeholder":"— Muddatni tanlang —",
    "dl.1w":"⚡ 1 hafta (tezkor)","dl.2w":"📅 2 hafta","dl.1m":"🗓 1 oy","dl.2m":"📆 2 oy","dl.flex":"🕐 Kelishamiz",
    "form.note":"// 24 soat ichida javob","form.send":"Ariza Yuborish",
    "success.title":"Ariza qabul qilindi!","success.sub":"Tez orada siz bilan bog'lanaman. Telegram orqali ham murojaat qilishingiz mumkin.",
    "svcs.label":"// xizmatlar","svcs.title":"Nima Qila Olaman?","svcs.sub":"Har bir xizmat sizning biznesingizni o'stirish va raqobatda oldinga chiqish uchun mo'ljallangan.",
    "svcs.cta_text":"Qaysi xizmat siz uchun kerakligini bilmaysizmi?","svcs.cta_btn":"Maslahat olish",
    "svc.benefit_label":"Foyda",
    "svc1.title":"Web Sayt","svc1.type":"Korporativ · Portfolio · Biznes",
    "svc1.desc":"Professional va zamonaviy web sayt — kompaniyangizning raqamli yuzi. Mijozlar sizni avval internetda topadi.",
    "svc1.f1":"Dizayn — Figma'dan pixel-perfect kod","svc1.f2":"Mobil va planshetga moslashtirilgan","svc1.f3":"SEO asoslar (meta, OG, sitemap)","svc1.f4":"Tez yuklanish (Core Web Vitals)","svc1.f5":"Ko'p tilli qo'llab-quvvatlash",
    "svc1.benefit":"Onlayn obro'ingiz oshadi, yangi mijozlar o'zi topib keladi",
    "svc2.title":"Landing Page","svc2.type":"Konversiya uchun optimallashtirilgan",
    "svc2.desc":"Bir maqsadga yo'naltirilgan sahifa — tashrif buyuruvchini harakatga undaydigan va sotuvga aylantiradigan.",
    "svc2.f1":"A/B test uchun tayyor struktura","svc2.f2":"CTA (call-to-action) bloklari","svc2.f3":"Forma va Telegram/WhatsApp integratsiya","svc2.f4":"Yandex.Metrica / Google Analytics","svc2.f5":"1–3 kun ichida yetkazib berish",
    "svc2.benefit":"Reklama xarajati o'z samarasini beradi, konversiya ko'tariladi",
    "svc3.title":"Telegram Bot","svc3.type":"Avtomatlashtirish · Savdo · Xizmat",
    "svc3.desc":"Biznesingizni 24/7 ishlaydigan bot orqali avtomatlashtiring — xodim kerak bo'lmasdan mijozlarga xizmat ko'rsating.",
    "svc3.f1":"Buyurtma qabul qilish va qayta ishlash","svc3.f2":"To'lov tizimi integratsiyasi (Payme, Click)","svc3.f3":"Admin panel — boshqaruv paneli","svc3.f4":"Xabar yuborish va newsletter","svc3.f5":"Statistika va hisobotlar",
    "svc3.benefit":"Operatsion xarajatlar kamayadi, mijozlar tez javob oladi",
    "svc4.title":"CRM Tizimi","svc4.type":"Mijozlar boshqaruvi",
    "svc4.desc":"Mijozlaringiz ma'lumotlari, buyurtmalar va munosabatlar tarixini bir joyda saqlang va boshqaring.",
    "svc4.f1":"Mijozlar bazasi va segmentatsiya","svc4.f2":"Buyurtma va bitim kuzatuvi","svc4.f3":"Xodimlar va rollar boshqaruvi","svc4.f4":"Avtomatik eslatmalar va vazifalar","svc4.f5":"Hisobotlar va tahlil grafiklari",
    "svc4.benefit":"Hech bir mijoz unutilmaydi, sotuv sikli qisqaradi",
    "svc5.title":"Admin Panel","svc5.type":"To'liq boshqaruv tizimi",
    "svc5.desc":"Sayt yoki ilovangiz kontentini, foydalanuvchilar va ma'lumotlarni texnik bilimisiz boshqarish imkoniyati.",
    "svc5.f1":"Kontent (CRUD) boshqaruvi","svc5.f2":"Foydalanuvchi va ruxsatlar tizimi","svc5.f3":"Fayl va media menejeri","svc5.f4":"Log va audit trail","svc5.f5":"REST API yoki GraphQL bilan integratsiya",
    "svc5.benefit":"Dasturchi yordamisiz saytingizni o'zingiz boshqarasiz",
    "svc6.title":"E-Commerce","svc6.type":"Onlayn do'kon",
    "svc6.desc":"To'liq funksional onlayn do'kon — mahsulot katalogidan tortib to to'lov va yetkazib berishgacha.",
    "svc6.f1":"Mahsulot katalogi va filtrlar","svc6.f2":"Savatcha va checkout jarayoni","svc6.f3":"Payme, Click, Uzum to'lov integratsiyasi","svc6.f4":"Inventar va ombor boshqaruvi","svc6.f5":"Aksiya, kupon va chegirma tizimi",
    "svc6.benefit":"Sotuv kanali kengayadi, tun-kunduz buyurtma qabul qilasiz",
    "svc7.title":"Dashboard / Analitika","svc7.type":"Ma'lumotlar vizualizatsiyasi · Hisobotlar",
    "svc7.desc":"Biznesingizdagi barcha raqamlarni real vaqtda ko'rish — qaror qabul qilish uchun aniq ma'lumotlarga ega bo'ling.",
    "svc7.f1":"Real-time grafik va diagrammalar","svc7.f2":"KPI va metrikalar paneli","svc7.f3":"Filtrlash, qidirish, eksport (PDF/Excel)","svc7.f4":"Ko'p foydalanuvchi va ruxsatlar","svc7.f5":"Mobil qurilmaga moslashtirilgan interfeys","svc7.f6":"Tashqi API va ma'lumotlar bazasi bilan integratsiya",
    "svc7.benefit":"Taxmin emas, aniq raqamlarga asoslanib biznesni o'stirasiz"
  },
  en: {
    "nav.skills":"Skills","nav.portfolio":"Portfolio","nav.services":"Services","nav.experience":"Experience","nav.education":"Education","nav.contact":"Contact",
    "hero.available":"Open for projects","hero.greeting":"Hi, I'm","hero.name":"Ahmedov","hero.role":"Frontend Developer",
    "hero.sub":"Building modern and performant web applications. 3+ years of experience with React, TypeScript and Node.js.",
    "hero.cta1":"View my work","hero.cta2":"Get in touch",
    "skills.label":"// skills","skills.title":"Technologies","skills.sub":"Extensive experience working with the modern frontend ecosystem.",
    "portfolio.label":"// work","portfolio.title":"Portfolio","portfolio.sub":"User-friendly apps that solve real problems.",
    "p1.title":"Endocrinologist Dildora","p1.desc":"Medical landing page for Dr. Dildora Xasanovna. Specialist in diabetes, thyroid, and hormonal disorders. SEO-optimized with appointment booking form.",
    "p2.title":"Allergologist Ahmedov","p2.desc":"Professional medical website for Dr. Xushnud Ahmedov, allergist-immunologist. 23+ years experience, ASIT immunotherapy, bronchial asthma. Online appointment system.",
    "p3.title":"Assistly — AI Business Assistant","p3.desc":"AI assistant platform for Telegram, Instagram, WhatsApp and websites. 24/7 automated customer responses, appointment booking, multi-language support.",
    "p4.title":"Algoritmus","p4.desc":"IT team website solving problems with digital technology. Corporate web apps, design and development services.",
    "p5.title":"Assistly — Dashboard","p5.desc":"Main control panel for the Assistly platform. Configure AI bots, monitor conversations, view statistics and analytics. Full-featured SPA application.",
    "proj.live":"Live Demo","proj.code":"GitHub",
    "exp.label":"// experience","exp.title":"Work Experience","exp.sub":"Gained practical experience at various companies.",
    "e1.date":"2023 — PRESENT","e1.role":"Senior Frontend Developer","e1.desc":"Developing corporate web applications using React and TypeScript. Mentoring a team of 5 developers. Reduced loading time by 40% through performance optimization.",
    "e2.date":"2022 — 2023","e2.role":"Frontend Developer","e2.desc":"Developing landing pages, corporate sites and web apps. Converting Figma designs to pixel-perfect code. Delivered 20+ successful projects.",
    "e3.date":"2021 — 2022","e3.role":"Junior Developer","e3.desc":"Creating static websites using HTML/CSS/JavaScript. Learned React and successfully completed the first SPA project.",
    "edu.label":"// education","edu.title":"Education","edu.sub":"Continuously updating my knowledge and skills.",
    "ed1.degree":"Information Technology","ed1.date":"2018 — 2022","ed1.desc":"Bachelor's degree in Computer Systems and Networks.",
    "ed2.degree":"React Professional","ed2.date":"2022","ed2.desc":"Official React certification issued by Meta.",
    "ed3.degree":"AWS Solutions Architect","ed3.date":"2023","ed3.desc":"Certificate in cloud architecture and AWS services.",
    "ed4.degree":"Najot Ta'lim","ed4.date":"2021","ed4.desc":"One of the best frontend bootcamps in Uzbekistan. HTML, CSS, JS, React.",
    "contact.label":"// order","contact.title":"Order a Project","contact.sub":"Let's turn your idea into reality. Fill out the form below — I'll respond within 24 hours!",
    "contact.services_label":"// services",
    "svc1":"🌐 Website — corporate, portfolio, business","svc2":"🚀 Landing page — conversion-optimized","svc3":"🤖 Telegram bot — automation, sales","svc4":"📊 CRM system — client management","svc5":"🛠 Admin panel — full management system","svc6":"🛒 E-Commerce — online store","svc7":"📱 Dashboard — analytics and reports",
    "form.title":"Submit an Application","form.subtitle":"// fill in all fields",
    "form.name":"// NAME","form.phone":"// PHONE","form.service":"// SERVICE TYPE","form.service_placeholder":"— Select a service —",
    "opt.website":"🌐 Website","opt.landing":"🚀 Landing page","opt.bot":"🤖 Telegram bot","opt.crm":"📊 CRM system","opt.admin":"🛠 Admin panel","opt.ecommerce":"🛒 E-Commerce store","opt.dashboard":"📱 Dashboard / Analytics","opt.other":"💡 Other",
    "form.budget":"// BUDGET","budget.discuss":"Let's discuss",
    "form.desc":"// ABOUT PROJECT","form.deadline":"// ESTIMATED DEADLINE","form.deadline_placeholder":"— Select a deadline —",
    "dl.1w":"⚡ 1 week (urgent)","dl.2w":"📅 2 weeks","dl.1m":"🗓 1 month","dl.2m":"📆 2 months","dl.flex":"🕐 Flexible",
    "form.note":"// response within 24 hours","form.send":"Submit Application",
    "success.title":"Application received!","success.sub":"I'll get in touch with you soon. You can also reach me via Telegram.",
    "svcs.label":"// services","svcs.title":"What Can I Do?","svcs.sub":"Each service is designed to grow your business and stay ahead of the competition.",
    "svcs.cta_text":"Not sure which service you need?","svcs.cta_btn":"Get a Consultation",
    "svc.benefit_label":"Benefit",
    "svc1.title":"Website","svc1.type":"Corporate · Portfolio · Business",
    "svc1.desc":"A professional and modern website — the digital face of your company. Clients find you online first.",
    "svc1.f1":"Design — pixel-perfect code from Figma","svc1.f2":"Responsive for mobile and tablet","svc1.f3":"SEO basics (meta, OG, sitemap)","svc1.f4":"Fast loading (Core Web Vitals)","svc1.f5":"Multi-language support",
    "svc1.benefit":"Your online reputation grows, new clients find you on their own",
    "svc2.title":"Landing Page","svc2.type":"Conversion-optimized",
    "svc2.desc":"A single-purpose page that drives visitors to act and turns them into customers.",
    "svc2.f1":"Ready structure for A/B testing","svc2.f2":"CTA (call-to-action) blocks","svc2.f3":"Form and Telegram/WhatsApp integration","svc2.f4":"Yandex.Metrica / Google Analytics","svc2.f5":"Delivered in 1–3 days",
    "svc2.benefit":"Ad spend pays off, conversion rate increases",
    "svc3.title":"Telegram Bot","svc3.type":"Automation · Sales · Support",
    "svc3.desc":"Automate your business with a 24/7 bot — serve clients without needing extra staff.",
    "svc3.f1":"Order acceptance and processing","svc3.f2":"Payment integration (Payme, Click)","svc3.f3":"Admin panel for management","svc3.f4":"Messaging and newsletter","svc3.f5":"Statistics and reports",
    "svc3.benefit":"Operating costs decrease, clients get instant responses",
    "svc4.title":"CRM System","svc4.type":"Client management",
    "svc4.desc":"Store and manage your client data, orders, and relationship history all in one place.",
    "svc4.f1":"Client database and segmentation","svc4.f2":"Order and deal tracking","svc4.f3":"Staff and role management","svc4.f4":"Automated reminders and tasks","svc4.f5":"Reports and analytics charts",
    "svc4.benefit":"No client is forgotten, the sales cycle shortens",
    "svc5.title":"Admin Panel","svc5.type":"Full management system",
    "svc5.desc":"Manage your site or app content, users, and data without any technical knowledge.",
    "svc5.f1":"Content (CRUD) management","svc5.f2":"User and permissions system","svc5.f3":"File and media manager","svc5.f4":"Logs and audit trail","svc5.f5":"REST API or GraphQL integration",
    "svc5.benefit":"You manage your site yourself, without a developer",
    "svc6.title":"E-Commerce","svc6.type":"Online store",
    "svc6.desc":"A fully functional online store — from product catalog to payment and delivery.",
    "svc6.f1":"Product catalog and filters","svc6.f2":"Shopping cart and checkout flow","svc6.f3":"Payme, Click, Uzum payment integration","svc6.f4":"Inventory and warehouse management","svc6.f5":"Promotions, coupons and discount system",
    "svc6.benefit":"Your sales channel expands, orders come in day and night",
    "svc7.title":"Dashboard / Analytics","svc7.type":"Data visualization · Reports",
    "svc7.desc":"See all your business numbers in real time — make decisions based on accurate data.",
    "svc7.f1":"Real-time charts and diagrams","svc7.f2":"KPI and metrics panel","svc7.f3":"Filter, search, export (PDF/Excel)","svc7.f4":"Multi-user and permissions","svc7.f5":"Mobile-responsive interface","svc7.f6":"External API and database integration",
    "svc7.benefit":"Grow your business based on facts, not guesses"
  },
  ru: {
    "nav.skills":"Навыки","nav.portfolio":"Портфолио","nav.services":"Услуги","nav.experience":"Опыт","nav.education":"Образование","nav.contact":"Контакты",
    "hero.available":"Открыт для проектов","hero.greeting":"Привет, я","hero.name":"Ahmedov","hero.role":"Frontend Разработчик",
    "hero.sub":"Создаю современные и быстрые веб-приложения. Более 3 лет опыта с React, TypeScript и Node.js.",
    "hero.cta1":"Посмотреть работы","hero.cta2":"Связаться",
    "skills.label":"// навыки","skills.title":"Технологии","skills.sub":"Обширный опыт работы с современной экосистемой фронтенда.",
    "portfolio.label":"// работы","portfolio.title":"Портфолио","portfolio.sub":"Удобные для пользователей приложения, решающие реальные задачи.",
    "p1.title":"Эндокринолог Дилдора","p1.desc":"Медицинский лендинг для Dr. Dilдоры Хасановны. Специалист по диабету, щитовидной железе и гормональным нарушениям. SEO-оптимизация, форма записи на приём.",
    "p2.title":"Аллерголог Ахмедов","p2.desc":"Профессиональный медицинский сайт для Dr. Хушнуда Ахмедова — аллерголога-иммунолога. 23+ лет опыта, АСИТ иммунотерапия, бронхиальная астма. Онлайн-запись.",
    "p3.title":"Assistly — ИИ Бизнес-Ассистент","p3.desc":"Платформа ИИ-ассистента для Telegram, Instagram, WhatsApp и сайта. Автоматические ответы 24/7, запись на приём, многоязычная поддержка.",
    "p4.title":"Algoritmus","p4.desc":"Сайт IT-команды, решающей проблемы с помощью цифровых технологий. Корпоративные веб-приложения, дизайн и разработка.",
    "p5.title":"Assistly — Dashboard","p5.desc":"Главная панель управления платформы Assistly. Настройка AI-ботов, мониторинг диалогов, статистика и аналитика. Полнофункциональное SPA-приложение.",
    "proj.live":"Live Demo","proj.code":"GitHub",
    "exp.label":"// опыт","exp.title":"Опыт Работы","exp.sub":"Приобрёл практический опыт в различных компаниях.",
    "e1.date":"2023 — СЕЙЧАС","e1.role":"Senior Frontend Developer","e1.desc":"Разработка корпоративных веб-приложений на React и TypeScript. Менторинг команды из 5 разработчиков. Снижение времени загрузки на 40% за счёт оптимизации производительности.",
    "e2.date":"2022 — 2023","e2.role":"Frontend Developer","e2.desc":"Разработка лендингов, корпоративных сайтов и веб-приложений. Перевод дизайнов Figma в pixel-perfect код. Сдача 20+ успешных проектов.",
    "e3.date":"2021 — 2022","e3.role":"Junior Developer","e3.desc":"Создание статических сайтов на HTML/CSS/JavaScript. Освоил React и успешно завершил первый SPA-проект.",
    "edu.label":"// образование","edu.title":"Образование","edu.sub":"Постоянно обновляю знания и навыки.",
    "ed1.degree":"Информационные Технологии","ed1.date":"2018 — 2022","ed1.desc":"Бакалавр по специальности «Компьютерные системы и сети».",
    "ed2.degree":"React Professional","ed2.date":"2022","ed2.desc":"Официальный сертификат React от Meta.",
    "ed3.degree":"AWS Solutions Architect","ed3.date":"2023","ed3.desc":"Сертификат по облачной архитектуре и сервисам AWS.",
    "ed4.degree":"Najot Ta'lim","ed4.date":"2021","ed4.desc":"Один из лучших frontend-буткемпов в Узбекистане. HTML, CSS, JS, React.",
    "contact.label":"// заказ","contact.title":"Заказать Проект","contact.sub":"Превратим вашу идею в реальность. Заполните форму ниже — отвечу в течение 24 часов!",
    "contact.services_label":"// услуги",
    "svc1":"🌐 Веб-сайт — корпоративный, портфолио, бизнес","svc2":"🚀 Landing page — оптимизированный для конверсии","svc3":"🤖 Telegram бот — автоматизация, продажи","svc4":"📊 CRM система — управление клиентами","svc5":"🛠 Админ панель — полная система управления","svc6":"🛒 E-Commerce — интернет-магазин","svc7":"📱 Dashboard — аналитика и отчёты",
    "form.title":"Оставить Заявку","form.subtitle":"// заполните все поля",
    "form.name":"// ИМЯ","form.phone":"// ТЕЛЕФОН","form.service":"// ТИП УСЛУГИ","form.service_placeholder":"— Выберите услугу —",
    "opt.website":"🌐 Веб-сайт","opt.landing":"🚀 Landing page","opt.bot":"🤖 Telegram бот","opt.crm":"📊 CRM система","opt.admin":"🛠 Админ панель","opt.ecommerce":"🛒 E-Commerce магазин","opt.dashboard":"📱 Dashboard / Аналитика","opt.other":"💡 Другое",
    "form.budget":"// БЮДЖЕТ","budget.discuss":"Обсудим",
    "form.desc":"// О ПРОЕКТЕ","form.deadline":"// ПРИМЕРНЫЙ СРОК","form.deadline_placeholder":"— Выберите срок —",
    "dl.1w":"⚡ 1 неделя (срочно)","dl.2w":"📅 2 недели","dl.1m":"🗓 1 месяц","dl.2m":"📆 2 месяца","dl.flex":"🕐 Гибко",
    "form.note":"// ответ в течение 24 часов","form.send":"Отправить Заявку",
    "success.title":"Заявка принята!","success.sub":"Скоро свяжусь с вами. Также можете обратиться через Telegram.",
    "svcs.label":"// услуги","svcs.title":"Что Я Умею?","svcs.sub":"Каждая услуга направлена на рост вашего бизнеса и опережение конкурентов.",
    "svcs.cta_text":"Не знаете, какая услуга вам нужна?","svcs.cta_btn":"Получить консультацию",
    "svc.benefit_label":"Польза",
    "svc1.title":"Веб-сайт","svc1.type":"Корпоративный · Портфолио · Бизнес",
    "svc1.desc":"Профессиональный и современный сайт — цифровое лицо вашей компании. Клиенты находят вас в интернете первыми.",
    "svc1.f1":"Дизайн — pixel-perfect код из Figma","svc1.f2":"Адаптирован для мобильных и планшетов","svc1.f3":"SEO-основы (meta, OG, sitemap)","svc1.f4":"Быстрая загрузка (Core Web Vitals)","svc1.f5":"Поддержка нескольких языков",
    "svc1.benefit":"Растёт онлайн-репутация, новые клиенты находят вас сами",
    "svc2.title":"Landing Page","svc2.type":"Оптимизирован для конверсии",
    "svc2.desc":"Страница с одной целью — побудить посетителя к действию и превратить его в покупателя.",
    "svc2.f1":"Готовая структура для A/B тестов","svc2.f2":"CTA (call-to-action) блоки","svc2.f3":"Форма и интеграция с Telegram/WhatsApp","svc2.f4":"Yandex.Metrica / Google Analytics","svc2.f5":"Сдача в течение 1–3 дней",
    "svc2.benefit":"Рекламные расходы окупаются, конверсия растёт",
    "svc3.title":"Telegram Бот","svc3.type":"Автоматизация · Продажи · Поддержка",
    "svc3.desc":"Автоматизируйте бизнес с помощью бота 24/7 — обслуживайте клиентов без лишних сотрудников.",
    "svc3.f1":"Приём и обработка заказов","svc3.f2":"Интеграция платёжных систем (Payme, Click)","svc3.f3":"Админ-панель для управления","svc3.f4":"Рассылка сообщений и newsletter","svc3.f5":"Статистика и отчёты",
    "svc3.benefit":"Операционные расходы снижаются, клиенты получают мгновенные ответы",
    "svc4.title":"CRM Система","svc4.type":"Управление клиентами",
    "svc4.desc":"Храните и управляйте данными клиентов, заказами и историей отношений в одном месте.",
    "svc4.f1":"База клиентов и сегментация","svc4.f2":"Отслеживание заказов и сделок","svc4.f3":"Управление сотрудниками и ролями","svc4.f4":"Автоматические напоминания и задачи","svc4.f5":"Отчёты и графики аналитики",
    "svc4.benefit":"Ни один клиент не забыт, цикл продаж сокращается",
    "svc5.title":"Админ Панель","svc5.type":"Полная система управления",
    "svc5.desc":"Управляйте контентом, пользователями и данными сайта или приложения без технических знаний.",
    "svc5.f1":"Управление контентом (CRUD)","svc5.f2":"Система пользователей и разрешений","svc5.f3":"Менеджер файлов и медиа","svc5.f4":"Логи и аудит-трейл","svc5.f5":"Интеграция с REST API или GraphQL",
    "svc5.benefit":"Управляете сайтом самостоятельно, без разработчика",
    "svc6.title":"E-Commerce","svc6.type":"Интернет-магазин",
    "svc6.desc":"Полнофункциональный интернет-магазин — от каталога товаров до оплаты и доставки.",
    "svc6.f1":"Каталог товаров и фильтры","svc6.f2":"Корзина и процесс оформления заказа","svc6.f3":"Интеграция Payme, Click, Uzum","svc6.f4":"Управление инвентарём и складом","svc6.f5":"Акции, купоны и система скидок",
    "svc6.benefit":"Канал продаж расширяется, заказы поступают круглосуточно",
    "svc7.title":"Dashboard / Аналитика","svc7.type":"Визуализация данных · Отчёты",
    "svc7.desc":"Видите все цифры бизнеса в реальном времени — принимайте решения на основе точных данных.",
    "svc7.f1":"Графики и диаграммы в реальном времени","svc7.f2":"Панель KPI и метрик","svc7.f3":"Фильтрация, поиск, экспорт (PDF/Excel)","svc7.f4":"Мультипользовательский доступ и разрешения","svc7.f5":"Интерфейс адаптирован под мобильные","svc7.f6":"Интеграция с внешними API и базами данных",
    "svc7.benefit":"Развиваете бизнес на основе фактов, а не догадок"
  }
};

let currentLang = 'uz';
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => { if(b.textContent.toLowerCase()===lang) b.classList.add('active'); });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

// ── THEME ──
let isDark = true;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.querySelector('.theme-btn').textContent = isDark ? '🌙' : '☀️';
}

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── PARTICLES ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
for(let i=0;i<60;i++) {
  particles.push({
    x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    size: Math.random()*2+0.5, opacity: Math.random()*0.5+0.1,
    char: ['<','>','/','{}','[]','()','=>','//','&&','||'][Math.floor(Math.random()*10)]
  });
}
function animParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
    if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#6366F1';
    ctx.font = `${11+p.size}px JetBrains Mono, monospace`;
    ctx.fillText(p.char, p.x, p.y);
    ctx.restore();
  });
  requestAnimationFrame(animParticles);
}
animParticles();

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
    }
  });
}, {threshold:0.1});
document.querySelectorAll('.skill-card,.project-card,.edu-card,.timeline-item').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(20px)';
  el.style.transition='opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ── BUDGET CHIPS ──
let selectedBudget = '';
document.addEventListener('click', e => {
  if(e.target.classList.contains('budget-chip')) {
    document.querySelectorAll('.budget-chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    selectedBudget = e.target.dataset.val;
  }
});

// ── ORDER SUBMIT ──
function submitOrder() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const service = document.getElementById('f-service').value;
  const desc = document.getElementById('f-desc').value.trim();
  if(!name || !phone || !service) {
    const required = [
      document.getElementById('f-name'),
      document.getElementById('f-phone'),
      document.getElementById('f-service')
    ];
    required.forEach(el => {
      if(!el.value.trim()) {
        el.style.borderColor = '#EF4444';
        el.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.2)';
        setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 2000);
      }
    });
    return;
  }
  document.getElementById('orderFormContent').style.display = 'none';
  document.getElementById('orderSuccess').style.display = 'block';
}

// Init
setLang('uz');
