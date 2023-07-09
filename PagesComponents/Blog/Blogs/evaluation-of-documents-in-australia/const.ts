import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Evaluation-of-documents-in-australia | Mara Box',
    fa: 'ارزیابی اسناد در استرالیا | مارا باکس',
  },
  SeoDesc: {
    fa: 'مقاله های کاربردی و کمکی برای مهاجران به استرالیا',
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};