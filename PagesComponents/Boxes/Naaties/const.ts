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
    fa: 'معتبر ترین مترجم های ایرانی مهاجرت به استرالیا را پیدا کنید | مارا باکس',
  },
  SeoDesc: {
    fa: 'اسامی بهترین مترجم ایرانی برای اقامت و مهاجرت به استرالیا،ویزای سرمایه گذاری،کاری،خانواده و ازدواج،تجاری و تحصیلی',
    en: 'name and info of some of the best migration agents for migration to australia,investment visa,work visa,marriage and student visa',
  },
  //
  PageTitle: {
    fa: 'لیست مترجمین ناتی',
    en: 'NAATI Translators',
  },
  PageDesc: {
    fa: 'این صفحه شامل اطلاعات مترجمین سازمان «ناتی» استرالیا می‌باشد. مدارکی که توسط این مترجمین ترجمه می‌گردد، مورد تایید کلیه موسسات دولتی و غیردولتی استرالیا و نیوزلند می‌باشد.',
    en: `On this page, you have access to the information of all the Certified NAATI translators.`,
  },
};

////////////
