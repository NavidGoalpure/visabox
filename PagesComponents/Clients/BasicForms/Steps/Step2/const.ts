import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  VisaSubclassTitle = "VisaSubclassTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  VisaSubclassTitle: {
    en: "Visa Subclass:",
    fa: "زیر کلاس ویزا:",
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
