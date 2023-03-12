import { Socials } from "Components/Business/Card/styledComponents/NormalCard";
import { Country, Status } from "Interfaces";
import { Agency } from "Interfaces/Businesses/agency";

export const AGENCYS: Agency[] = [
    {
        id: 'agc1',
        name: { en: 'Shadavisa', fa: 'شادا ویزا' },
        slug: 'shada-visa',
        country: [Country.Global, Country.Iran],
        isFeatured: true,
        desc: {
            en: `Shada Institute is the result of the continuous efforts of an active team and an idealistic thought in the international immigration and employment industry. We are always trying to identify the needs of our applicants in various aspects with a comprehensive view and try to solve them in the shortest time by providing quality services. We are proud that we have been able to help hundreds of Iranians to immigrate to Australia and continue this path. Our values are the expert guidance and guidance of clients and building trust and confidence by protecting their material and spiritual interests by observing professional ethics and in the shortest possible time.`,
            fa: `موسسه شادا، حاصل تلاش های بی وقفه یک تیم فعال و یک اندیشه ی آرمان گرایانه در صنعت مهاجرت و کاریابی بین المللی می باشد. ما همواره در تلاشیم تا با نگاهی جامع، نیازمندی های متقاضیان خود را در جنبه های مختلف شناسایی و در کوتاه ترین زمان با ارائه ی خدماتی با کیفیت، درصدد رفع آن برآییم. مفتخریم که تا به امروز توانسته ایم به صدها ایرانی برای مهاجرت به استرالیا کمک کرده و همچنان این مسیر را ادامه دهیم. ارزش های ما راهنمایی و هدایت تخصصی موکلین و ایجاد اعتماد و اطمینان با حفظ منافع مادی و معنوی ایشان با رعایت اخلاق حرفه ای و در کوتاه ترین زمان ممکن می باشد.`,
        },
        contact: {
            website: 'https://shadavisa.com/',
            phone: ['02191009946'],
        },
        status: Status.ACTIVE,
        agentsId: ['agt1'],
        socialsId: ['soc1'],
    },
    {
        id: 'agc2',
        name: { en: 'Visayab', fa: 'ویزا یاب' },
        slug: 'visa-yab',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Visayab Immigration Company was established in 2008 by Dr. Syros Ahmadi, an official immigration lawyer with the code "0854826" in the "Mara" organization in Australia. Dr. Syros Ahmadi, with the cooperation of official lawyers and his team of professional and compassionate experts, has been able to register more than 3000 successful cases in 14 years of providing immigration services.`,
            fa: `شرکت مهاجرتی ویزایاب در سال ۲۰۰۸ توسط دکتر سیروس احمدی وکیل رسمی مهاجرت با کد ” ۰۸۵۴۸۲۶ ” در سازمان “مارا ” در کشور استرالیا تاسیس شد. دکتر سیروس احمدی با همکاری وکلای رسمی و  تیم کارشناسان حرفه ای و دلسوزخود توانسته در ۱۴ سال فعالیت درزمینه ارائه خدمات  امور مهاجرت، بیش از ۳۰۰۰ پرونده موفق را به ثبت برساند`,
        },
        contact: {
            website: 'https://visayab.com/',
            phone: ['02191017028'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc3',
        name: { en: 'Pasargadmigration', fa: 'مهاجرت پاسارگاد' },
        slug: 'pasargad-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `In addition to welcoming you in person in Tehran and Sydney, the group of Pasargad immigration lawyers will also answer your phone calls and will be by your side from the beginning until you start a new life at your destination because they believe that with proper presentation The best services after landing, favorable conditions can be provided for immigrants.`,
            fa: `گروه وکلای مهاجرت پاسارگاد علاوه بر اینکه در تهران و سیدنی بصورت حضوری پذیرایتان هستند، پاسخگوی تماس های تلفنی نیز خواهند بود و از ابتدای راه تا زمانی که زندگی جدیدی را در مقصد شروع کنید، در کنارتان خواهند بود زیرا بر این باورند که با ارائه مناسب ترین خدمات پس از لندینگ، می توان شرایط مطلوبی برای مهاجرین فراهم کرد.`,
        },
        contact: {
            website: 'https://pasargadmigration.com/',
            phone: ['02188029976'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc4',
        name: { en: 'Ajmigration', fa: 'شرکت مهاجرتی اعظم جعفری' },
        slug: 'ajmigration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Based on AJ Migration (Migration Code of Ethics), the company considers itself committed to respecting the interests and interests of its customers and uses its efforts to provide the best services and advice to its customers. Due to the continuous changes in the field of immigration to Australia, Ms. Jafari has kept her knowledge up-to-date in the field of immigration by participating in educational workshops that are held permanently in the field of immigration by organizations affiliated with the Australian Immigration Department. and provide the most up-to-date necessary guidance to its customers.`,
            fa: `شرکت بر اساس AJ Migration  (منشور اخلاقی امور مهاجرتی) خود را متعهد به رعایت مصالح و منافع مشتری دانسته و تلاش خود را جهت ارائه بهترین خدمات و مشاوره به مشتریان خود بکار می‌گیرد. با توجه به تغییرات مستمر در زمینه امور مهاجرتی به استرالیا، خانم جعفری با شرکت در کارگاه‌های آموزشی که بطور دائمی در زمینه امور مهاجرتی توسط سازمان های وابسته به اداره مهاجرت استرالیا برگزار می‌شود، اطلاعات خود را در زمینه امور مهاجرتی بروز نگه داشته تا بتواند بهترین و بروزترین راهنمایی لازم را به مشتریان خود ارائه نماید`,
        },
        contact: {
            website: 'https://www.ajmigration.com/fa/',
            phone: ['0061280346901'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc5',
        name: { en: 'Regalmigration', fa: 'مهاجرت مجدد' },
        slug: 'regal-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `If you are looking for a migration agency that is committed to providing accurate, comprehensive and tailored-made advice then Regal Migration Services should be your first port of call. Our team at this Australian based agency works tirelessly with their clients not just on the surface matters but also beneath them so as we can provide meaningful solutions - from visa applications through appealing refusal and cancellation decisions.`,
            fa: `اگر به دنبال آژانس مهاجرتی هستید که متعهد به ارائه مشاوره دقیق، جامع و سفارشی باشد، خدمات مهاجرت Regal باید اولین مقصد شما باشد. تیم ما در این آژانس مستقر در استرالیا به طور خستگی ناپذیری با مشتریان خود نه تنها در مسائل ظاهری بلکه در زیر آنها کار می کند تا بتوانیم راه حل های معنی داری ارائه دهیم - از درخواست های ویزا تا درخواست تجدید نظر در مورد امتناع و لغو تصمیمات.`,
        },
        contact: {
            website: 'https://www.regalmigration.com.au/',
            phone: ['00610390135600'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc6',
        name: { en: 'Visazone', fa: 'منطفه ویزا' },
        slug: 'visa-zone',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `A set of professional services includes evaluation of immigration options, assistance in preparation of immigration programs, review of documents and documents, preparation of submitted documents, request for residence, all necessary communication and follow-up with the administration and citizenship.`,
            fa: `ما مجموعه ای از خدمات حرفه ای شامل ارزیابی گزینه های مهاجرت، کمک در تهیه برنامه های مهاجرت، بررسی اسناد و مدارک، آماده سازی مدارک ارسالی، درخواست محل اقامت، کلیه اقدامات ارتباطی و پیگیری لازم با اداره مهاجرت و شهروندی می باشد.`,
        },
        contact: {
            website: 'https://www.visazone.com.au/?lang=fa#top',
            phone: ['0497088167'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc7',
        name: { en: 'Visazone', fa: 'منطفه ویزا' },
        slug: 'visa-zone',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `A set of professional services includes evaluation of immigration options, assistance in preparation of immigration programs, review of documents and documents, preparation of submitted documents, request for residence, all necessary communication and follow-up with the administration and citizenship.`,
            fa: `ما مجموعه ای از خدمات حرفه ای شامل ارزیابی گزینه های مهاجرت، کمک در تهیه برنامه های مهاجرت، بررسی اسناد و مدارک، آماده سازی مدارک ارسالی، درخواست محل اقامت، کلیه اقدامات ارتباطی و پیگیری لازم با اداره مهاجرت و شهروندی می باشد.`,
        },
        contact: {
            website: 'https://www.visazone.com.au/?lang=fa#top',
            phone: ['0497088167'],
        },
        status: Status.ACTIVE,
    },
]