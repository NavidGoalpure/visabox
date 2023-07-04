import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  AustralianWorkExperienceSectionTitle = "AustralianWorkExperienceSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  
  AustralianWorkExperienceSectionTitle: {
    en: "Australian work experience :",
    fa: "تجربه کار استرالیایی:",
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
