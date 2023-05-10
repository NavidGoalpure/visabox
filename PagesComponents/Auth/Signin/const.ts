import { MultiLanguageText } from "Interfaces";
export enum LanguageKeys {
  Title = "Title",
  Subtitle = "Subtitle",
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
};
