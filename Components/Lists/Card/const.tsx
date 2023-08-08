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
    cz: '电子邮件',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
    cz: '电话',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
    cz: '网站',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
    cz: '查看更多',
  },
  NAATI: {
    en: 'NAATI',
    fa: 'NATTI',
    cz: 'NATTI',
  },
  Translator: {
    en: 'Translator',
    fa: 'مترجم',
    cz: '翻译',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
    cz: '已将电子邮件复制到剪贴板',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
    cz: '已将电话号码复制到剪贴板',
  },
  Agency: {
    fa: 'موسسه',
    en: 'Agency',
    cz: '机构',
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
