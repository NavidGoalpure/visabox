import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  maritalStatusTitle = "maritalStatusTitle",
  PartnerEnglishTitle = "PartnerEnglishTitle",
  MaritalStatusPopup = "MaritalStatusPopup",
  DoesPartnerHaveAssessmentTitle = "DoesPartnerHaveAssessmentTitle",
  DoesPartnerHaveAssessmentPopup = "DoesPartnerHaveAssessmentPopup",
  PartnerEnglishPopup = "PartnerEnglishPopup",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  maritalStatusTitle: {
    en: "Marital Status:",
    fa: "وضعیت تاهل:",
    zh: "婚姻状况：",
  },
  MaritalStatusPopup: {
    en: `Your spouse's age, educational qualification and work experience can have minor effects on your score. For more information, you can refer to an immigration lawyer.
`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    `,
    zh: `您配偶的年龄、学历和工作经验可能对您的分数影响较小。 如需了解更多信息，您可以咨询移民律师。`,
  },
  DoesPartnerHaveAssessmentTitle: {
    en: "Does your partner has an assessment of documents?",
    fa: "آیا همسر شما اسسمنت مدارک دارد؟",
    zh: "您的合作伙伴对文件进行评估吗？",
  },
  DoesPartnerHaveAssessmentPopup: {
    en: "If you don't know what this means just select No",
    fa: "اگر در این زمینه اطلاعات ندارید این گزینه را خالی بگذارید",
    zh: "如果您不知道这意味着什么，请选择否",
  },
  PartnerEnglishTitle: {
    en: "Can your partner obtain IELTS 6 or above?",
    fa: "آیا همسر شما می تواند حداقل آیلتس 6 یا معادل آن را دریافت کند؟",
    zh: "你的伴侣能考到雅思6分或以上吗？",
  },
  PartnerEnglishPopup: {
    en: `Your answer to this question affects your immigration score,
`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    `,
    zh: `您对这个问题的回答会影响您的移民分数`,
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    zh: "下一个",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    zh: "上一篇",
  },
};
