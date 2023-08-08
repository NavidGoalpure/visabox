import { MultiLanguageText } from 'Interfaces/Database';

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
    cz: '加入',
  },
  Persian: {
    fa: 'فارسی',
    en: 'Persian',
    cz: '波斯语',
  },
  English: {
    fa: 'انگلیسی',
    en: 'English',
    cz: '英语',
  },
  Telegram: {
    en: 'Telegram',
    fa: 'تلگرام',
    cz: 'Telegram',
  },
  Instagram: {
    en: 'Instagram',
    fa: 'اینستاگرام',
    cz: 'Instagram',
  },
  Youtube: {
    en: 'Youtube',
    fa: 'یوتیوب',
    cz: 'Youtube',
  },
};

////////////
