import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Immigration Information Form",
    fa: "فرم اطلاعات مهاجرت",
  },
  SeoDesc: {
    fa: "فرم مهاجرت خود را پر کنید تا وکلای معتبر مهاجرت با شما به صورت رایگان در ارتباط باشند ",
    en: "Fill out your immigration form to have reputable immigration lawyers contact you for free",
  },
};
