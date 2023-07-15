import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Getting-skilled-worker-visa | Mara Box',
    fa: 'ویزای نیروی متخصص | مارا باکس',
  },
  SeoDesc: {
    fa: 'مقاله های کاربردی و کمکی برای مهاجران به استرالیا',
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};