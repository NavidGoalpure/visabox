import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces';
import { Slug } from 'Interfaces/Fields';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست مشاغل',
    en: 'List Of Occupations',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست مشاغل مورد تایید برای ویزای مهارتی، از این بخش استفاده کنید.',
    en: 'Use this section to view the list of Occupations',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};

