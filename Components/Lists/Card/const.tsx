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
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
  Agency = "Agency"
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
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
  },
  Agency: {
    fa: 'موسسه',
    en: 'Agency',
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
