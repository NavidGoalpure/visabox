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
  },

  Step12Title: {
    en: "Your immigration score",
    fa: "امتیاز مهاجرتی شما",
  },
  Step12Desc: {
    en: "Would you like us to share this information with Marabax approved immigration attorneys to contact you for a free consultation?",
    fa: `از شما ممنونیم که فرممون رو کامل کردید.
    امتیاز شما در صفحه شخصیتون نمایش داده میشه.`,
  },
};
