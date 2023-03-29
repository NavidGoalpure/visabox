import { Locations, Status } from 'Interfaces';
import { Agent } from 'Interfaces/Businesses/agents';

export const Agents: Agent[] = [
  {
    id: 'agt1',
    name: { en: 'Mohammad Azimi', fa: 'محمد عظیمی' },
    slug: 'mohammad-azimi',
    desc: {
      en: `Mohammad is the principal migration agent in Shada Migration and Education Services.
      As an Australian qualified education agent, he holds a Bachelor Degree in English Language Translation and a Graduate Certificate in Migration Law from the Australian National University. Mohammad is fluent in spoken and written Farsi, Dari and English, and is an accredited and licensed NAATI Persian translator. NAATI (The National Accreditation Authority for Translators and Interpreters) is the national standards and accreditation body for translators and interpreters in Australia.
      Mohammad is an active member of Migration Alliance, the professional associations for Australian migration service providers. He has worked as a tour guide for overseas visitors throughout Iran and has a heartfelt understanding of his native country, Iran.
      Between 1997 and 1999, he was an English Teacher at both the Open Education Centre of Azad University and the National Organisation for Development of Brilliant Talents, in Tehran. In both Iran and Australia, Mohammad has worked as a translator and has five publications to his credit.
      Mohammad has extensive experiences in the employment sector and community services in Australia and he has worked as an employment consultant for Mission Australia for 3 years. He was appointed as a representative of Mission Australia in Campsie Centrelink to helping the long-term unemployed and disadvantaged youth back into work.
      From 2001 to 2006, he was the Iranian Correspondent for Archaeological Diggings, Australia's foremost Archaeological magazine. Between 2006 and 2008 he was a Journalist, where he contributed stories, essays, and articles about the Iranian community in Australia.
      He also owns and manages Shada Migration and Education Services.
      website: 'https://www.shada.com.au/',
Spoken Languages: English; Persian; Dari.`,
      fa: `
      <div>
      <p>&nbsp;</p>
<p>موسسه خدمات مهاجرتی و تحصیلی <strong>"شادا"</strong>، موسسه ای ثبت شده و رسمی جهت اخذ انواع ویزای کشور استرالیا می باشد که در سال 2009 تاسیس شده و در چارچوب قوانین، به ارائه خدمات قانونی مهاجرت و تحصیل در استرالیا می پردازد.</p>

<p>ما انسان هایی صادق هستیم و جمعی از بهترین وکلا و مشاوران رسمی مهاجرت استرالیا گرد هم آمده ایم و خدمات خود را نه تنها به ایرانیان بلکه به دیگر ملیت ها که می خواهند به کشور استرالیا مهاجرت و در این کشور زندگی کنند نیز ارائه می دهیم.</p>

<p>اگرعلاقمند به زندگی در استرالیا هستید می توانید با مطالعه وب سایت، اطلاعات مفیدی را در مورد وضعیت کار، مهاجرت و تحصیل در استرالیا به دست آورید و چنانچه تصمیم گرفته اید که از خدمات ما برای عزیمت به کشور استرالیا استفاده کنید، مطمئن باشید که کارشناسان خبره ما بهترین شرایط مهاجرتی را&nbsp; در زمینه های کاری، مهارتی، تجاری و ... به شما پیشنهاد خواهند داد.</p>

<p>موسسه شادا ، تمام تلاش خود را در جهت حفظ منافع و حقوق قانونی موکلین خود همواره به کار گرفته و شما با اطمینان خاطر می توانید رسیدگی به تمامی امور مهاجرتی خود را به ما بسپارید .ما با توجه به دانشی که در زمینه مهاجرت به استرالیا و مسائل مربوط به آن داریم، قادریم به صورتی کاملا حرفه ای، معضلات و مشکلات مهاجرتی شما را به بهترین شکل و با صرف کوتاه ترین زمان ممکن برطرف کنیم .</p>

<p>راستگویی در کار، ویژگی بارز ماست . ما تمام مسائل مربوط به مهاجرت را دقیق و کامل به اطلاع شما خواهیم رساند و در هر مرحله شما را از روند کار آگاه خواهیم ساخت و تک تک کارهای انجام شده را، از بزرگ ترین و مهم ترین کارها گرفته تا ریزترین و کم اهمیت ترین نکات، به شما اطلاع خواهیم داد .</p>

<p>توصیه می کنیم که به استرالیا سفر کنید و در این کشور اقامت گزینید. هیچ فردی توانایی این را ندارد که محل تولد خود را تعیین کند، اما انسانها می توانند محل زندگی خود را انتخاب نمایند.</p>

<p>استرالیا کشوری خوب با طبیعتی بسیار زیبا و دیدنی است و اگر فردی سخت کوش و با اراده باشید می توانید به سرعت پله های ترقی را طی کنید و یکی از بهترین ها در زمینه تخصصی خود شوید.</p>

<p>موفقیت، عادت ماست. ما را به همراهی خود برگزینید و طعم شیرین موفقیت را تجربه کنید.</p>

<p>&nbsp;</p>

<p><strong>محمدرضا عظیمی</strong></p>

<p><strong>وکیل رسمی مهاجرت</strong></p>                            
</div>`,
    },
    maraNumber: '0958292',
    locations: [Locations.en, Locations.fa],
    isFeatured: true,
    contact: {
      email: 'azimi@shada.com.au',
      phone: ['+61290025511'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt2',
    name: { en: 'Damon Aryan', fa: 'دامون ارین' },
    slug: 'damon-aryan',
    locations: [Locations.en, Locations.fa],
    maraNumber: '1384623',
    isFeatured: false,
    desc: {
      en: `Mr. Damon Aryan, a graduate of immigration law from the Australian National University and an official agent registered in the MARA organization with registration number 1384623 and MIA organization with number 7293, as the founder and manager of selectvisa company, insists that he personally oversees all customer affairs from the beginning of giving advice to the end of the process of immigration to Australia and getting a visa, have full supervision. MARA is presented as the only official authority License to operate and supervise the affairs of official immigration agents in Australia.`,
      fa: `آقای “مهندس دامون آرین” فارغ‌التحصیل حقوق مهاجرت از دانشگاه ملی استرالیا و ایجنت رسمی ثبت شده در سازمان MARA با شماره ثبت 1384623 و سازمان MIA با شماره 7293، به عنوان موسس و گرداننده‌ی شرکت Selectvisa، اصرار دارند که خود شخصاً بر تمامی امور مشتریان از ابتدای ارائه مشاوره‌های ابتدای تا انتهای پروسه‌ی مهاجرت به استرالیا و دریافت ویزا،‌ نظارت کامل داشته باشند و کلیه فعالیت‌های وی مشمول قانون تجارت استرالیا و نیز مرامنامه‌ی سازمان دولتی MARA به عنوان تنها مرجع رسمی ارائه مجوز فعالیت و نظارت به امور کارگزاران رسمی مهاجرت در استرالیا است..`,
    },
    contact: {
      website: 'https://selectvisa.com',
      email: 'aryan@selectvisa.com',
      phone: ['611800047706'],
      linkedin: 'https://au.linkedin.com/in/damon-aryan',
      instagram: 'https://www.instagram.com/damonaryan',
    },
    status: Status.ACTIVE,
  },

  {
    id: 'agt3',
    name: { en: 'Mojtaba Dani', fa: 'دکتر مجتبی دانی' },
    slug: 'mojtaba-dani',
    maraNumber: '1800260',
    qualifications: {
      en: ['LLB', 'LLM', 'PhD in Law'],
      fa: ['LLB', 'LLM', 'دکترای حقوق'],
    },
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'https://ddamigration.com/',
      email: 'info@ddamigration.com',
      phone: ['02188886344', '+61490913970'],
      telegram: 'https://telegram.me/ddamigration',
      instagram: 'https://www.instagram.com/dda_migration_australia',
      linkedin:
        'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFo7SkeC04I6AAAAWk5lMkwGRVQarIJpdgBfVCG8-55kToVQA3zZ5suLmRDnR66fL25kH3PLHP36KxkP6IqYtA-Hx3zpkH4VZAr6OE09EbHhGo-lP1OX6DWSm8SELTPRTBmK2k=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fm-dani%2F',
      whatsapp: '61490913970',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt4',
    name: { en: 'Sirous Ahmadi', fa: 'سیروس احمدی' },
    slug: 'sirous-ahmadi',
    
    maraNumber: '0854826',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'info@visayab.com',
      phone: ['0288758851', '+61410070490'],
      telegram: 'https://t.me/visayabmigration',
      website: 'https://www.visayab.com/',
      instagram: 'https://www.instagram.com/visayab/',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt5',
    name: { en: 'Reza Aein', fa: 'رضا آیین' },
    slug: 'reza-aein',
    
    maraNumber: '0955595',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'r.aein@homemigration.com',
      phone: ['02188666181'],
      whatsapp: '61424982580',
      website: 'https://www.homemigration.com',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt6',
    name: { en: 'Hami Niroumand', fa: 'حامی نیرومند' },
    slug: 'hami-niroumand',
    
    qualifications: {
      en: ['G.cert'],
      fa: ['G.cert'],
    },
    maraNumber: '1169662',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'http://avestaservices.com/',
      email: 'info@avestaservices.com',
      phone: ['+61406812133'],
      whatsapp: '61424982580',
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt7',
  //   name: { en: 'Mina Madani', fa: 'مینا مدنی' },
  //   slug: 'mina-madani',
    
  //   maraNumber: '1798674',
  //   locations: [Locations.en, Locations.fa],
  //   isFeatured: false,
  //   contact: {
  //     website: 'https://www.edenimmigration.com.au/',
  //     email: 'mina@edenimmigration.com.au',
  //     phone: ['02126851051', '+61420564370'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt8',
    name: { en: 'Soodeh Jafari', fa: 'سوده جعفری' },
    slug: 'soodeh-jafari',
    
    maraNumber: '1795035',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'info@sjmigration.com.au',
      phone: ['02122181533', '+61386169990'],
      instagram: 'https://instagram.com/sjmigration?igshid=1gfy9zc9vp7kx',
      website: 'https://www.sjmigration.com.au',
      whatsapp: '61481000600',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt9',
    name: { en: 'Azam Jafari', fa: 'اعظم جعفری' },
    slug: 'azam-jafari',
    
    maraNumber: '1571733',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'ajafari@ajmigration.com',
      phone: ['+61280346901', '+61414187045'],
      whatsapp: '61414187045',
      website: 'https://www.ajmigration.com',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt10',
    name: { en: 'Matin Amirshahi', fa: 'متین امیرشاهی' },
    slug: 'matin-amirshahi',
    
    maraNumber: '1685110',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'admin@amirshahi.law',
      phone: ['02122705327', '09012800983'],
      whatsapp: '09012800983',
      website: 'https://www.amirshahi.law/',
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt11',
  //   name: { en: 'Ali Kiaei', fa: 'علی کیائی' },
  //   slug: 'ali-kiaei',
    
  //   maraNumber: '1789771',
  //   locations: [Locations.en, Locations.fa],
  //   isFeatured: false,
  //   contact: {
  //     email: 'team@migrationdoor.com.au',
  //     phone: ['61735188044', '61481012012'],
  //     whatsapp: '61481012012',
  //     website: 'https://www.migraitiondoor.com.au/',
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt12',
    name: { en: 'Ali Shahami ', fa: 'علی شهامی' },
    slug: 'ali-shahami',
    
    maraNumber: '1688026',
    qualifications: { en: ['M.S.'], fa: ['M.S.'] },
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'info@rkimmigrationgroup.org',
      phone: ['61615068749'],
      website: 'https://www.rkimmigrationgroup.org',
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt13',
    name: { en: 'Azadeh Ghorashi ', fa: 'آزاده قریشی' },
    slug: 'azadeh-ghorashi',
    maraNumber: '1573151',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'https://www.azzyimmi.com.au',
      email: 'info@azzyimmi.com',
      phone: ['6145477750'],
    },
    status: Status.ACTIVE,
  },

  {
    id: 'agt14',
    name: { en: 'Ehsan Azadi', fa: 'احسان آزادی' },
    slug: 'ehsan-azadi',
    
    maraNumber: '1279450',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'https://www.arcmigration.com.au',
      email: 'eazadi@arcmigration.com.au',
      phone: ['0416388993'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt15',
    name: { en: 'Ehsan Jahanandish', fa: 'احسان جهان اندیش' },
    slug: 'ehsan-jahanandish',
    
    qualifications: {
      en: ['M.S.'],
      fa: ['M.S.'],
    },
    maraNumber: '1680444',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'www.smartmigration.com',
      email: 'info@smartmigration.com',
      phone: ['+982147627828', '+61291606260', '+61477181614'],
      whatsapp: '+989027022286',
      instagram: 'https://www.instagram.com/smartmigration/',
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt16',
  //   name: { en: 'Kourosh Momeni', fa: 'کوروش مومنی' },
  //   slug: 'kourosh-momeni',
    
  //   maraNumber: '0955242',
  //   locations: [Locations.en, Locations.fa],
  //   isFeatured: false,
  //   contact: {
  //     website: 'https://www.clau.com.au',
  //     email: 'km@clau.com.au',
  //     phone: ['61294153344'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt17',
    name: { en: 'Mehdi Keivani', fa: 'مهدی کیوانی' },
    slug: 'mehdi-keivani',
    
    maraNumber: '2217813',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      website: 'https://www.uniquevisa.net/',
      email: 'admin@uniquevisa.net',
      phone: ['+61413541043'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt18',
    name: { en: 'Nima Kazemi', fa: 'نیما کاظمی' },
    slug: 'nima-kazemi',
    
    maraNumber: '1278784',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    qualifications: {
      en: ['NZ 201700466.', 'MSc'],
      fa: ['NZ 201700466.', 'MSc'],
    },
    contact: {
      website: 'http://www.pasargadmigration.com/',
      email: 'info@pasargadmigration.com',
      phone: ['+982188029976'],
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt19',
  //   name: { en: 'Saeed Rezaei', fa: 'سعید رضائی' },
  //   slug: 'saeed-rezaei',
    
  //   maraNumber: '1796143',
  //   locations: [Locations.en, Locations.fa],
  //   isFeatured: false,
  //   contact: {
  //     website: 'http://www.subclass.com.au/',
  //     email: 'INFO@SUBCLASS.COM.AU',
  //     phone: ['+61280065151'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt20',
    name: { en: 'Sam Lotfollahi', fa: 'سام لطف الهی' },
    slug: 'sam-lotfollahi',
    maraNumber: '0901704',
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: 'info@mmvisa.com.au',
      phone: ['+61455242242'],
    },
    status: Status.ACTIVE,
  },

  {
    id: 'agt21',
    name: { en: 'Soodabeh Harirzadeh', fa: 'سودابه حریری' },
    slug: 'soodabeh-harirzadeh',
    
    locations: [Locations.en, Locations.fa],
    maraNumber: '1687507',
    isFeatured: false,
    contact: {
      website: 'http://www.aradimmigration.com/',
      email: 'sudihariri@gmail.com',
      phone: ['+982144967825'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt22',
    name: { en: 'Zara Mavi', fa: 'زهرا ماوی' },
    slug: 'zara-mavi',
    
    locations: [Locations.en, Locations.fa],
    maraNumber: '1464111',
    qualifications: {
      en: ['MIA 10242'],
      fa: ['MIA 10242'],
    },
    isFeatured: false,
    contact: {
      website: 'https://www.elitemigration.com/',
      email: 'z.mavi@elitemigration.com',
      phone: ['0414825985'],
    },
    status: Status.ACTIVE,
  },
  {
    id: 'agt23',
    name: { en: 'Daniel Eskandari', fa: 'دنیل اسکندری' },
    slug: 'daniel-eskandari',
    locations: [Locations.en, Locations.fa],
    maraNumber: '0100438',
    isFeatured: false,
    contact: {
      email: 'daniel@australianmigration.org',
      phone: ['61282112722'],
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt24',
  //   name: { en: 'Hassan Izadnia', fa: 'حسن ایزدنیا' },
  //   slug: 'hassan-izadnia',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '1571846',
  //   isFeatured: false,
  //   contact: {
  //     website: 'https://www.regalmigration.com.au',
  //     email: 'h.izadnia@regalmigration.com.au',
  //     phone: ['61390135600'],
  //   },
  //   status: Status.ACTIVE,
  // },
  // {
  //   id: 'agt25',
  //   name: { en: 'Roya Majd', fa: 'رویا مجد' },
  //   slug: 'roya-majd',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '0701239',
  //   isFeatured: false,
  //   contact: {
  //     website: 'http://www.majdvisa.com',
  //     email: 'info@majdvisa.com',
  //     phone: ['1300960326'],
  //   },
  //   status: Status.ACTIVE,
  // },
  {
    id: 'agt26',
    name: { en: 'Negin Safaee', fa: 'نگین ضفایی' },
    slug: 'negin-safaee',
    locations: [Locations.en, Locations.fa],
    maraNumber: '1791573',
    isFeatured: false,
    contact: {
      website: 'www.visayab.com',
      email: 'n.safaee@visayab.com',
      phone: ['61296591694'],
    },
    status: Status.ACTIVE,
  },
  // {
  //   id: 'agt27',
  //   name: { en: 'Naghmeh Danai', fa: 'نغمه دانای' },
  //   slug: 'naghmeh-danai',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '748076',
  //   isFeatured: false,
  //   contact: {
  //     website: 'https://www.visazone.com.au/?lang=fa#top',
  //     email: 'naghmeh.danai@gmail.com',
  //     phone: ['61414326277'],
  //   },
  //   status: Status.ACTIVE,
  // },
  // {
  //   id: 'agt28',
  //   name: { en: 'Sudabeh Rahbar', fa: 'سودابه رهبر' },
  //   slug: 'sudabeh-rahbar',
  //   locations: [Locations.en, Locations.fa],
  //   maraNumber: '1386969',
  //   isFeatured: false,
  //   contact: {
  //     website: 'https://www.keymigrationvisa.com.au',
  //     email: 'Sue@keymigrationvisa.com.au',
  //     phone: ['430432395'],
  //   },
  //   status: Status.ACTIVE,
  // },
];
