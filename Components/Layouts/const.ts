import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
  StampText = 'StampText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BannerDesc: {
    en: "Free Consultation: Let's Discuss <span>Your Options</span>",
    fa: 'فرم مشاوره رایگان با وکیل مارا به همراه <span>محاسبه امتیاز شما</span> ',
    zh: '为您获得专业帮助 <span>移民</span>',
  },
  BannerButtonText: {
    en: 'Assessment form',
    fa: 'فرم ارزیابی',
    zh: '评估表',
  },
  StampText: {
    en: 'Point Calculator',
    fa: 'ماشین حساب امتیازات',
    zh: '积分计算器',
  },
};
