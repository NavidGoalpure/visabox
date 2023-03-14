import { MultiLanguageText } from 'Interfaces';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست وکلای مهاجرت',
    en: 'List Of Mara Agents',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست وکلای رسمی مهاجرت به استرالیا اینجا از این بخش استفاده کنید.',
    en: 'Use this section to view the list of official immigration agents to Australia',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};
