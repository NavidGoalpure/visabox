import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  MarcyaCTA = 'MarcyaCTA',
  ChatCTA = 'ChatCTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BotName: {
    en: 'Marcya',
    fa: 'مارسیا',
    zh: 'Marcya',
  },
  BotDesc: {
    en: 'Your Chat-Bot Guide to Australian Immigration: AI-Enhanced Solutions for Achieving Your Australian Dream.',
    fa: ' هوش مصنوعی آموزش دیده، برای پاسخ به سوالات مهاجرتی استرالیا',
    zh: '您的澳大利亚移民专家：AI增强解决方案，实现您的澳大利亚梦想。',
  },
  MarcyaCTA: {
    en: 'Discover & Buy',
    fa: 'توضیحات و خرید',
    zh: '探索与购买',
  },

  ChatCTA: {
    fa: 'چت با مارسیا',
    en: 'Chat with Marcya',
    zh: '与Marcya聊天',
  },
};
