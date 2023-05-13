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
    en: '$naati NATTI Translator | Mara Box',
    fa: '$naati مترجم ناتی | ماراباکس',
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
