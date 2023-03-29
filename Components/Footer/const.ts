import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Occupations = 'Occupations',
  Home = 'Home',
  SkilledOccupationList = 'SkilledOccupationList',
  AssessingAuthority = 'AssessingAuthority',
  ContactUs = 'ContactUs',
  AgentsBox = 'AgentsBox',
  AgenciesBox = 'AgenciesBox',
  SocialNetWorksBox = 'SocialNetWorksBox',
  BecomeSponser = 'BecomeSponser',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Occupations: {
    fa: 'ویزای مهارتی',
    en: 'Occupations',
  },
  Home: {
    fa: 'خانه',
    en: 'Home',
  },
  SkilledOccupationList: {
    fa: 'لیست تخصص ها',
    en: 'Occupation List',
  },
  ContactUs: {
    fa: 'تماس با ما',
    en: 'Contact Us',
  },
  AssessingAuthority: {
    fa: 'موسسات ارزیابی',
    en: 'Assessing Authority',
  },
  AgentsBox: {
    fa: 'وکلای مهاجرت',
    en: 'Agents Box',
  },
  AgenciesBox: {
    fa: 'دفاتر مهاجرتی',
    en: 'Agencies Box',
  },
  SocialNetWorksBox: {
    fa: 'شبکه‌های اجتماعی',
    en: 'Social Networks Box',
  },
  BecomeSponser: {
    fa: 'اسپانسر شوید',
    en: 'Become Our Sponser',
  },
};
