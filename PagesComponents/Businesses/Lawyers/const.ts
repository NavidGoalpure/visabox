import { Languages, Locations, MultiLanguageText } from "Interfaces";
import { AssessingAuthorityAbv } from "Interfaces/Documents/occupation";
import { languages } from "sanity/schemas/languages";
import { Lawyer } from "./interfaces";
import DanielEskandari from "./Images/DanielEskandari.jpeg";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  PageTitle = "PageTitle",
  PageDesc = "PageDesc",
  ViewMore = "ViewMore",
  Email = "Email",
  Phone = "Phone",
  Website = "Website",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Find the most authentic migration agents for australia| Mara Box",
    fa: "معتبر ترین وکلای ایرانی مهاجرت به استرالیا را پیدا کنید | مارا باکس",
  },
  SeoDesc: {
    fa: "اسامی بهترین وکلای ایرانی برای اقامت و مهاجرت به استرالیا،ویزای سرمایه گذاری،کاری،خانواده و ازدواج،تجاری و تحصیلی",
    en: "name and info of some of the best migration agents for migration to australia,investment visa,work visa,marriage and student visa",
  },
  //
  PageTitle: {
    fa: "وکیل مهاجرت",
    en: "Migration lawyers",
  },
  PageDesc: {
    //navid doesn't have fa trtanslation
    fa: "وکیل مهاجرت",
    en: `This page is for skilled individuals or families looking to permanently migrate to Australia, to fill Australia’s skill shortages. Visas within the General Skilled Migration program are points tested and are either independent, State / Territory sponsored or family-sponsored permanent visas.`,
  },
  ViewMore: {
    en: "View More",
    fa: "نمایش کامل",
  },
  Email: {
    en: "Email",
    fa: "ایمیل",
  },
  Phone: {
    en: "phone",
    fa: "تلفن",
  },
  Website: {
    en: "website",
    fa: "وبسایت",
  },
};

