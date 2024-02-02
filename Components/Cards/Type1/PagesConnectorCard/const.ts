import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  GoToArticle = 'GoToArticle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  GoToArticle: {
    fa: 'خواندن',
    en: 'Read',
    zh: '阅读',
  },
};
