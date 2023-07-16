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
  },
  CurrentJobInputPlaceholder: {
    en: "Example: Web Developer",
    fa: "مثال: برنامه نویس اپلیکیشن موبایل",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
  },
};
