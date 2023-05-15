import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  WentWrongTitle = 'WentWrongTitle',
  WentWrongSubtitle = 'WentWrongSubtitle',
}
export const globalComponentStatements: Record<
  LanguageKeys,
  MultiLanguageText
> = {
  WentWrongTitle: {
    en: 'Something Went Wrong',
    fa: 'متاسفانه مشکلی پیش آمده',
  },
  WentWrongSubtitle: {
    en: 'Please check your internet connection. You may need to use a proxy.',
    fa: 'لطفا کانکشن خود را تست کنید. شاید نیاز به استفاده از یک پروکسی داشته باشید.',
  },
};
