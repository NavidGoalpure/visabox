import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  VisaSubclassTitle = "VisaSubclassTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  VisaSubclassTitle: {
    en: "Your current location: ",
    fa: "موقعیت فعلی شما",
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
