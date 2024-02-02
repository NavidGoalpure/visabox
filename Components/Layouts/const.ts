import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BannerDesc: {
    en: 'Need Answers on Australian <span>Migration?</span>',
    fa: 'اگه درباره مهاجرت به استرالیا <span>سوال</span> داری؟',
    zh: '需要关于<span>澳大利亚移民</span>的答案吗？',
  },

  BannerButtonText: {
    en: 'Ask AI',
    fa: 'از AI بپرس',
    zh: '与AI聊天',
  },
};
