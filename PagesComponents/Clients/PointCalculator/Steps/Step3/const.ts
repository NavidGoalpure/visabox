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
    zh: '您对这个问题的回答会影响您的移民分数'
  },
  AgeSectionTitle: {
    en: "Date Of Birth:",
    fa: "تاریخ تولد:",
    zh: '出生日期：'
  },
  BackToHomepage: {
    en: "Back to home page",
    fa: "بازگشت به صفحه اصلی",
    zh: '返回首页'
  },
  HintText: {
    en: "According to your age, you can only immigrate through investment visa .",
    fa: "با توجه به سن شما فقط از طریق ویزای سرمایه گذاری می توانید مهاجرت کنید.",
    zh: '根据您的年龄，您只能通过投资签证移民。'
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    zh: '下一个'
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    zh: '上一篇'
  },
};
