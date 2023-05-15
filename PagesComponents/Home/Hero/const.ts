import { MultiLanguageText } from 'Interfaces/Database';
import type { SizeMode, ISourceOptions } from 'tsparticles-engine';
export enum LanguageKeys {
  Title1 = 'Title1',
  Title2 = 'Title2',
  Title3 = 'Title3',
  Subtitle = 'Subtitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title1: {
    fa: 'جعبه ابزاری',
    en: 'Build a',
  },
  Title2: {
    fa: 'برای مهاجرت به',
    en: 'Bridge To',
  },
  Title3: {
    fa: 'استرالیا',
    en: 'Australia',
  },
  Subtitle: {
    fa: 'بررسی شرایط ویزا برای <span>نیروی متخصص, لیست وکلای مهاجرت معتبر, شبکه های اجتماعی</span> مناسب و امکانات جذاب دیگر برای مهاجرت به استرالیا',
    en: 'A toolbox for <span>immigrating </span> via <span>skilled worker</span> visa. You can find any of your requirements in this box',
  },
};
export const tsParticleOption: ISourceOptions = {
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

    number: { density: { enable: true, area: 800 }, value: 50 },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: {
        min: 0,
        max: 0.5,
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
