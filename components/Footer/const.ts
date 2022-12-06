import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  Home = 'Home',
  SkilledOccupationList = 'SkilledOccupationList',
  ContactUs = 'ContactUs',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    ir: 'خانه',
    en: 'Home',
  },
  SkilledOccupationList: {
    ir: 'لیست تخصص ها',
    en: 'Skilled Occupation List',
  },
  ContactUs: {
    ir: 'تماس با ما',
    en: 'Contact Us',
  },
};
