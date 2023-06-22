import gsap from "gsap";
import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  ChangeTheme = "ChangeTheme",
  IsBasicFormShowable = "IsBasicFormShowable",
  LogOut = "LogOut",
  HideDataToast = "HideDataToast",
  ShowDataToast = "ShowDataToast",
  FailedToastMessage = "FailedToastMessage",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ChangeTheme: {
    en: "Change Theme",
    fa: "عوض کردن تم",
  },
  IsBasicFormShowable: {
    en: "Data Publicity For Agents",
    fa: "نمایش اطلاعات به وکلای مهاجرت",
  },
  LogOut: {
    en: "Log out",
    fa: "خروج از حساب کاربری",
  },
  HideDataToast: {
    en: "Your Data Is Now Hidden From Migration Agents",
    fa: "داده های شما اکنون از دید عوامل مهاجرت پنهان شده است",
  },
  ShowDataToast: {
    en: "Your Data Is Now Visible To Migration Agents",
    fa: "داده های شما اکنون برای نمایندگان مهاجرت قابل مشاهده است",
  },
  FailedToastMessage: {
    en: "Request failed! Try again later",
    fa: "خطا! بعدا تلاش کنید",
  },
};
