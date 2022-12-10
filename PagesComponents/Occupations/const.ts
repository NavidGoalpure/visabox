import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Search = 'Search',
  SearchPlaceHolder = 'SearchPlaceHolder',
  LoadMore = 'LoadMore',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
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
