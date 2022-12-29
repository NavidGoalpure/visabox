import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  NoData = 'NoData',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NoData: {
    en: 'There is nothing here.',
    fa: 'اطلاعاتی یافت نشد',
  },
};
