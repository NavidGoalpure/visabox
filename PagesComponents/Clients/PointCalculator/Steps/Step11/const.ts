import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  FailedToastMessage = "FailedToastMessage",
  SuccessToastText = "SuccessToastText",
  ConfirmButtonTitle = "ConfirmButtonTitle",
  Step11Title = "Step11Title",
  Step11Desc = "Step11Desc",
  HintText = "HintText",
  YesText = "YesText",
  NoText = "NoText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  FailedToastMessage: {
    en: "Request failed! Try again later",
    fa: "خطا! بعدا تلاش کنید",
    zh: '请求失败！ 稍后再试'
  },
  SuccessToastText: {
    en: "Congrats! You Are Done",
    fa: "تبریک! فرم کامل شد",
    zh: '请求失败！ 稍后再试'
  },

  ConfirmButtonTitle: {
    en: "Send",
    fa: "ارسال",
    zh: '发送'
  },

  Step11Title: {
    en: "Cooperating with immigration agents",
    fa: "همکاری با وکلای مهاجرت",
    zh: '与移民代理合作'
  },
  Step11Desc: {
    en: "Would you like us to share this information with Marabox approved immigration attorneys to contact you for a free consultation?",
    fa: "آیا مایل هستید که این اطلاعات را در اختیار وکلای مهاجرت مورد تایید «ماراباکس» بگذاریم تا برای مشاوره رایگان با شما تماس بگیرند؟",
    zh: '您是否希望我们与 Marabox 批准的移民律师分享此信息，以便与您联系进行免费咨询？'
  },
  HintText: {
    en: "Your immigration score will be displayed on the next page.",
    fa: "امتیاز مهاجرتی شما در صفحه بعد نمایش داده میشود.",
    zh: '您的移民分数将显示在下一页上。'
  },
  YesText: {
    en: "Yes",
    fa: "بله",
    zh: '是的'
  },
  NoText: {
    en: "No",
    fa: "خیر",
    zh: '不'
  },
};
