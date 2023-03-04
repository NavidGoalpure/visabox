import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SkilledOccupationList = 'SkilledOccupationList',
  LawyersList = 'LawyersList',
  Home = 'Home',
  socialList = 'socialList',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SkilledOccupationList: {
    en: 'Skilled Occupations',
    fa: 'لیست مشاغل',
  },
  LawyersList: {
    en: 'Lawyers',
    fa: 'لیست وکلا',
  },
  socialList: {
    en: 'Social Networks',
    fa: 'شبکه های اجتماعی',
  },
  Home: {
    en: 'Home',
    fa: 'صفحه اصلی',
  },
};
