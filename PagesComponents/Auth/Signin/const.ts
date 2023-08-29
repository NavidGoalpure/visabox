import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  Title = 'Title',
  ClientTitle = 'ClientTitle',
  AgentTitle = 'AgentTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
  },
  SeoDesc: {
    en: 'Use your Google or Discord accounts for Signing or Register.',
    fa: 'برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.',
  },
  Title: {
    en: 'Which option best describes you?',
    fa: 'کدام یک از جملات زیر گویای نقش شماست؟',
  },
  ClientTitle: {
    en: `I Want To Immigrate`,
    fa: 'می‌خواهم مهاجرت کنم',
  },
  AgentTitle: {
    en: `I'm A Mara Agancy`,
    fa: 'یک موسسه مهاجرتی هستم',
  },
};
