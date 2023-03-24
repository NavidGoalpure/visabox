import { MultiLanguageText, Status } from 'Interfaces';
import { Exchange } from 'Interfaces/Businesses/exchanges';

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
  },
  SeoDesc: {
    en: 'List of exchanges for the possibility of paying immigration fees to the Australian government.',
    fa: 'لیست صرافی ها برای امکان پرداخت هزینه مهاجرت به دولت استرالیا ',
  },
  //
  PageTitle: {
    fa: 'لیست صرافی‌ها',
    en: 'Exchanges List',
  },
  PageDesc: {
    fa: 'در این صفحه لیست صرافی هایی که خدمات انتقال پول به استرالیا را انجام می‌دهند موجود می‌باشد. شما می‌توانید از این خدمات برای پرداخت‌های مالی مرتبط با مهاجرت خود استفاده نمایید. ',
    en: 'You can find the list of exchanges that help you tranfer your money in a safe, secure and fast way.',
  },
  exchange: {
    fa: 'صرافی',
    en: 'exchange',
  },
};

////////////
