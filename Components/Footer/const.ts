import { MultiLanguageText } from 'Interfaces/Database';

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
  copyEmailToastMessage = 'copyEmailToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Occupations: {
    fa: 'ویزای مهارتی',
    en: 'Occupations',
    zh: '职业',
  },
  Home: {
    fa: 'خانه',
    en: 'Home',
    zh: '家',
  },
  SkilledOccupationList: {
    fa: 'لیست تخصص ها',
    en: 'Occupation List',
    zh: '职业清单',
  },
  ContactUs: {
    fa: 'تماس با ما',
    en: 'Contact Us',
    zh: '联系我们',
  },
  AssessingAuthority: {
    fa: 'موسسات ارزیابی',
    en: 'Assessing Authority',
    zh: '评估机构',
  },
  AgentsBox: {
    fa: 'وکلای مهاجرت',
    en: 'Agents Box',
    zh: '代理箱',
  },
  AgenciesBox: {
    fa: 'دفاتر مهاجرتی',
    en: 'Agencies Box',
    zh: '已将电子邮件复制到剪贴板',
  },
  SocialNetWorksBox: {
    fa: 'شبکه‌های اجتماعی',
    en: 'Social Networks Box',
    zh: '社交网络盒',
  },
  BecomeSponser: {
    fa: 'اسپانسر شوید',
    en: 'Become Our Sponser',
    zh: '成为我们的赞助商',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
    zh: '已将电子邮件复制到剪贴板',
  },
};
