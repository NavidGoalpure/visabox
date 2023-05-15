import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  NoData = 'NoData',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NoData: {
    en: 'There is nothing here.',
    fa: 'اطلاعاتی یافت نشد',
  },
};
