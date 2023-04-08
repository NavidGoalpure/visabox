import { MultiLanguageText } from 'Interfaces';
import { Dispatch, SetStateAction } from 'react';
import gsap from 'gsap';
//@ts-ignore
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Request a Call from Immigration Agencies | Mara Box',
    fa: 'درخواست تماس از وکلای مهاجرت | مارا باکس',
  },
  SeoDesc: {
    fa: 'اطلاعات خود را ارسال کنید و منتظر تماس وکلای مهاجرت باشید',
    en: 'Submit your information and wait for a call from immigration agencies',
  },
};

////////////
export function getGsapTimeLine_Hero(
  setState: Dispatch<SetStateAction<boolean>>
) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.hero', {
    scrollTrigger: {
      trigger: '.hero',
      onLeave: () => setState(true),
      onEnterBack: () => setState(false),
    },
  });
}
