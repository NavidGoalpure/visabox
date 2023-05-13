import { MultiLanguageText } from "Interfaces";
export enum LanguageKeys {
  Title = "Title",
  Desc = "Desc",
  SuccessToastMessage = "SuccessToastMessage",
  FailedToastMessage = "FailedToastMessage",
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
  SuccessToastMessage: {
    en: "You have signed in successfully",
    fa: "شما با موفقیت ثبت نام کردید",
  },
  FailedToastMessage: {
    en: "Request failed! Try again later",
    fa: "خطا! بعدا تلاش کنید",
  },
};
