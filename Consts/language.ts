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
    zh: '出了些问题',
  },
  WentWrongSubtitle: {
    en: 'Please check your internet connection. You may need to use a proxy.',
    fa: 'لطفا کانکشن خود را تست کنید. شاید نیاز به استفاده از یک پروکسی داشته باشید.',
    zh: '请检查您的互联网连接。 您可能需要使用代理。'
  },
};
