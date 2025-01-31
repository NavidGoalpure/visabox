import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SkilledWorkerVisa = 'SkilledWorkerVisa',
  Occupations = 'Occupations',
  Lists = 'Lists',
  Home = 'Home',
  SkilledOccupationList = 'SkilledOccupationList',
  AssessingAuthority = 'AssessingAuthority',
  UniversitySection = 'UniversitySection',
  ContactUs = 'ContactUs',
  AgentsBox = 'AgentsBox',
  AgenciesBox = 'AgenciesBox',
  Exchanges = 'Exchanges',
  Naati = 'Naati',
  BecomeSponser = 'BecomeSponser',
  copyEmailToastMessage = 'copyEmailToastMessage',
  IranianAgents = 'IranianAgents',
  IndianAgents = 'IndianAgents',
  ChineseAgents = 'ChineseAgents',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SkilledWorkerVisa: {
    fa: 'ویزای مهارتی',
    en: 'Skilled Worker Visa',
    zh: '技术工人签证',
  },
  Occupations: {
    fa: 'ویزای مهارتی',
    en: 'Occupations',
    zh: '职业',
  },
  Lists: {
    fa: 'لیست ها',
    en: 'Lists',
    zh: '列表',
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

  UniversitySection: {
    fa: 'جستجوی سکشن دانشگاه',
    en: 'Find university section',
    zh: '大学部分搜索',
  },
  AgentsBox: {
    fa: 'وکلای مهاجرت',
    en: 'Agents',
    zh: '代理箱',
  },
  AgenciesBox: {
    fa: 'دفاتر مهاجرتی',
    en: 'Agencies',
    zh: '已将电子邮件复制到剪贴板',
  },
  Exchanges: {
    fa: 'صرافی ها',
    en: 'Exchanges',
    zh: '交流',
  },

  Naati: {
    fa: 'لیست مترجمین ناتی',
    en: 'Naati',
    zh: '纳蒂',
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
  IranianAgents: {
    fa: 'لیست وکلای ایرانی مهاجرت به استرالیا',
    en: 'Iranian Mara Agent list',
    zh: '伊朗特工',
  },
  IndianAgents: {
    fa: 'لیست وکلای مهاجرت هندی',
    en: 'Find Mara Agents in India',
    zh: '印度特工',
  },
  ChineseAgents: {
    fa: 'لیست وکلای چینی مهاجرت به استرالیا',
    en: 'Find Mara Agents in China',
    zh: '中国代理商',
  },
};
