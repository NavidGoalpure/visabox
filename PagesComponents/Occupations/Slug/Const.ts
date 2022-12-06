import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  Details = 'Details',
  Anzsco = 'Anzsco',
  Backlog = 'Backlog',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Details: {
    ir: 'جزییات',
    en: 'Details',
  },
  Anzsco: {
    ir: 'کد رشته',
    en: 'Anzsco',
  },
  Backlog: {
    ir: 'صف',
    en: 'Backlog',
  },
};
