import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  ReadMore = 'ReadMore',
  Tasks = 'Tasks',
  NoTask = 'NoTask',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ReadMore: {
    fa: 'نمایش کامل',
    en: 'Read More',
    zh: '阅读更多',
  },
  Tasks: {
    fa: 'شرح وظایف',
    en: 'Tasks',
    zh: '任务',
  },
  NoTask: {
    fa: 'شرح وظایفی برای این شغل وجود ندارد.',
    en: 'There are no Tasks associated to this Unit Group.',
    zh: '没有与该单元组关联的任务。',
  },
};

export const OCCUPATION_PER_PAGE = 9;
