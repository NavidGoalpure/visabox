import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SkilledOccupationList = 'SkilledOccupationList',
  AgentsList = 'AgentsList',
  Home = 'Home',
  socialList = 'socialList',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SkilledOccupationList: {
    en: 'Skilled Occupations',
    fa: 'لیست مشاغل',
  },
  AgentsList: {
    en: 'Agents',
    fa: 'لیست وکلا',
  },
  socialList: {
    en: 'Social Networks',
    fa: 'شبکه های اجتماعی',
  },
  Home: {
    en: 'Home',
    fa: 'صفحه اصلی',
  },
};
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
