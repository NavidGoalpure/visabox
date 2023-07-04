import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  WorkExperienceSectionTitle = "WorkExperienceSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  WorkExperienceSectionTitle: {
    en: "Overseas Work Experience:",
    fa: "تجربه کار خارج استرالیا:",
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
