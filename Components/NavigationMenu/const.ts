import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces';
import { DropdownItem } from './interface';

export enum LanguageKeys {
  Home = 'Home',
  Businesses = 'Businesses',
  Occupations = 'Occupations',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Home: {
    en: 'Home',
    fa: 'صفحه اصلی',
  },
  Businesses: {
    en: 'Boxes',
    fa: 'لیست‌ها',
  },
  Occupations: {
    en: 'Skilled Worker Visa',
    fa: 'ویزای مهارتی',
  },
};
export const boxesItems: DropdownItem[] = [
  {
    title: {
      en: 'Agencies Box',
      fa: 'لیست موسسات مهاجرتی',
    },
    href: '/boxes/agencies',
  },
  {
    title: { en: 'Agents Box', fa: 'لیست وکلا' },
    href: '/boxes/agents',
  },
  {
    title: { en: 'Naati Box', fa: 'لیست مترجمین' },
    href: '/boxes/naaties',
  },
  {
    title: { en: 'Exchanges Box', fa: 'لیست صرافی‌ها' },
    href: '/boxes/exchanges',
  },

  {
    title: {
      en: 'Social Network Box',
      fa: 'شبکه های اجتماعی',
    },
    href: '/boxes/social-pages',
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
