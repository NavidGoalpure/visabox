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
  },
  BannerButtonText: {
    en: 'Assessment form',
    fa: 'فرم ارزیابی',
  },
  StampText: {
    en: 'Point Calculator',
    fa: 'ماشین حساب امتیازات',
  },
};
