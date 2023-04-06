import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Join = 'Join',
  Persian = 'Persian',
  English = 'English',
  Telegram = 'Telegram',
  Instagram = 'Instagram',
  Youtube = 'Youtube',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Join: {
    fa: 'عضویت',
    en: 'Join',
  },
  Persian: {
    fa: 'فارسی',
    en: 'Persian',
  },
  English: {
    fa: 'انگلیسی',
    en: 'English',
  },
  Telegram: {
    en: 'Telegram',
    fa: 'تلگرام',
  },
  Instagram: {
    en: 'Instagram',
    fa: 'اینستاگرام',
  },
  Youtube: {
    en: 'Youtube',
    fa: 'یوتیوب',
  },
};

////////////
