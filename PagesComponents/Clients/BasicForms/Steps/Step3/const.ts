import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  VisaSubclassPopupContent="VisaSubclassPopupContent",
  VisaSubclassTitle = "VisaSubclassTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  VisaSubclassPopupContent:{
    en:"Your answer to this question affects your immigration score",
    fa:"جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است"
  },
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