////////////
export const Lawyers: Lawyer[] = [
  {
    name: { en: "Mohammad Azimi", fa: "محمد عظیمی" },
    slug: "mohammad-azimi",
    website: "https://www.shada.com.au/",
    desc: {
      en: `Mohammad is the principal migration agent in Shada Migration and Education Services.
As an Australian qualified education agent, he holds a Bachelor Degree in English Language Translation and a Graduate Certificate in Migration Law from the Australian National University. Mohammad is fluent in spoken and written Farsi, Dari and English, and is an accredited and licensed NAATI Persian translator. NAATI (The National Accreditation Authority for Translators and Interpreters) is the national standards and accreditation body for translators and interpreters in Australia.
Mohammad is an active member of Migration Alliance, the professional associations for Australian migration service providers. He has worked as a tour guide for overseas visitors throughout Iran and has a heartfelt understanding of his native country, Iran.
Between 1997 and 1999, he was an English Teacher at both the Open Education Centre of Azad University and the National Organisation for Development of Brilliant Talents, in Tehran. In both Iran and Australia, Mohammad has worked as a translator and has five publications to his credit.
Mohammad has extensive experiences in the employment sector and community services in Australia and he has worked as an employment consultant for Mission Australia for 3 years. He was appointed as a representative of Mission Australia in Campsie Centrelink to helping the long-term unemployed and disadvantaged youth back into work.
From 2001 to 2006, he was the Iranian Correspondent for Archaeological Diggings, Australia's foremost Archaeological magazine. Between 2006 and 2008 he was a Journalist, where he contributed stories, essays, and articles about the Iranian community in Australia.
He also owns and manages Shada Migration and Education Services.
Spoken Languages: English; Persian; Dari.`,
      fa: `محمد نماینده اصلی مهاجرت در خدمات مهاجرت و آموزش شادا است.
او به عنوان یک کارگزار آموزشی واجد شرایط استرالیا، دارای مدرک لیسانس در مترجمی زبان انگلیسی و مدرک تحصیلات تکمیلی در قانون مهاجرت از دانشگاه ملی استرالیا است. محمد به زبان های گفتاری و نوشتاری فارسی، دری و انگلیسی مسلط است و مترجم فارسی نااتی معتبر و دارای مجوز است. NAATI (مرجع ملی اعتباربخشی مترجمان و مترجمان) استانداردهای ملی و سازمان اعتباربخشی مترجمان و مترجمان در استرالیا است.
محمد یکی از اعضای فعال Migration Alliance، انجمن حرفه ای ارائه دهندگان خدمات مهاجرت استرالیا است. او به عنوان راهنمای تور برای بازدیدکنندگان خارج از کشور در سراسر ایران کار کرده است و درک صمیمانه ای از کشور مادری خود، ایران دارد.
او بین سال‌های 1376 تا 1378 مدرس زبان انگلیسی در مرکز آموزش آزاد دانشگاه آزاد و سازمان ملی پرورش استعدادهای درخشان در تهران بود. محمد در هر دو کشور ایران و استرالیا به عنوان مترجم کار کرده است و پنج نشریه در کارنامه خود دارد.
محمد دارای تجارب گسترده در بخش اشتغال و خدمات اجتماعی در استرالیا است و به مدت 3 سال به عنوان مشاور استخدام در Mission استرالیا کار کرده است. او به عنوان نماینده ماموریت استرالیا در Campsie Centrelink منصوب شد تا به جوانان بیکار و محروم طولانی مدت کمک کند تا به کار بازگردند.
از سال 2001 تا 2006، او خبرنگار ایرانی برای کاوش های باستان شناسی، برجسته ترین مجله باستان شناسی استرالیا بود. بین سال‌های 2006 تا 2008 او روزنامه‌نگار بود و در آنجا داستان‌ها، مقاله‌ها و مقالاتی درباره جامعه ایرانیان استرالیا ارائه کرد.
او همچنین مالک و مدیریت خدمات مهاجرت و آموزش Shada است.`,
    },
    maraNumber: "0958292",
    locations: [Locations.en, Locations.fa],
    isFeatured: true,
    contact: {
      email: "azimi@shada.com.au",
      phone: ["+61290025511"],
    },
  },
  {
    name: { en: "Damon Aryan", fa: "دامون ارین" },
    slug: "damon-aryan",
    website: "https://selectvisa.com",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1384623",
    isFeatured: true,
    desc: {
      en: `Mr. Damon Aryan, a graduate of immigration law from the Australian National University and an official agent registered in the MARA organization with registration number 1384623 and MIA organization with number 7293, as the founder and manager of selectvisa company, insists that he personally oversees all customer affairs from the beginning of giving advice to the end of the process of immigration to Australia and getting a visa, have full supervision. MARA is presented as the only official authority License to operate and supervise the affairs of official immigration agents in Australia.
`,
      fa: `آقای “مهندس دامون آرین” فارغ‌التحصیل حقوق مهاجرت از دانشگاه ملی استرالیا و ایجنت رسمی ثبت شده در سازمان MARA با شماره ثبت 1384623 و سازمان MIA با شماره 7293، به عنوان موسس و گرداننده‌ی شرکت Selectvisa، اصرار دارند که خود شخصاً بر تمامی امور مشتریان از ابتدای ارائه مشاوره‌های ابتدای تا انتهای پروسه‌ی مهاجرت به استرالیا و دریافت ویزا،‌ نظارت کامل داشته باشند و کلیه فعالیت‌های وی مشمول قانون تجارت استرالیا و نیز مرامنامه‌ی سازمان دولتی MARA به عنوان تنها مرجع رسمی ارائه مجوز فعالیت و نظارت به امور کارگزاران رسمی مهاجرت در استرالیا است..`,
    },
    contact: {
      email: "aryan@selectvisa.com",
      phone: ["611800047706"],
      linkedin: "https://au.linkedin.com/in/damon-aryan",
      instagram: "https://www.instagram.com/damonaryan",
    },
  },

  {
    name: { en: "Mojtaba Dani", fa: "دکتر مجتبی دانی" },
    slug: "mojtaba-dani",
    website: "https://ddamigration.com/",
    maraNumber: "1800260",
    qualifications: {
      en: ["LLB", "LLM", "PhD in Law"],
      fa: ["LLB", "LLM", "دکترای حقوق"],
    },
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@ddamigration.com",
      phone: ["02188886344", "+61490913970"],
      telegram: "https://telegram.me/ddamigration",
      instagram: "https://www.instagram.com/dda_migration_australia",
      linkedin:
        "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFo7SkeC04I6AAAAWk5lMkwGRVQarIJpdgBfVCG8-55kToVQA3zZ5suLmRDnR66fL25kH3PLHP36KxkP6IqYtA-Hx3zpkH4VZAr6OE09EbHhGo-lP1OX6DWSm8SELTPRTBmK2k=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fm-dani%2F",
      whatsapp: "61490913970",
    },
  },
  {
    name: { en: "Sirous Ahmadi", fa: "سیروس احمدی" },
    slug: "sirous-ahmadi",
    website: "https://www.visayab.com/",

    maraNumber: "0854826",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@visayab.com",
      phone: ["0288758851", "+61410070490"],
      telegram: "https://t.me/visayabmigration",
      instagram: "https://www.instagram.com/visayab/",
    },
  },
  {
    name: { en: "Reza Aein", fa: "رضا آیین" },
    slug: "reza-aein",
    website: "https://www.homemigration.com",

    maraNumber: "0955595",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "r.aein@homemigration.com",
      phone: ["02188666181"],
      whatsapp: "61424982580",
    },
  },
  {
    name: { en: "Hami Niroumand", fa: "حامی نیرومند" },
    slug: "hami-niroumand",
    website: "http://avestaservices.com/",

    qualifications: {
      en: ["G.cert"],
      fa: ["G.cert"],
    },
    maraNumber: "1169662",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@avestaservices.com",
      phone: ["+61406812133"],
      whatsapp: "61424982580",
    },
  },
  {
    name: { en: "Mina Madani", fa: "مینا مدنی" },
    slug: "mina-madani",
    website: "https://www.edenimmigration.com.au/",

    maraNumber: "1798674",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "mina@edenimmigration.com.au",
      phone: ["02126851051", "+61420564370"],
    },
  },
  {
    name: { en: "Soodeh Jafari", fa: "سوده جعفری" },
    slug: "soodeh-jafari",
    website: "https://www.sjmigration.com.au",

    maraNumber: "1795035",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@sjmigration.com.au",
      phone: ["02122181533", "+61386169990"],
      instagram: "https://instagram.com/sjmigration?igshid=1gfy9zc9vp7kx",
      whatsapp: "61481000600",
    },
  },
  {
    name: { en: "Azam Jafari", fa: "اعظم جعفری" },
    slug: "azam-jafari",
    website: "https://www.ajmigration.com",

    maraNumber: "1571733",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "ajafari@ajmigration.com",
      phone: ["+61280346901", "+61414187045"],
      whatsapp: "61414187045",
    },
  },
  {
    name: { en: "Matin Amirshahi", fa: "متین امیرشاهی" },
    slug: "matin-amirshahi",
    website: "https://www.amirshahi.law/",

    maraNumber: "1685110",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "admin@amirshahi.law",
      phone: ["02122705327", "09012800983"],
      whatsapp: "09012800983",
    },
  },
  {
    name: { en: "Ali Kiaei", fa: "علی کیائی" },
    slug: "ali-kiaei",
    website: "https://www.migraitiondoor.com.au/",

    maraNumber: "1789771",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "team@migrationdoor.com.au",
      phone: ["61735188044", "61481012012"],
      whatsapp: "61481012012",
    },
  },
  {
    name: { en: "Ali Shahami ", fa: "علی شهامی" },
    slug: "ali-shahami",
    website: "https://www.rkimmigrationgroup.org",

    maraNumber: "1688026",
    qualifications: { en: ["M.S."], fa: ["M.S."] },
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@rkimmigrationgroup.org",
      phone: ["61615068749"],
    },
  },
  {
    name: { en: "Azadeh Ghorashi ", fa: "آزاده قریشی" },
    slug: "azadeh-ghorashi",
    website: "https://www.azzyimmi.com.au",

    maraNumber: "1573151",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@azzyimmi.com",
      phone: ["6145477750"],
    },
  },

  {
    name: { en: "Ehsan Azadi", fa: "احسان آزادی" },
    slug: "ehsan-azadi",
    website: "https://www.arcmigration.com.au",

    maraNumber: "1279450",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "eazadi@arcmigration.com.au",
      phone: ["0416388993"],
    },
  },
  {
    name: { en: "Ehsan Jahanandish", fa: "احسان جهان اندیش" },
    slug: "ehsan-jahanandish",
    website: "www.smartmigration.com",

    qualifications: {
      en: ["M.S."],
      fa: ["M.S."],
    },
    maraNumber: "1680444",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@smartmigration.com",
      phone: ["+982147627828", "+61291606260", "+61477181614"],
      whatsapp: "+989027022286",
      instagram: "https://www.instagram.com/smartmigration/",
    },
  },
  {
    name: { en: "Kourosh Momeni", fa: "کوروش مومنی" },
    slug: "kourosh-momeni",
    website: "https://www.clau.com.au",

    maraNumber: "0955242",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "km@clau.com.au",
      phone: ["61294153344"],
    },
  },
  {
    name: { en: "Mehdi Keivani", fa: "مهدی کیوانی" },
    slug: "mehdi-keivani",
    website: "https://www.uniquevisa.net/",

    maraNumber: "2217813",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "admin@uniquevisa.net",
      phone: ["+61413541043"],
    },
  },
  {
    name: { en: "Nima Kazemi", fa: "نیما کاظمی" },
    slug: "nima-kazemi",
    website: "http://www.pasargadmigration.com/",

    maraNumber: "1278784",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    qualifications: {
      en: ["NZ 201700466.", "MSc"],
      fa: ["NZ 201700466.", "MSc"],
    },
    contact: {
      email: "info@pasargadmigration.com",
      phone: ["+982188029976"],
    },
  },
  {
    name: { en: "Saeed Rezaei", fa: "سعید رضائی" },
    slug: "saeed-rezaei",
    website: "http://www.subclass.com.au/",

    maraNumber: "1796143",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "INFO@SUBCLASS.COM.AU",
      phone: ["+61280065151"],
    },
  },
  {
    name: { en: "Sam Lotfollahi", fa: "سام لطف الهی" },
    slug: "sam-lotfollahi",

    maraNumber: "0901704",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@mmvisa.com.au",
      phone: ["+61455242242"],
    },
  },

  {
    name: { en: "Soodabeh Harirzadeh", fa: "سودابه حریری" },
    slug: "soodabeh-harirzadeh",
    website: "http://www.aradimmigration.com/",

    locations: [Locations.en, Locations.fa],
    maraNumber: "1687507",
    isFeatured: false,
    contact: {
      email: "sudihariri@gmail.com",
      phone: ["+982144967825"],
    },
  },
  {
    name: { en: "Zara Mavi", fa: "زهرا ماوی" },
    slug: "zara-mavi",
    website: "https://www.elitemigration.com/",

    locations: [Locations.en, Locations.fa],
    maraNumber: "1464111",
    qualifications: {
      en: ["MIA 10242"],
      fa: ["MIA 10242"],
    },
    isFeatured: false,
    contact: {
      email: "z.mavi@elitemigration.com",
      phone: ["0414825985"],
    },
  },
  {
    name: { en: "Daniel Eskandari", fa: "دنیل اسکندری" },
    slug: "daniel-eskandari",
    locations: [Locations.en, Locations.fa],
    maraNumber: "0100438",
    isFeatured: false,
    contact: {
      email: "daniel@australianmigration.org",
      phone: ["61282112722"],
    },
  },
  {
    name: { en: "Hassan Izadnia", fa: "حسن ایزدنیا" },
    slug: "hassan-izadnia",
    website: "https://www.regalmigration.com.au",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1571846",
    isFeatured: false,
    contact: {
      email: "h.izadnia@regalmigration.com.au",
      phone: ["61390135600"],
    },
  },
  {
    name: { en: "Roya Majd", fa: "رویا مجد" },
    slug: "roya-majd",
    website: "http://www.majdvisa.com",
    locations: [Locations.en, Locations.fa],
    maraNumber: "0701239",
    isFeatured: false,
    contact: {
      email: "info@majdvisa.com",
      phone: ["1300960326"],
    },
  },
  {
    name: { en: "Negin Safaee", fa: "نگین ضفایی" },
    slug: "negin-safaee",
    website: "www.visayab.com",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1791573",
    isFeatured: false,
    contact: {
      email: "n.safaee@visayab.com",
      phone: ["61296591694"],
    },
  },
  {
    name: { en: "Naghmeh Danai", fa: "نغمه دانای" },
    slug: "naghmeh-danai",
    website: "https://www.visazone.com.au/?lang=fa#top",
    locations: [Locations.en, Locations.fa],
    maraNumber: "748076",
    isFeatured: false,
    contact: {
      email: "naghmeh.danai@gmail.com",
      phone: ["61414326277"],
    },
  },
  {
    name: { en: "Sudabeh Rahbar", fa: "سودابه رهبر" },
    slug: "sudabeh-rahbar",
    website: "https://www.keymigrationvisa.com.au",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1386969",
    isFeatured: false,
    contact: {
      email: "Sue@keymigrationvisa.com.au",
      phone: ["430432395"],
    },
  },
  {
    name: { en: "Mostafa Homapour", fa: "سودابه رهبر" },
    slug: "mostafa-homapour",
    website: "https://visapick.com",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1796314",
    isFeatured: false,
    contact: {
      email: "info@visapick.com",
      phone: ["423924395"],
    },
  },
];
