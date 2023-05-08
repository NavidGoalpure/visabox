import { MultiLanguageText } from "Interfaces";
export enum LanguageKeys {
  Title = "Title",
  Desc = "Desc",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {

  Title: {
    en: "Please Wait Until We Verify Your Information...",
    fa: "در حال گرفتن اطلاعات از سرور...",
  },
  Desc: {
    en: "It might take a while please don’t close this tab",
    fa: " لطفا در طول پروسه از سایت خارج نشوید",
  },
};
