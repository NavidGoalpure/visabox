import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  AgePopupContent = "AgePopupContent",
  AgeSectionTitle = "AgeSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
  BackToHomepage = "BackToHomepage",
  HintText = "HintText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AgePopupContent: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
  },
  AgeSectionTitle: {
    en: "Date Of Birth:",
    fa: "تاریخ تولد:",
  },
  BackToHomepage: {
    en: "Back to home page",
    fa: "بازگشت به صفحه اصلی",
  },
  HintText: {
    en: "According to your age, you can only immigrate through investment visa .",
    fa: "با توجه به سن شما فقط از طریق ویزای سرمایه گذاری می توانید مهاجرت کنید.",
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
