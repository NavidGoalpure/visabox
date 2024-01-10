import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  MobilePlaceholder = 'MobilePlaceholder',
  DesktopPlaceholder = 'DesktopPlaceholder',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  MobilePlaceholder: {
    en: 'Ask Your Questions',
    fa: 'سوالات خود را بپرسید',
    zh: '提出您的问题',
  },
  DesktopPlaceholder: {
    en: 'Ask Your Questions in any language like English, Persian, Chinese, and more',
    fa: 'سوالات خود را در هر زبانی مانند انگلیسی، فارسی، چینی و غیره بپرسید',
    zh: '您可以用英语、波斯语、中文等多种语言提问',
  },
};
