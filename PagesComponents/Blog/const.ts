import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Helpful blogs and articles for immigrating to Australia | Mara Box',
    fa: 'بلاگ مهاجرت به استرالیا | مارا باکس',
    zh: '对移民澳大利亚有用的博客和文章 | 玛拉盒子'
  },
  SeoDesc: {
    fa: 'مقاله های کاربردی و کمکی برای مهاجران به استرالیا',
    en: 'Practical and helpful articles for immigrants to Australia',
    zh: '为澳大利亚移民提供实用且有帮助的文章'
  },
};
