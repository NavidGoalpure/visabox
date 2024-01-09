import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Placeholder = 'Placeholder',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Placeholder: {
    fa: 'سوالت رو به هر زبانی مثل انگلیسی یا فارسی بپرس',
    zh: '用英文、波斯语或中文提问',
    en: 'Ask in any language like English, Persian, Chinese, and more',
  },
};
