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
    fa: 'لیست جامع افرادی که از طریق پلتفرم ما برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.',
    en: 'The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.',
  },
  //
  PageTitle: {
    fa: 'لیست متقاضیان مهاجرت',
    en: 'Pending Migration Inquiries',
  },
  PageSubtitle: {
    fa: 'لیست جامع افرادی که از طریق پلتفرم ما برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.',
    en: 'The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.',
  },
  LoadMore: {
    fa: 'بیشتر',
    en: 'Load More',
  },
};
export const listOfBasicForm_ResParams = `
      _id,
      _createdAt,
      name,
      lastname,
      age,
      current_job,
      ielts_score,
      completed_forms`;
////////////