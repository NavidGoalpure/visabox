import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  MustLoginDesc = 'MustLoginDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  MustLoginDesc: {
    fa: 'برای استفاده از این سرویس باید لاگین کنید.',
    zh: '您必须登录才能使用此服务。',
    en: 'You must log in to use this service.',
  },
};
