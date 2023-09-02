import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  CountryTitle = 'CountryTitle',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  CountryTitle: {
    en: 'Your current location: ',
    fa: 'محل زندگی شما:',
    zh: '您当前的位置：'
  },

  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
    zh: '下一个'
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
    zh: '上一篇'
  },
};
