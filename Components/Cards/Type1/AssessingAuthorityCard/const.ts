import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  ReadMore = 'ReadMore',
  Tasks = 'Tasks',
  NoTask = 'NoTask',
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
  NoTask: {
    fa: 'شرح وظایفی برای این شغل وجود ندارد.',
    en: 'There are no Tasks associated to this Unit Group.',
  },
};

export const OCCUPATION_PER_PAGE = 9;
