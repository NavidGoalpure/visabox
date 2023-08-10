import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  FailedToastMessage = "FailedToastMessage",
  SuccessToastText = "SuccessToastText",
  ConfirmButtonTitle = "ConfirmButtonTitle",
  Step11Title = "Step11Title",
  Step11Desc = "Step11Desc",
  HintText= "HintText",
  YesText = "YesText",
  NoText = "NoText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  FailedToastMessage: {
    en: "Request failed! Try again later",
    fa: "خطا! بعدا تلاش کنید",
  },
  SuccessToastText: {
    en: "Congrats! You Are Done",
    fa: "تبریک! فرم کامل شد",
  },

  ConfirmButtonTitle: {
    en: "Send",
    fa: "ارسال",
  },

  Step11Title: {
    en: "Cooperating with immigration agents",
    fa: "همکاری با وکلای مهاجرت",
  },
  Step11Desc: {
    en: "Would you like us to share this information with Marabax approved immigration attorneys to contact you for a free consultation?",
    fa: "آیا مایل هستید که این اطلاعات را در اختیار وکلای مهاجرت مورد تایید «ماراباکس» بگذاریم تا برای مشاوره رایگان با شما تماس بگیرند؟",
  },
  HintText: {
    en: "Your immigration score will be displayed on the next page.",
    fa: "امتیاز مهاجرتی شما در صفحه بعد نمایش داده میشود.",
  },
  YesText: {
    en: "Yes",
    fa: "بله",
  },
  NoText: {
    en: "No",
    fa: "خیر",
  },
};
