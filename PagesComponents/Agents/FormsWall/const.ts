import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  LoadMore = 'LoadMore',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Pending Migration Inquiries| Mara Box',
    fa: 'لیست متقاضیان مهاجرت | مارا باکس',
  },
  SeoDesc: {
    fa: 'لیست افرادی که از طریق پلتفرم «ماراباکس» برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.',
    en: 'The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.',
  },
  //
  PageTitle: {
    fa: 'لیست متقاضیان مهاجرت',
    en: 'Pending Migration Inquiries',
  },
  PageSubtitle: {
    fa: 'لیست افرادی که از طریق پلتفرم «ماراباکس» برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.',
    en: 'The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.',
  },
  LoadMore: {
    fa: 'بیشتر',
    en: 'Load More',
  },
};
