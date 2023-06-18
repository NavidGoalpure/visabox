import gsap from "gsap";
import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  ChangeTheme = "ChangeTheme",
  IsBasicFormShowable = "IsBasicFormShowable",
  LogOut = "LogOut",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ChangeTheme: {
    en: "Change Theme",
    fa: "عوض کردن تم",
  },
  IsBasicFormShowable: {
    // navid talk to mobin about the english text
    en: "Is Form Sharable With Lawyers",
    fa: "نمایش فرم به وکلای مهاجرت",
  },
  LogOut: {
    en: "Log out",
    fa: "خروج از حساب کاربری",
  },
};
