import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  AgeSectionTitle = "AgeSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AgeSectionTitle: {
    en: "Birth Day:",
    fa: "تاریخ تولد:",
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
