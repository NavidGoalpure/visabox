import { MultiLanguageText } from 'Interfaces/Database';
import { Dispatch, SetStateAction } from 'react';
import gsap from 'gsap';
//@ts-ignore
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { SizeMode, ISourceOptions } from 'tsparticles-engine';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  copyGmailToastMessage = 'copyGmailToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "sponsership of lawyers in our site | Mara Box",
    fa: "اسپانسر شوید | مارا باکس",
    cz: '我们网站的律师赞助| Mara Box'
  },
  SeoDesc: {
    fa: "اسپانسر ماراباکس شدن چگونه می‌تواند به کسب و کار مهاجرتی کمک کند",
    en: "In this page we show you the benefits of buying our vip account",
    cz: '在此页面中，我们向您展示购买 VIP 帐户的好处',
  },
  copyGmailToastMessage: {
    en: "Copied Gmail number to clipboard",
    cz: '已将 Gmail 号码复制到剪贴板',
    fa: "ایمیل در حافظه کپی شد",
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
//////////////////////
export const tsParticleOption_Desktop: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  autoPlay: true,
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  particles: {
    color: {
      value: '#ffffff',
    },
    horizontal: {
      random: 2,
      enable: false,
      minimumValue: 0.1,
      value: 1,
    },
    vertical: {
      random: 2,
      enable: false,
      minimumValue: 0.1,
      value: 1,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 600,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent' as SizeMode,
        radius: 0,
      },

      decay: 0,
      distance: {},
      direction: 'none',
      drift: 0,
      enable: true,
      //
      bounce: false,
      outModes: 'out',
      random: false,
      speed: 0.5,
      straight: false,
    },

    number: { density: { enable: true, area: 800 }, value: 30 },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: {
        min: 0,
        max: 0.3,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 2, max: 5 },
    },
  },
};
export const tsParticleOption_Mobile: ISourceOptions = {
  ...tsParticleOption_Desktop,
  number: { density: { enable: true, area: 800 }, value: 100 },
};
