import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  ReadMore = 'ReadMore',
  Tasks = 'Tasks',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ReadMore: {
    fa: 'نمایش کامل',
    en: 'Read More',
  },
  Tasks: {
    fa: 'شرح وظایف',
    en: 'Tasks',
  },
};

export const OCCUPATION_PER_PAGE = 9;
