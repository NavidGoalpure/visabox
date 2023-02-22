import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  SkilledOccupationList = "SkilledOccupationList",
  LawyersList = "LawyersList",
  Home = "Home"
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SkilledOccupationList: {
    en: "Skilled Occupation List",
    fa: "لیست مشاغل",
  },
  LawyersList: {
    en: "Lawyers List",
    fa: "لیست وکلا",
  },
  Home:{
    en:"Home",
    fa:"صفحه اصلی"
  },
};
