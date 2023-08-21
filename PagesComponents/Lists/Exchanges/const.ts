import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
  exchange = 'exchange',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'List of Exchanges | Mara Box',
    fa: 'لیست صرافی ها | مارا باکس',
    cz: '交易所列表 | Mara Box'
  },
  SeoDesc: {
    fa: 'در این صفحه لیست صرافی هایی که خدمات انتقال پول به استرالیا را انجام می‌دهند موجود می‌باشد. شما می‌توانید از این خدمات برای پرداخت‌های مالی مرتبط با مهاجرت خود استفاده نمایید. ',
    en: 'You can find the list of exchanges that help you tranfer your money in a safe, secure and fast way.',
    cz: '您可以找到可帮助您安全、可靠且快速地转账的交易所列表。'
  },
  //
  PageTitle: {
    fa: 'لیست صرافی‌ها',
    en: 'Exchanges List',
    cz: '交易所列表'
  },
  PageDesc: {
    fa: 'در این صفحه لیست صرافی هایی که خدمات انتقال پول به استرالیا را انجام می‌دهند موجود می‌باشد. شما می‌توانید از این خدمات برای پرداخت‌های مالی مرتبط با مهاجرت خود استفاده نمایید. ',
    en: 'You can find the list of exchanges that help you tranfer your money in a safe, secure and fast way.',
    cz: '您可以找到可帮助您安全、可靠且快速地转账的交易所列表。'
  },
  exchange: {
    fa: 'صرافی',
    en: 'exchange',
    cz: '交换'
  },
};

////////////
