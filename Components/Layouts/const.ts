import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
  StampText = 'StampText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BannerDesc: {
    en: 'Need Answers on Australian <span>Migration?</span>',
    fa: 'درباره مهاجرت به استرالیا سوالی داری؟',
    zh: '需要关于<span>澳大利亚移民</span>的答案吗？',
  },

  BannerButtonText: {
    en: 'Chat Now',
    fa: 'چت کن',
    zh: '现在聊天',
  },
  StampText: {
    en: 'Point Calculator',
    fa: 'ماشین حساب امتیازات',
    zh: '积分计算器',
  },
};
