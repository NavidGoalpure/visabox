import { MultiLanguageText } from "Interfaces";

export enum LanguageKeys {
  NameLabel = "NameLabel",
  DateLabel = "DateLabel",
  LanguageSkillsLabel = "LanguageSkillsLabel",
  AgeLabel = "AgeLabel",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NameLabel: {
    en: "Name:",
    fa: "نام:",
  },
  DateLabel: {
    en: "Date:",
    fa: "تاریخ:",
  },
  LanguageSkillsLabel: {
    en: "Language Skills:",
    fa: "مهارت اینگلیسی:",
  },
  AgeLabel: {
    en: "Age:",
    fa: "سن:",
  },
};

////////////
