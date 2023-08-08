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
    cz: '职业',
  },
  Home: {
    fa: 'خانه',
    en: 'Home',
    cz: '家',
  },
  SkilledOccupationList: {
    fa: 'لیست تخصص ها',
    en: 'Occupation List',
    cz: '职业清单',
  },
  ContactUs: {
    fa: 'تماس با ما',
    en: 'Contact Us',
    cz: '联系我们',
  },
  AssessingAuthority: {
    fa: 'موسسات ارزیابی',
    en: 'Assessing Authority',
    cz: '评估机构',
  },
  AgentsBox: {
    fa: 'وکلای مهاجرت',
    en: 'Agents Box',
    cz: '代理箱',
  },
  AgenciesBox: {
    fa: 'دفاتر مهاجرتی',
    en: 'Agencies Box',
    cz: '已将电子邮件复制到剪贴板',
  },
  SocialNetWorksBox: {
    fa: 'شبکه‌های اجتماعی',
    en: 'Social Networks Box',
    cz: '社交网络盒',
  },
  BecomeSponser: {
    fa: 'اسپانسر شوید',
    en: 'Become Our Sponser',
    cz: '成为我们的赞助商',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
    cz: '已将电子邮件复制到剪贴板',
  },
};
