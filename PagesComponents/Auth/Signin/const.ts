import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    en: 'Sign in',
    fa: 'ورود',
  },
  Subtitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
  },
  SeoTitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
  },
  SeoDesc: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
  },
};
