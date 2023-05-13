import { MultiLanguageText } from "Interfaces";
export enum LanguageKeys {
  Title = "Title",
  Subtitle = "Subtitle",
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc"
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {

  Title: {
    en: "Sign in",
    fa: "ورود",
  },
  Subtitle: {
    en: "Use your Google or Discord accounts for Signing or Register.",
    fa: "برای ورود یا ساخت اکانت از حساب کاربری دیسکورد یا گوگل خود استفاده کنید.",
  },
  SeoTitle: {
    en: "Creating and logging in to a user account",
    fa: "ساخت و ورود به حساب کاربری.",
  },
  SeoDesc: {
    en: "Create an account using your virtual accounts in Marabox.",
    fa: "با استفاده از حساب های مجازی خود در ماراباکس حساب کاربری بسازید.",
  },
};
