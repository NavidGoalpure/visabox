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
    zh: '您对这个问题的回答会影响您的移民分数'
  },
  IELTSScoreSectionTitle: {
    en: 'IELTS score or its equivalent from similar organizations:',
    fa: 'نمره آیلتس یا معادل آن از سازمان‌های مشابه:',
    zh: '雅思成绩或类似组织的同等成绩：'
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    zh: '下一个'
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    zh: '上一篇'
  },
};
