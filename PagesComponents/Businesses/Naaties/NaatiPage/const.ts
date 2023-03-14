import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  About = 'About',
  Contacts = 'Contacts',
  MaraNumber = 'MaraNumber',
  Socials = 'Socials',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "List of the most reliable Iranian translators of immigration documents | Marabox",
    fa: "لیست معتبر ترین مترجم های ایرانی مدارک مهاجرت | ماراباکس",
  },
  SeoDesc: {
    fa: "لیستی از معتبر ترین مترجم های ایرانی مدارک مهاجرت",
    en: "A list of the most reliable Iranian translators of immigration documents",
  },
  //
  About: {
    en: "About",
    fa: "توضیحات",
  },
  Contacts: {
    en: "contacts",
    fa: "ارتباطات",
  },
  MaraNumber: {
    en: "MaraNumber",
    fa: "شماره مارا",
  },
  Socials: {
    en: "Socials",
    fa: "ارتباطات",
  },
};
