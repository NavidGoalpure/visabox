import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  AgePopupContent = "AgePopupContent",
  AgeSectionTitle = "AgeSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AgePopupContent: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
  },
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
