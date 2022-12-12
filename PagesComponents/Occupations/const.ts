import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Search = 'Search',
  SearchPlaceHolder = 'SearchPlaceHolder',
  LoadMore = 'LoadMore',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'لیست مشاغل | مارا باکس',
    en: 'Skill Occupation List | Mara Box',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل ماهر را ببینید و بدانید که آیا شغل شما واجد شرایط درخواست ویزای کار یا مهارت استرالیا است یا خیر | برای اطلاعات بیشتر امروز با ما تماس بگیرید',
    en: 'See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us today for more info',
  },
  //
  PageTitle: {
    fa: 'لیست مشاغل',
    en: 'Skill Occupation List',
  },
  PageSubtitle: {
    fa: 'در این قسمت لیست کامل مشاغل واجد شرایط یا لیست ترکیبی مطابق با دستورالعمل قانونگذاری {{تگ}} آمده است.',
    en: 'Below is the complete list of eligible skilled occupations or combined list as prescribed in Legislative Instrument {{tag}}',
  },
  Search: {
    fa: 'جستجو',
    en: 'Search',
  },
  SearchPlaceHolder: {
    fa: 'کد یا نام شغل',
    en: 'Job code or Job title',
  },
  LoadMore: {
    fa: 'بیشتر',
    en: 'Load More',
  },
};

export const OCCUPATION_PER_PAGE = 9;
