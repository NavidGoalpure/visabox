import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  BannerDesc = "BannerDesc",
  BannerButtonText = "BannerButtonText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Mara Box | Australia immigration toolkit",
    fa: "ماراباکس | جعبه ابزار مهاجرت به استرالیا",
  },
  BannerButtonText: {
    en: "Fill out the form",
    fa: "پر کردن فرم",
  },
  BannerDesc: {
    en: `Are you ready to start your <span> immigration </span> journey? Now our form
         Fill out the immigration lawyers with you for <span> free </span> with
         You stay in touch.`,
    fa: `برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟ اکنون فرم ما
                را پر کنید تا وکلای مهاجرت با شما به صورت <span>رایگان</span> با
                شما در ارتباط باشند.`,
  },
};
