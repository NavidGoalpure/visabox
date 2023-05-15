import { MultiLanguageText } from 'Interfaces/Database';

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
    en: '$agent Migration Agent | Mara Box',
    fa: '$agent وکیل مهاجرت | ماراباکس',
  },
  SeoDesc: {
    fa: 'marabox.com',
    en: 'marabox.com',
  },
  //
  About: {
    en: 'About',
    fa: 'توضیحات',
  },
  Contacts: {
    en: 'contacts',
    fa: 'راه های تماس',
  },
  MaraNumber: {
    en: 'MaraNumber',
    fa: 'شماره مارا',
  },
  Socials: {
    en: 'Socials',
    fa: 'ارتباطات',
  },
};
