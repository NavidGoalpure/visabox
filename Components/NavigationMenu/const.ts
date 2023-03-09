import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces';
import { DropdownItem } from './interface';

export enum LanguageKeys {
  Home = 'Home',
  Socials = 'Socials',
  Businesses = 'Businesses',
  Occupations = 'Occupations',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Socials: {
    en: 'Socials',
    fa: 'شبکه های اجتماعی',
  },
  Home: {
    en: 'Home',
    fa: 'صفحه اصلی',
  },
  Businesses: {
    en: 'Businesses',
    fa: 'کسب و کارها',
  },
  Occupations: {
    en: 'Skilled Worder Visa',
    fa: 'ویزای متخصصان',
  },
};
export const bussinessItems: DropdownItem[] = [
  {
    title: { en: 'Agents', fa: 'وکلا' },
    href: '/businesses/agents',
  },
  {
    title: { en: 'Naati Translators', fa: 'مترجمان ناتی' },
    href: '/businesses/naaties',
  },
  {
    title: { en: 'Exchanges', fa: 'صرافی‌ها' },
    href: '/businesses/exchanges',
  },
];
export const occupationItems: DropdownItem[] = [
  {
    title: { en: 'Search', fa: 'جستجو' },
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
