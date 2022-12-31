import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Submitted = 'Submitted',
  Invited = 'Invited',
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
};
