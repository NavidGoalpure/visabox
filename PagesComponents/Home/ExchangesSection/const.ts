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
    cz: '交易所列表',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست صرافی‌های معتبری که می‌توانند شما را در پرداخت های مهاجرت یاری دهند، از این بخش استفاده کنید.',
    en: 'You can find a list of exchanges to transfer your money overseas safely, securely, and quickly.',
    cz: '您可以找到一系列交易所，以安全、可靠、快速地将资金转移到海外。',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    cz: '查看全部',
  },
};
