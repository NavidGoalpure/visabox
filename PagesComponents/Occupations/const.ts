import { MultiLanguageText } from 'interfaces';

export enum PageKeys {
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Search = 'Search',
  SearchPlaceHolder = 'SearchPlaceHolder',
  LoadMore='LoadMore'
}
export const componentStatements: Record<PageKeys, MultiLanguageText> = {
  PageTitle: {
    ir: 'لیست مشاغل',
    en: 'Skill Occupation List',
  },
  PageSubtitle: {
    ir: 'در این قسمت لیست کامل مشاغل واجد شرایط یا لیست ترکیبی مطابق با دستورالعمل قانونگذاری {{تگ}} آمده است.',
    en: 'Below is the complete list of eligible skilled occupations or combined list as prescribed in Legislative Instrument {{tag}}',
  },
  Search: {
    ir: 'جستجو',
    en: 'Search',
  },
  SearchPlaceHolder: {
    ir: 'کد یا نام شغل',
    en: 'Job code or Job title',
  },
  LoadMore:{
    ir: 'بیشتر',
    en: 'Load More'
  }
};

export const OCCUPATION_PER_PAGE = 9;
