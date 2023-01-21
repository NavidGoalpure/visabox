import { Languages, Locations, MultiLanguageText } from "Interfaces";
import { AssessingAuthorityAbv } from "Interfaces/Documents/occupation";
import { languages } from "sanity/schemas/languages";
import { Lawyer } from "./interfaces";

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
    name: { en: "Ryan Lasaki", fa: "رایان لاسکی" },
    slug: "ryan-lasaki",
    website: "ryan@caspianlegal.com.au",
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2022/03/ryan-lasaki-2.jpg",
    qualifications: {
      en: ["Juris Doctor", "MBA", "RMA"],
      fa: ["دکتر حقوقی", "MBA", "RMA"],
    },
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "ryan@caspianlegal.com.au",
      phone: ["1300082545", "0422435375"],
      whatsapp: "130082545",
    },
  },
  {
    name: { en: "Suzy David", fa: "سوزان دیوید" },
    slug: "suzy-david",
    website: "http://www.davidlegal.com.au/",
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2022/03/suzy-david.jpg",
    qualifications: {
      en: ["BEc", "LLM"],
      fa: ["BEc", "LLM"],
    },
    maraNumber: "0104743",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "sdavid@davidlegal.com.au",
      phone: ["0297285678", "0297285678"],
    },
  },
  {
    name: { en: "Mojtaba Dani", fa: "دکتر مجتبی دانی" },
    slug: "mojtaba-dani",
    website: "https://ddamigration.com/",
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2018/04/mojtaba-dani-2.jpg",
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
    slug: "sirous-ahmad",
    website: "https://www.visayab.com/",
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2016/07/sirous-ahmad-2.jpg",

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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2020/11/reza-aein-5.jpg",
    maraNumber: "0854826",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2018/04/hami-niroumand-1.jpg",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2020/01/mina-madani-3.jpg",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2017/06/soodeh-jafari-5.jpg",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2018/05/azam-jafari-1.jpg",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2018/04/matin-amirshahi-1.jpg",
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
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2022/03/ali-kiaei.jpg",
    maraNumber: "1789771",
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "team@migrationdoor.com.au",
      //ask about the () in the middle of number navid
      phone: ["61(7)35188044", "61481012012"],
      whatsapp: "61481012012",
    },
  },
  {
    name: { en: "Ali Shahami ", fa: "علی شهامی" },
    slug: "ali-shahami",
    website: "https://www.rkimmigrationgroup.org",
    avatar:
      "https://www.iranianlawyer.org/wp-content/uploads/2015/02/ali-shahami-1.jpg",
    maraNumber: "1688026",
    qualifications: {en:["M.S."],fa:["M.S."]},
    locations: [Locations.en, Locations.fa],
    isFeatured: false,
    contact: {
      email: "info@rkimmigrationgroup.org",
      phone: ["61615068749"],
    },
  },
];
