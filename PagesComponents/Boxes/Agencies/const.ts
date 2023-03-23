import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Find the most authentic migration agencies for australia| Mara Box',
    fa: 'معتبر ترین موسسات مهاجرت ایرانی برای مهاجرت به استرالیا را پیدا کنید | مارا باکس',
  },
  SeoDesc: {
    fa: 'اسامی بهترین موسسات مهاجرت ایرانی برای اقامت و مهاجرت به استرالیا،ویزای سرمایه گذاری،کاری،خانواده و ازدواج، تجاری و تحصیلی',
    en: 'name and info of some of the best migration agencies for migration to australia,investment visa,work visa,marriage and student visa',
  },
  //
  PageTitle: {
    fa: 'موسسات مهاجرت',
    en: 'Migration Agencies',
  },
  PageDesc: {
    fa: 'این صفحه برای افراد یا خانواده هایی است که با کمک موسسه مهاجرت به دنبال مهاجرت دائم به استرالیا هستند',
    en: `This page is for people or families looking to permanently migrate to Australia with help of a migration agencies`,
  },
};

////////////
