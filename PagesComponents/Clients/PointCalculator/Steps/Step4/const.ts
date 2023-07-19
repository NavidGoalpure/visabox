import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  maritalStatusTitle = "maritalStatusTitle",
  PartnerEnglishTitle = "PartnerEnglishTitle",
  DoesPartnerHaveAssessmentTitle = "DoesPartnerHaveAssessmentTitle",
  DoesPartnerHaveAssessmentPopup="DoesPartnerHaveAssessmentPopup",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  maritalStatusTitle: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
  },
  DoesPartnerHaveAssessmentTitle: {
    en: "Does your partner has an assessment of documents?",
    fa: "آیا همسر شما اسسمنت مدارک دارد؟",
  },
  DoesPartnerHaveAssessmentPopup: {
    en: "If you don't know what this means just select No",
    fa:"اگر در این زمینه اطلاعات نداری این گزینه را خالی بگذارید",
  },
  PartnerEnglishTitle: {
    en: "Can your partner obtain IELTS 6 or above?",
    fa: "آیا همسر شما می تواند آیلتس 6 یا بالاتر را دریافت کند؟",
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
