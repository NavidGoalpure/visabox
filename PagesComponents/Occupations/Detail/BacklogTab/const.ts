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
    cz: '已提交'
  },
  Invited: {
    en: 'Invited',
    fa: 'دعوت شده‌ها',
    cz: '受邀'
  },
  Lodged: {
    en: 'Lodged',
    fa: 'لاج کرده‌ها',
    cz: '住宿'
  },
};
