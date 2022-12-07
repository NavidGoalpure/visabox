import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  ReadMore = 'ReadMore',
  Tasks = 'Tasks',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ReadMore: {
    ir: 'نمایش کامل',
    en: 'Read More',
  },
  Tasks: {
    ir: 'شرح وظایف',
    en: 'Tasks',
  },
};

export const OCCUPATION_PER_PAGE = 9;
