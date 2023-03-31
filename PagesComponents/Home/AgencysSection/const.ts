import { MultiLanguageText } from 'Interfaces';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست موسسات مهاجرتی',
    en: 'List Of Immigration Agencies',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست موسسات مهاجرتی معتبر از این بخش استفاده کنید.',
    en: 'You can find immigration agencies that provide you with services according to consulting and applying for immigration to Australia here.',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};
