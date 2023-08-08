import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
  StampText = 'StampText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BannerDesc: {
    en: 'Get Professional Help for Your  <span>Migration</span>',
    fa: 'برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟',
    cz: '为您获得专业帮助 <span>移民</span>'
  },
  BannerButtonText: {
    en: 'Assessment form',
    fa: 'فرم ارزیابی',
    cz: '评估表'
  },
  StampText: {
    en: 'Point Calculator',
    fa: 'ماشین حساب امتیازات',
    cz: '积分计算器'
  },
};
