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
    fa: 'فرایند مهاجرت خود را بیمه کنید. برای مشاهده لیست موسسات مهاجرتی معتبر از این بخش استفاده کنید.',
    en: 'Discover trusted immigration agencies for your Australian journey: Expert guidance and application services available here.',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
  },
};
