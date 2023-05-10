import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  BannerDesc = "BannerDesc",
    BannerButtonText = "BannerButtonText"

}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
 BannerDesc:{
    en:"Are you ready to start your <span>Migration</span>",
    fa:"برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟"
 },
 BannerButtonText:{
    en:"Fill out the form",
    fa:"پر کردن فرم"
 }
};
