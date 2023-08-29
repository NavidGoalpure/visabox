import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {

  CurrentJobInputLabel = "CurrentJobInputLabel",
  CurrentJobInputPlaceholder = "CurrentJobInputPlaceholder",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {

  CurrentJobInputLabel: {
    en: "Current Job:",
    fa: "کار فعلی:",
    zh: '目前的工作：'
  },
  CurrentJobInputPlaceholder: {
    en: "Example: Web Developer",
    fa: "مثال: برنامه نویس اپلیکیشن موبایل",
    zh: '示例：Web 开发人员'
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
