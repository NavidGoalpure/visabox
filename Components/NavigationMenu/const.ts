import { MultiLanguageText } from 'Interfaces/Database';
import { DropdownItem } from './interface';

export enum LanguageKeys {
  Home = 'Home',
  Lists = 'Lists',
  Occupations = 'Occupations',
  Login = 'Login',
  Blogs = 'Blogs',
  FormsWall = 'FormsWall',
  Forms = 'Forms',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    en: 'Home',
    fa: 'صفحه اصلی',
    zh: '家',
  },
  Lists: {
    en: 'Agents & Professionals',
    fa: 'متخصصان',
    zh: '代理商和专业人士',
  },
  Occupations: {
    en: 'Skilled Worker Visa',
    fa: 'ویزای مهارتی',
    zh: '技术工人签证',
  },
  Login: {
    en: 'sign in',
    fa: 'ورود',
    zh: '登入',
  },
  Blogs: {
    en: 'Blog',
    fa: 'مقاله ها',
    zh: '博客',
  },
  FormsWall: {
    en: 'Forms Wall',
    fa: 'صفحه فرم ها',
    zh: '形式墙',
  },
  Forms: {
    en: 'Tools',
    fa: 'ابزار ها ‌',
    zh: '工具',
  },
};
export const listsItems: DropdownItem[] = [
  {
    title: {
      en: 'Mara Agents',
      fa: 'لیست وکلای مارا',
      zh: '代理商',
    },
    href: '/lists/agents',
  },
  {
    title: {
      en: 'Naati',
      fa: 'لیست مترجمین',
      zh: 'Naati',
    },
    href: '/lists/naaties',
  },
  {
    title: {
      en: 'Exchanges',
      fa: 'لیست صرافی‌ها',
      zh: '交流',
    },
    href: '/lists/exchanges',
  },
];

export const occupationItems: DropdownItem[] = [
  {
    title: {
      en: 'Occupation List',
      fa: 'لیست مشاغل',
      zh: '职业清单',
    },
    href: '/occupations',
  },
  {
    title: {
      en: 'Assessing Authority',
      fa: 'موسسات ارزیابی',
      zh: '评估机构',
    },
    href: '/occupations/assessing-authorities',
  },
  {
    title: {
      en: 'Find university section',
      fa: 'جستجوی سکشن دانشگاه',
      zh: '查找大学部分',
    },
    href: '/occupations/university-section-search',
  },
];
export const FormsItems: DropdownItem[] = [
  //  فعلا بخش درخواست وکیل رو غیرفعال  کردیم تا زمانی که وکیلی برای تماس داشته باشیم
  // {
  //   title: {
  //     en: 'Request Agent',
  //     fa: 'درخواست وکیل',
  //     zh: '请求代理',
  //   },
  //   href: '/clients/request-agent',
  // },
  {
    title: {
      en: 'Point Calculator',
      fa: 'محاسبه امتیاز مهاجرت',
      zh: '请求代理',
    },
    href: '/clients/point-calculator',
  },
];
export const MarcyaItems: DropdownItem[] = [
  {
    title: {
      en: 'Introduce & Buy',
      fa: 'معرفی و خرید',
      zh: '介绍与购买',
    },

    href: '/australia-migration-ai/introduce-marcya',
  },
  {
    title: {
      en: 'Chat With Marcya',
      fa: 'چت با مارسیا',
      zh: '与Marcya聊天',
    },

    href: '/australia-migration-ai/chat',
  },
];
