import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Email = 'Email',
  Phone = 'Phone',
  Website = 'Website',
  ViewMore = 'ViewMore',
  NAATI = 'NAATI',
  Translator = 'Translator',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Email: {
    en: 'Email',
    fa: 'ایمیل',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
  },
  NAATI: {
    en: 'NAATI',
    fa: 'NATTI',
  },
  Translator: {
    en: 'Translator',
    fa: 'مترجم',
  },
};

////////////

export function getGsapTimeLine_VipCard(slug: string) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    `.${slug}`,
    {
      y: 40,
    },
    {
      scrollTrigger: {
        trigger: `.${slug}`,
        start: '-10 bottom',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );
}
