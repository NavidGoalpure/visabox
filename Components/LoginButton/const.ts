import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Login = 'Login',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Login: {
    fa: 'ورود',
    zh: '登录',
    en: 'Login',
  },
};
