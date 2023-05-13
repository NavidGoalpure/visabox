import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Login / Register",
    fa: "ورود / ثبت نام",
  },
  //   navid ask mobin about the desc of this page
  SeoDesc: {
    en: "Create your account",
    fa: "حساب کاربری خود را بسازید",
  },
};
