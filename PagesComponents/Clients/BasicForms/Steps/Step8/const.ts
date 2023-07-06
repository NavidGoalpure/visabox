import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  OverseasPopupContent= "OverseasPopupContent",
  WorkExperienceSectionTitle = "WorkExperienceSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  OverseasPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation outside Australia?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    در 10 سال گذشته، چه مدت در شغل تخصصی انتخابی خود یا شغل نزدیک به آن در خارج از استرالیا کار کرده اید؟`,
  },
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
