import { MultiLanguageText } from 'pages/interfaces';

export enum PageKeys {
  Details = 'Details',
  Anzsco = 'Anzsco',
  Backlog = 'Backlog',
}
export const componentStatements: Record<PageKeys, MultiLanguageText> = {
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
