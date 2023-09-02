import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';
import { Slug } from 'Interfaces/Database/Occupation/Fields';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست مشاغل مورد نیاز',
    en: 'List Of Occupations',
    zh: '职业清单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست مشاغل مورد تایید برای ویزای مهارتی، از این بخش استفاده کنید.',
    en: 'Use this section to view the list of Occupations',
    zh: '使用此部分查看职业列表',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    zh: '查看全部',
  },
};
export const CardData = {
  code: 133111,
  title: {
    en: 'Construction Project Manager',
  } as MultiLanguageText,
  description: {
    en: 'Plans, organises, directs, controls and coordinates construction of civil engineering and building projects, and the physical and human resources involved in the construction process. Registration or licensing may be required.',
  } as MultiLanguageText,
  slug: { current: 'construction-project-manager' } as Slug,
  tasks: {} as MultiLanguageTextArray,
};
