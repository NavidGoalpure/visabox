import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  IELTSScoreSectionTitle = "IELTSScoreSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  IELTSScoreSectionTitle: {
    en: "IELTS Score:",
    fa: "نمره ایلتس:",
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
