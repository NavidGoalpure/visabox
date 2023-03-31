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
    fa: 'برای مشاهده لیست وکلای معتبر مهاجرت به استرالیا که مورد تایید سازمان «MARA» هستند، از این بخش استفاده کنید.',
    en: 'You can find immigration agencies that provide you with services according to consulting and applying for immigration to Australia here.',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};
