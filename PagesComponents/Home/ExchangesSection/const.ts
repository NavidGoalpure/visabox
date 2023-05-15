import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست صرافی‌ها',
    en: 'List Of Exchanges',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست صرافی‌های معتبری که می‌توانند شما را در پرداخت های مهاجرت یاری دهند، از این بخش استفاده کنید.',
    en: 'You can find a list of exchanges to transfer your money overseas safely, securely, and quickly.',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};
