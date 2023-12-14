import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  ConfirmButtonTitle = "ConfirmButtonTitle",
  Step12Title = "Step12Title",
  Step12Desc = "Step12Desc",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ConfirmButtonTitle: {
    en: "Back to home page",
    fa: "بازگشت به صفحه اصلی",
    zh: '返回首页'
  },

  Step12Title: {
    en: "Your immigration score",
    fa: "امتیاز مهاجرتی شما",
    zh: '您的移民分数'
  },
  Step12Desc: {
    en: "This is your pure score. If you apply for a 190 visa, 5 points will be added to your score, however if you apply for a 491 visa, 15 points will be added to your score.",
    fa: `این امتیاز خالص شماست. اگر برای ویزای ۱۹۰ اقدام کنید ۵ امتیاز و در صورتی که برای ویزای ۴۹۱ اقدام کنید ۱۵ امتیاز از طرف ایالت به امتیاز شما اضافه خواهد شد.`,
    zh: '这是你的纯分数。 如果您申请190签证，您的分数将增加5分，但如果您申请491签证，您的分数将增加15分。'
  },
};
