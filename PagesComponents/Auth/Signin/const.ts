import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  Title = 'Title',
  Subtitle = 'Subtitle',
  ClientTitle = 'ClientTitle',
  AgentTitle = 'AgentTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    en: 'Sign in',
    fa: 'ورود',
    zh: '登入',
  },
  Subtitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    zh: '使用您的 Google 或 Discord 帐户进行签名或注册。',
  },
  SeoTitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    zh: '使用您的 Google 或 Discord 帐户进行签名或注册。',
  },
  SeoDesc: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
    zh: '使用您的 Google 或 Discord 帐户进行签名或注册。',
  },

  ClientTitle: {
    en: `I Want To Immigrate`,
    fa: 'می‌خواهم مهاجرت کنم',
  },
  AgentTitle: {
    en: `I'm A Mara Agent`,
    fa: 'یک موسسه مهاجرتی هستم',
  },
};
