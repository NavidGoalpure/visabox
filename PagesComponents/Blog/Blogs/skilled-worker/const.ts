import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'skilled-worker | Mara Box',
    fa: 'نیروی متخصص | مارا باکس',
  },
  SeoDesc: {
    fa: 'مقاله های کاربردی و کمکی برای مهاجران به استرالیا',
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};