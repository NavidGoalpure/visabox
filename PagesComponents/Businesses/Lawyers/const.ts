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
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Skills Assessment And Assessing Authorities | Mara Box",
    fa: "لیست موسسات ارزیابی مدارک و مهارت های استرالیا | مارا باکس",
  },
  SeoDesc: {
    fa: "فهرست کامل مشاغل موسسات ارزیابی مدارک و مهارت های استرالیا به همراه آدرس و اطلاعات تماس",
    en: "See the full skills assessment and assessing authorities List & find their address, email, website and etc.",
  },
  //
  PageTitle: {
    fa: "لیست موسسات ارزیابی مدارک و مهارت های استرالیا",
    en: "Assessing authorities",
  },
};

////////////
export const assssingAuthorities: Lawyer[] = [
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
    name: { en: "Mohammad Azimi", fa: "محمد عظیمی" },
    slug: "mohammad-azimi",
    website: "http://www.shada.com.au/",

    maraNumber: "0958292",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "azimi@shada.com.au",
      phone: ["+61290025511"],
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
  {
    name: { en: "Damon Aryan", fa: "دامون ارین" },
    slug: "damon-aryan",
    website: "www.selectvisa.com",
    locations: [Locations.en, Locations.fa],
    maraNumber: "1384623",
    isFeatured: false,
    contact: {
      email: "aryan@selectvisa.com",
    },
  },
];
