import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',

}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "sponsership of lawyers in our site | Mara Box",
    fa: "اسپانسری وکلا در سایت ما | مارا باکس",
  },
  SeoDesc: {
    fa: "در این صفحه طراحی شده برای وکلا شما مزیت های خرید اکانت وی ای پی سایت ماراباکس را میبینید",
    en: "In this page we show you the benefits of buying our vip account",
  },
};

////////////
