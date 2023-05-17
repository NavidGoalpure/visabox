import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BannerDesc: {
    en: 'Are you ready to start your <span>Migration</span>',
    fa: 'برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟',
  },
  BannerButtonText: {
    en: 'Evaluation Form',
    fa: 'فرم ارزیابی',
  },
};
