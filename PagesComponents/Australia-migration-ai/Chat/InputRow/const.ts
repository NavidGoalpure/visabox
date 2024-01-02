import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Placeholder = 'Placeholder',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Placeholder: {
    fa: 'سوال خود را بپرسید',
    zh: '提出您的问题',
    en: 'Ask Your Question',
  },
};
