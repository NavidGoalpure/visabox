import { MultiLanguageText, Status } from 'Interfaces';
import { Exchange } from 'Interfaces/Businesses/exchanges';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
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
    fa: 'لیست صرافی هایی که خدمات پرداخت هزینه های مهاجرت به استرالیا را ارائه می‌دهند',
    en: 'List of exchanges that provide services for paying immigration fees to Australia',
  },
};

////////////
