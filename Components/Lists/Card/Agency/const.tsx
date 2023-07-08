import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Phone = 'Phone',
  Website = 'Website',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
  },
 
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
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
