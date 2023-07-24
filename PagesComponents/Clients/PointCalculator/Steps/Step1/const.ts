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
  },

  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
  },
};
