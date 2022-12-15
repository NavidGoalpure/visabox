import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Home = 'Home',
  SkilledOccupationList = 'SkilledOccupationList',
  ContactUs = 'ContactUs',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    fa: 'خانه',
    en: 'Home',
  },
  SkilledOccupationList: {
    fa: 'لیست تخصص ها',
    en: 'Skilled Occupation List',
  },
  ContactUs: {
    fa: 'تماس با ما',
    en: 'Contact Us',
  },
};
