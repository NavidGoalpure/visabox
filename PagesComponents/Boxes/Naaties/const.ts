import { Locations, MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Find the most authentic migration agents for australia| Mara Box',
    fa: 'معتبر ترین وکلای ایرانی مهاجرت به استرالیا را پیدا کنید | مارا باکس',
  },
  SeoDesc: {
    fa: 'اسامی بهترین وکلای ایرانی برای اقامت و مهاجرت به استرالیا،ویزای سرمایه گذاری،کاری،خانواده و ازدواج،تجاری و تحصیلی',
    en: 'name and info of some of the best migration agents for migration to australia,investment visa,work visa,marriage and student visa',
  },
  //
  PageTitle: {
    fa: 'مترجم ناتی',
    en: 'Naati Translator',
  },
  PageDesc: {
    fa: 'این صفحه برای افراد یا خانواده هایی است که با کمک وکیل به دنبال مهاجرت دائم به استرالیا هستند',
    en: `This page is for people or families looking to permanently migrate to Australia with help of a agent`,
  },
};

////////////
