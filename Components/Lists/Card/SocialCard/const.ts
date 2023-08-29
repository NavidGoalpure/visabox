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
    zh: '加入',
  },
  Persian: {
    fa: 'فارسی',
    en: 'Persian',
    zh: '波斯语',
  },
  English: {
    fa: 'انگلیسی',
    en: 'English',
    zh: '英语',
  },
  Telegram: {
    en: 'Telegram',
    fa: 'تلگرام',
    zh: 'Telegram',
  },
  Instagram: {
    en: 'Instagram',
    fa: 'اینستاگرام',
    zh: 'Instagram',
  },
  Youtube: {
    en: 'Youtube',
    fa: 'یوتیوب',
    zh: 'Youtube',
  },
};

////////////
