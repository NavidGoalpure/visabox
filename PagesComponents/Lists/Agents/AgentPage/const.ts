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
    en: '$agent Migration Agent | $agent',
    fa: '$agent وکیل مهاجرت ',
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
    fa: 'ارتباطات',
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
