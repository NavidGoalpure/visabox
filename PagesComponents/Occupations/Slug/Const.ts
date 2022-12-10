import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  Details = 'Details',
  Anzsco = 'Anzsco',
  Backlog = 'Backlog',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Details: {
    fa: 'جزییات',
    en: 'Details',
  },
  Anzsco: {
    fa: 'کد رشته',
    en: 'Anzsco',
  },
  Backlog: {
    fa: 'صف',
    en: 'Backlog',
  },
};
