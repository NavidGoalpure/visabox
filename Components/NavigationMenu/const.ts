import gsap from 'gsap';
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
  BotName = 'BotName',
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
    en: 'Sign in',
    fa: 'ورود',
    zh: '登入',
  },
  Blogs: {
    en: 'Blog',
    fa: 'مقاله ها',
    zh: '博客',
  },
  FormsWall: {
    en: 'forms-wall',
    fa: 'صفحه فرم ها',
    zh: '形式墙',
  },
  Forms: {
    en: 'Tools',
    fa: 'ابزار ها ‌',
    zh: '工具',
  },
  BotName: {
    en: 'Marcya-AI',
    fa: 'هوش مصنوعی مارسیا',
    zh: 'Marcya-AI',
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
export const getGsapTimeLine = ({
  hamburgerAnimationRef,
  popupAnimationRef,
}: {
  hamburgerAnimationRef: React.MutableRefObject<gsap.core.Timeline | undefined>;
  popupAnimationRef: React.MutableRefObject<gsap.core.Timeline | undefined>;
}) => {
  hamburgerAnimationRef.current = gsap
    .timeline({ paused: true })
    .add('start')
    .to(
      '#hamburg',
      {
        duration: 0.2,
        y: 10,
      },
      'start'
    )
    .to(
      `#line1`,
      {
        duration: 0.2,
        y: 6,
      },
      'start'
    )
    .to(
      `#line2`,
      {
        duration: 0.2,
        y: -6,
      },
      'start'
    )
    .to(
      `#line1`,
      {
        duration: 0.1,
        rotate: 45,
        transformOrigin: '50% 50%',
      },
      '+=0.1'
    )

    .to(
      `#line2`,
      {
        duration: 0.1,
        rotate: -45,
        transformOrigin: '50% 50%',
      },
      '-=0.1'
    );
  popupAnimationRef.current = gsap
    .timeline({ paused: true })
    .to('#popup', { x: '100vw', duration: 0.3 }, '-=0.1');
};
