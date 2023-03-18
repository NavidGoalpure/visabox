import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  About = "About",
  Contacts = "Contacts",
  MaraNumber = "MaraNumber",
  Socials = "Socials",
  Agent = "Agent",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "$agent Migration Agency | $agent",
    fa: "موسسه مهاجرت $agent",
  },
  SeoDesc: {
    fa: "marabox.com",
    en: "marabox.com",
  },
  //
  About: {
    en: "About",
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
  Agent: {
    en: "agent",
    fa: "وکیل",
  },
};
