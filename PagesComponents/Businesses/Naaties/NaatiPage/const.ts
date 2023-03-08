import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  About = "About",
  Contacts = "Contacts",
  MaraNumber = "MaraNumber",
  Socials = "Socials",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "$lawyer Migration Lawyer | $lawyer",
    fa: "وکیل مهاجرت $lawyer",
  },
  SeoDesc: {
    fa: "marabox.com",
    en: "marabox.com",
  },
  //
  About: {
    en: "about",
    fa: "توضیحات",
  },
  Contacts: {
    en: "contacts",
    fa: "ارتباطات",
  },
  MaraNumber: {
    en: "MaraNumber",
    fa: "شماره مارا",
  },
  Socials: {
    en: "Socials",
    fa: "ارتباطات",
  },
};
