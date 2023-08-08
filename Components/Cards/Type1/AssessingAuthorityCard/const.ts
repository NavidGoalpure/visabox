import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  ReadMore = 'ReadMore',
  Tasks = 'Tasks',
  NoTask = 'NoTask',
  Website = 'Website',
  Email = 'Email',
  Address = 'Address',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ReadMore: {
    fa: 'نمایش کامل',
    en: 'Read More',
    cz: '阅读更多',
  },
  Tasks: {
    fa: 'شرح وظایف',
    en: 'Tasks',
    cz: '任务',
  },
  NoTask: {
    fa: 'شرح وظایفی برای این شغل وجود ندارد.',
    en: 'There are no Tasks associated to this Unit Group.',
    cz: '没有与该单元组关联的任务。',
  },
  Website: {
    fa: 'وبسایت:',
    en: 'Website:',
    cz: '网站：',
  },
  Email: {
    fa: 'ایمیل:',
    en: 'Email:',
    cz: '电子邮件：',
  },
  Address: {
    fa: 'آدرس:',
    en: 'Address:',
    cz: '地址:',
  },
};

export const OCCUPATION_PER_PAGE = 9;
