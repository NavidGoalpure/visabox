import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SomethingWentWrong = 'SomethingWentWrong',
}
export const globalComponentStatements: Record<
  LanguageKeys,
  MultiLanguageText
> = {
  SomethingWentWrong: {
    en: 'Something Went Wrong',
    fa: 'متاسفانه مشکلی پیش آمده',
  },
};
