import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  AstralianPopupContent="AstralianPopupContent",
  AustralianWorkExperienceSectionTitle = "AustralianWorkExperienceSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AstralianPopupContent: {
    en: `Your answer to this question affects your immigration score,`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    در 10 سال گذشته، چه مدت در شغل تخصصی انتخابی خود یا شغل نزدیک مرتبط در استرالیا کار کرده اید؟`
  },
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
