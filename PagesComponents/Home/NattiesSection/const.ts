import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';
import { Slug } from 'Interfaces/Database/Fields';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست مترجمین ‌ناتی',
    en: 'List Of NAATI Translators',
    zh: 'NAATI 翻译人员名单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست مترجمین مورد تایید سازمان «NAATI»، از این بخش استفاده کنید. اسناد ترجمه شده توسط این مترجمین مورد تایید کلیه سازمان‌های دولتی و غیردولتی استرالیا می‌باشد.',
    en: 'To view the list of translators approved by NAATI, use this section. The documents translated by these translators are approved by all Australian governmental and non-governmental organizations.',
    zh: '要查看 NAATI 批准的译员列表，请使用此部分。 这些译员翻译的文件得到了所有澳大利亚政府和非政府组织的认可。',
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
