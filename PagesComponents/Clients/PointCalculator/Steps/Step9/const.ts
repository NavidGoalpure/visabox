import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  IeltsPopupContent = 'IeltsPopupContent',
  IELTSScoreSectionTitle = 'IELTSScoreSectionTitle',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  IeltsPopupContent: {
    en: 'Your answer to this question affects your immigration score',
    fa: 'جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است',
  },
  IELTSScoreSectionTitle: {
    en: 'IELTS score or its equivalent from similar organizations:',
    fa: 'نمره آیلتس یا معادل آن از سازمان‌های مشابه:',
  },
  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
  },
};
