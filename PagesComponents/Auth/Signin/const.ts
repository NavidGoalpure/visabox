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
    cz: '登入'
  },
  Subtitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    cz: '使用您的 Google 或 Discord 帐户进行签名或注册。'
  },
  SeoTitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    cz: '使用您的 Google 或 Discord 帐户进行签名或注册。'
  },
  SeoDesc: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    cz: '使用您的 Google 或 Discord 帐户进行签名或注册。'
  },
};
