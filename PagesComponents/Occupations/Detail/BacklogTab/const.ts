import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Submitted = 'Submitted',
  Invited = 'Invited',
  Lodged = 'Lodged',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Submitted: {
    en: 'Submitted',
    fa: 'ثبت شده‌ها',
    zh: '已提交'
  },
  Invited: {
    en: 'Invited',
    fa: 'دعوت شده‌ها',
    zh: '受邀'
  },
  Lodged: {
    en: 'Lodged',
    fa: 'لاج کرده‌ها',
    zh: '住宿'
  },
};
