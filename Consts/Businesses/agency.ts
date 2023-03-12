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
            en: `At Visazone, we provide you with a set of professional services, including evaluation of immigration options, assistance in preparing immigration programs, document review, preparation of submitted documents, residence request, all necessary communication and follow-up measures with the Immigration and Citizenship Department.`,
            fa: `ما در ویزازون مجموعه ای از خدمات حرفه ای شامل ارزیابی گزینه های مهاجرت، کمک در تهیه برنامه های مهاجرت، بررسی اسناد و مدارک، آماده سازی مدارک ارسالی، درخواست محل اقامت، کلیه اقدامات ارتباطی و پیگیری لازم با اداره مهاجرت و شهروندی را به شما ارائه میدهیم`,
        },
        contact: {
            website: 'https://www.visazone.com.au/?lang=fa#top',
            phone: ['0414326277'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc7',
        name: { en: 'Azzy Immigration', fa: 'آزی ایمیگیریشن' },
        slug: 'azzy-immigration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `For those interested who want to change their life path and stay in Australia, this collection can handle all the stages of residence with the facilities of monitoring the process and solving the applicant's doubts and questions.`,
            fa: `این مجموعه می تواند برای آن دسته از علاقه مندانی که تمایل به تغییر مسیر زندگی و اقامت در کشور استرالیا را دارند تمامی مراحل اقامت را با امکانات نظارت بر روند پروسه و رفع ابهامات و سئوالات متقاضی انجام دهد.`,
        },
        contact: {
            website: 'http://azzyimmi.com.au/',
            phone: ['09123252009'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc8',
        name: { en: 'Ddamigration', fa: 'موسسه دکتر دانی و وکلا' },
        slug: 'dda-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Dr. Mojtabi Dani is the first and only immigration lawyer with a specialized doctorate in international law from Australia, with more than 12 years of legal consulting experience for public and private companies, as well as research and teaching at universities in the field of international law in Iran and Australia. He is also a founding member of Nubian Institute of International Law in Tehran. Dr. Dani is a registered lawyer in MARA with registration number 1800260 and MIA with registration number 18437. Dr. Dani and Lawyers Institute consists of experts in immigration, investment and trade. In this institution, all legal and immigration matters are carried out from the beginning of the contract to the end of the case under the strict and direct supervision of Dr. Dani.`,
            fa: `دکتر مجتبی دانی اولین و تنها وکیل مهاجرت دارای دکترای تخصصی حقوق بین‌الملل از استرالیا، با بیش از ۱۲ سال سابقه مشاوره حقوقی شرکت‌های دولتی و خصوصی و همچنین تحقیق و تدریس در دانشگاه در رشته حقوق بین‌الملل در ایران و استرالیا می‌باشد. وی همچنین عضو موسس موسسه حقوق بین‌الملل نوبیان در تهران می باشد. دکتر دانی وکیل ثبت شده در MARA با شماره ثبت ۱۸۰۰۲۶۰ و MIA با شماره ثبت ۱۸۴۳۷ است. موسسه دکتر دانی و وکلا متشکل از متخصصین در امر مهاجرت، سرمایه گذاری و تجارت می باشد. در این موسسه انجام کلیه امور حقوقی و مهاجرتی از ابتدای عقد قرارداد تا سرانجام پرونده با نظارت دقیق ومستقیم دکتر دانی انجام می‌گیرد.`,
        },
        contact: {
            website: 'https://ddamigration.com/',
            phone: ['02188886344'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc9',
        name: { en: 'Homemigration', fa: 'خانه مهاجرت' },
        slug: 'home-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `We are always looking for dedicated and talented individuals to join our team. Whether you’re an established immigration industry professional, a graduate looking to commence your career or an individual that is looking for an entry position in a supportive working environment, we’d love to talk to you.`,
            fa: `ما همیشه به دنبال افراد متعهد و با استعداد برای پیوستن به تیم خود هستیم. خواه شما یک حرفه ای معتبر در صنعت مهاجرت هستید، فارغ التحصیل هستید که به دنبال شروع حرفه خود هستید یا فردی که به دنبال یک موقعیت ورودی در یک محیط کاری حمایتی است، ما دوست داریم با شما صحبت کنیم.`,
        },
        contact: {
            website: 'https://www.homemigration.com/',
            phone: ['009821886661815'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc10',
        name: { en: 'Eden Immigration', fa: 'مهاجرت ادن' },
        slug: 'eden-Immigration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `At Eden Immigration, we have a thorough understanding of what is needed to reduce visa risks and make it possible for people to apply for permanent residency in Australia. We review a client’s entire profile, take into account their accomplishments, and match it to the standards established by authorities, assisting them with their visa application. Eden Immigration is a local migration agent in Sydney. We support customers who want to live, work, study, or settle in Australia, as well as those who want permanent residency.`,
            fa: `در اداره مهاجرت Eden، ما درک کاملی از آنچه برای کاهش خطرات ویزا و ایجاد امکان درخواست برای اقامت دائم استرالیا برای افراد لازم است، داریم. ما کل مشخصات یک مشتری را بررسی می کنیم، دستاوردهای آنها را در نظر می گیریم و آن را با استانداردهای تعیین شده توسط مقامات مطابقت می دهیم و به آنها در درخواست ویزای خود کمک می کنیم. Eden Immigration یک عامل مهاجرت محلی در سیدنی است. ما از مشتریانی که مایل به زندگی، کار، تحصیل یا اقامت در استرالیا هستند و همچنین کسانی که خواهان اقامت دائم هستند حمایت می کنیم.`,
        },
        contact: {
            website: 'https://www.edenimmigration.com.au/',
            phone: ['00610292660115'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc11',
        name: { en: 'Sjmigration', fa: 'مهاجرت سوده جعفری' },
        slug: 'sj-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `SJ Migration is as knowledgeable and as reliable as they come. Lead by Principle Migration Agent Soodeh Jafari, how we service our clients and our winning outcomes are unparalleled in this industry. The key trait of attention to detail developed from Soodeh’s time as a lawyer in her home country of Iran is paramount to the firm’s success, coupled with her personal experience as a migrant herself with her and her team honest and empathetic at all times.`,
            fa: `SJ Migration به اندازه آنها آگاه و قابل اعتماد است. به رهبری سوده جعفری نماینده اصلی مهاجرت، نحوه خدمات رسانی به مشتریان و نتایج برنده ما در این صنعت بی نظیر است. ویژگی کلیدی توجه به جزئیات که از زمان سوده به عنوان وکیل در کشورش ایران ایجاد شد، برای موفقیت شرکت مهم است، همراه با تجربه شخصی او به عنوان یک مهاجر که خودش و تیمش همیشه صادق و همدل هستند.`,
        },
        contact: {
            website: 'https://www.sjmigration.com.au/',
            phone: ['0061481000600'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc12',
        name: { en: 'Amirshahi Law Office', fa: 'دفتر حقوقی امیرشاهی' },
        slug: 'amirshahi -law-office',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `The law office of Dr. Amirshahi and Associates was established around 1380 by Dr. Sayed Hassan Amirshahi, an official attorney of justice, and since the same year, it has been active in providing services and translating official documents. Currently, immigration services to Australia are also provided by this office in cooperation with Australian Nati lawyers and translators.`,
            fa: `دفتر حقوقی دکتر امیرشاهی و همکاران حوالی سال ۱۳۸۰ توسط دکتر سیّد حسن امیرشاهی، وکیل رسمی دادگستری تاسیس گردید و از همان سال در امور مربوط به ارائه خدمات حقوقی و ترجمه رسمی مدارک فعالیّت می­کند. در حال حاضر، خدمات مهاجرت به استرالیا نیز با همکاری وکیل رسمی و مترجم ناتی استرالیا توسط این دفتر ارائه می­شوند.`,
        },
        contact: {
            website: 'https://www.amirshahi.law/',
            phone: ['02122705217'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc13',
        name: { en: 'emergico', fa: 'امرگیکو' },
        slug: 'emergico',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `We are Emergico; an exceptional team of experienced Registered Migration Agents.We help manage your Australian visa application from beginning to end, minimising risk and stress.You can start the adventure right now, by completing a short form so we can advise you of your visa opportunities.`,
            fa: `ما Emergico هستیم. یک تیم استثنایی از نمایندگان با تجربه ثبت شده مهاجرت. ما به مدیریت درخواست ویزای استرالیا از ابتدا تا انتها کمک می کنیم و ریسک و استرس را به حداقل می رسانیم. می‌توانید همین الان ماجراجویی را با تکمیل یک فرم کوتاه شروع کنید تا بتوانیم فرصت‌های ویزای شما را به شما معرفی کنیم.`,
        },
        contact: {
            website: 'https://www.emergico.com.au/',
            phone: ['0061738610726'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc14',
        name: { en: 'Arc Visa & Migration', fa: 'مهاجرت آرک' },
        slug: 'arc-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Hi, My name is Ehsan Azadi, principal of Arc Visa & Migration. This is my senior associate Ms Fides Velarde. Our staff at Arc Visa & Migration are ready to assist you with your immigration inquiries.`,
            fa: `سلام، من احسان آزادی، مدیر Arc Visa & Migration هستم. این همکار ارشد من خانم فیدس ولارده است. کارکنان ما در Arc Visa & Migration آماده هستند تا به شما در مورد درخواست های مهاجرتی شما کمک کنند.`,
        },
        contact: {
            website: 'https://arcmigration.com.au/',
            phone: ['1300997040'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc15',
        name: { en: 'Uniquevisa', fa: 'یونیک ویزا' },
        slug: 'unique-visa',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Unique Visa has started its activity in the field of immigration to Australia since 2008 and has had a close relationship with various departments of the Australian Immigration Department since the beginning. Unique Visa immigration organization has had hundreds of successful cases in the fields of expertise and skill visas, investment in Australia (through entrepreneurship), work, etc., since the beginning of its activity, and currently there are different cases in the field of obtaining Australian visas. It is on the agenda of this institution.`,
            fa: `یونیک ویزا از سال 2008 فعالیت خود را در زمینه مهاجرت به استرالیا آغاز نموده و از همان بدو امر ارتباط تنگاتنگی با بخش های مختلف اداره مهاجرت استرالیا داشته است. سازمان مهاجرتی یونیک ویزا از زمان شروع فعالیت تاکنون صدها پرونده موفق در زمینه های ویزای تخصص و مهارت، سرمایه گذاری در استرالیا (از طریق کارآفرینی) ، کار و ... داشته است و در حال حاضر نیز پرونده های متفاوتی در زمینه اخذ ویزاهای استرالیا در دستور کار این موسسه قرار دارد.`,
        },
        contact: {
            website: 'https://uniquevisa.net/',
            phone: ['02188545324'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc16',
        name: { en: 'Millennium migration', fa: 'مهاجرت ملنیوم' },
        slug: 'millennium-migration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Big life decisions usually come with big challenges. Although business immigration to Australia has many advantages, it also has its own complexities. By joining the big Millennium family, benefit from our team's 15-year experience in obtaining business visas and pass this challenging path successfully.`,
            fa: `تصمیمات بزرگ زندگی معمولا چالش های بزرگی نیز به همراه دارند. هر چند مهاجرت تجاری به استرالیا مزایای فراوانی را به دنبال دارد، از پیچیدگیهای خاص خود نیز برخوردار است. با پیوستن به خانواده بزرگ ملنیوم از تجربه 15 ساله تیم ما در اخذ ویزاهای تجاری بهره مند گردید و این مسیر پر چالش را با موفقیت سپری نمایید.`,
        },
        contact: {
            website: 'https://mmvisa.com.au/fa/',
            phone: ['0061478881884'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc17',
        name: { en: 'Aradimmigration', fa: 'مهاجرت آراد' },
        slug: 'Arad-immigration',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Mrs. Sudabah Hariri is a registered lawyer of the Australian Immigration Department and the manager of Arad Immigration Group. She immigrated to Australia in 2006 and after some time returned to Iran and worked in different embassies including the Australian, British and Spanish embassies.`,
            fa: `سرکار خانم سودابه حریری وکیل ثبت شده اداره مهاجرت استرالیا و مدیر مجموعه آراد ایمیگریشن می باشند.ایشان در سال 2006 به کشور استرالیا مهاجرت کردند و پس از مدتی به ایران بازگشتند و در سفارت های مختلف از جمله سفارت استرالیا، انگلیس و اسپانیا مشغول به کار شدند.`,
        },
        contact: {
            website: 'https://aradimmigration.com/',
            phone: ['02144058186'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc18',
        name: { en: 'Visapick', fa: 'موسسه مهاجرتی ویزاپیک' },
        slug: 'visa-pick',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Visapick is one of the Australian companies registered under the regulations of the Australian federal government. Having all the legal documents, this company operates under the supervision of the Australian Immigration Office (MARA organization) and is fully specialized in the field of skilled visas, work and investment and entrepreneurship in Australia. At the same time, Visapik international job search started its official activity in Iran since 2019 by obtaining official license number 96785 from the Ministry of Cooperation, Labor and Social Welfare of the Islamic Republic of Iran.`,
            fa: `ویزاپیک یکی از شرکت‌های استرالیایی است که براساس مقررات دولت فدرال استرالیا ثبت‌ شده است. این شرکت با دارابودن تمامی مدارک قانونی،‌ تحت‌نظر ادارۀ مهاجرت استرالیا (سازمان MARA) و به‌صورت کاملاً تخصصی در زمینۀ ویزاهای مهارتی، کار و سرمایه‌گذاری و کارآفرینی استرالیا مشغول به فعالیت است. درعین‌حال، کاریابی بین‌المللی ویزاپیک فعالیت رسمی خود را در ایران، از سال ۱۳۹۹ با اخذ مجوز رسمی به شمارۀ ۹۶۷۸۵ از وزارت تعاون، کار و رفاه اجتماعی جمهوری اسلامی ایران شروع کرد.`,
        },
        contact: {
            website: 'https://visapick.com/fa/',
            phone: ['02188558605'],
        },
        status: Status.ACTIVE,
    },
    {
        id: 'agc19',
        name: { en: 'Selectvisa', fa: 'سلکت ویزا' },
        slug: 'select-visa',
        country: [Country.Global, Country.Iran],
        isFeatured: false,
        desc: {
            en: `Immigration to Australia under the direct supervision of Mr. Damon Arin, an Australian immigration lawyer and approved by the Australian Immigration Department and registered in Mara Australia with registration number 1384623, will greatly reduce the risk of your case and provide you with the highest quality immigration guidance and advice in Enjoy your entire process. In this way, you will go through the process of obtaining your visa with the highest level of confidence. Taking advantage of the experience and knowledge of an Australian immigration lawyer who has numerous work records in the field of obtaining various types of Australian residence visas in various fields, as well as the support and support of a caring and committed team, step on this path with confidence. Using the experiences and work records of Mr. Damon Arin and his team, choose your immigration path and benefit from their valuable services.`,
            fa: `مهاجرت به استرالیا زیر نظارت مستقیم آقای دامون آرین وکیل مهاجرت استرالیا و مورد تایید اداره مهاجرت استرالیا و ثبت شده در سازمان مارا استرالیا با شماره ثبت 1384623 باعث می شود تا ریسک پرونده شما به شدت کاهش یابد و از با کیفیت ترین راهنمایی و مشاوره مهاجرت در طول پروسه خود بهره مند شوید. از این طریق شما با بالاترین سطح از اطمینان خاطر مراحل و پروسه اخذ ویزای خود را پیش خواهید برد. با بهره­ گیری از تجارب و دانش وکیل مهاجرت استرالیا که دارای سوابق کاری متعدد در زمینه اخذ انواع ویزاهای اقامتی استرالیا در زمینه های مختلف است، و همچنین پشتیبانی و حمایت تیمی دلسوز و متعهد، در این راه با اطمینان گام بردارید. با استفاده از تجارب و سوابق کاری جناب آقای دامون آرین و تیم ایشان، مسیر مهاجرت خود را انتخاب کرده و از خدمات ارزشمند آنها بهره مند شوید.`,
        },
        contact: {
            website: 'https://selectvisa.com/fa/',
            phone: ['47706'],
        },
        status: Status.ACTIVE,
    },
]