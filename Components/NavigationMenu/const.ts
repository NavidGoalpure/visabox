import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces/Database';
import { DropdownItem } from './interface';

export enum LanguageKeys {
  Home = 'Home',
  Lists = 'Lists',
  Occupations = 'Occupations',
  Login = 'Login',
  Blogs = 'Blogs',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    en: "Home",
    fa: "صفحه اصلی",
  },
  Lists: {
    en: "Lists",
    fa: "لیست‌ها",
  },
  Occupations: {
    en: "Skilled Worker Visa",
    fa: "ویزای مهارتی",
  },
  Login: {
    en: "Sign in",
    fa: "ورود",
  },
  Blogs: {
    en: "Blogs",
    fa: "مقاله ها",
  },
};
export const listsItems: DropdownItem[] = [
  {
    title: {
      en: 'Agencies',
      fa: 'لیست موسسات مهاجرتی',
    },
    href: '/lists/agencies',
  },
  {
    title: { en: 'Agents', fa: 'لیست وکلا' },
    href: '/lists/agents',
  },
  {
    title: { en: 'Naati', fa: 'لیست مترجمین' },
    href: '/lists/naaties',
  },
  {
    title: { en: 'Exchanges', fa: 'لیست صرافی‌ها' },
    href: '/lists/exchanges',
  },

  {
    title: {
      en: 'Social Network',
      fa: 'شبکه های اجتماعی',
    },
    href: '/lists/social-pages',
  },
];
export const occupationItems: DropdownItem[] = [
  {
    title: { en: 'Occupation List', fa: 'لیست مشاغل' },
    href: '/occupations',
  },
  {
    title: { en: 'Assessing Authority', fa: 'موسسات ارزیابی' },
    href: '/occupations/assssing-authorities',
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
