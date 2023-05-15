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
  },
  Invited: {
    en: 'Invited',
    fa: 'دعوت شده‌ها',
  },
  Lodged: {
    en: 'Lodged',
    fa: 'لاج کرده‌ها',
  },
};
