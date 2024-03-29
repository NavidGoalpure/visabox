import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Find the most authentic migration agents for australia | Mara Box',
    fa: 'معتبر ترین مترجم های ایرانی مهاجرت به استرالیا را پیدا کنید | مارا باکس',
    zh: '寻找最正宗的澳洲移民代理| Mara Box'
  },
  SeoDesc: {
    fa: 'این صفحه شامل اطلاعات مترجمین سازمان «ناتی» استرالیا و نیوزلند می‌باشد. مدارکی که توسط این مترجمین ترجمه می‌گردد، مورد تایید کلیه موسسات دولتی و غیردولتی استرالیا و نیوزلند می‌باشد.',
    en: `On this page, you have access to the information of all the Certified NAATI translators.`,
    zh: `在此页面上，您可以访问所有经过 NAATI 认证的译员的信息。`
  },
  //
  PageTitle: {
    fa: 'لیست مترجمین ناتی',
    en: 'NAATI Translators',
    zh: 'NAATI 翻译员',
  },
  PageDesc: {
    fa: 'این صفحه شامل اطلاعات مترجمین سازمان «ناتی» استرالیا و نیوزلند می‌باشد. مدارکی که توسط این مترجمین ترجمه می‌گردد، مورد تایید کلیه موسسات دولتی و غیردولتی استرالیا و نیوزلند می‌باشد.',
    en: `On this page, you have access to the information of all the Certified NAATI translators.`,
    zh: '在此页面上，您可以访问所有经过 NAATI 认证的译员的信息。'
  },
};

////////////
