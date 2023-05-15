import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  NameLabel = "NameLabel",
  DateLabel = "DateLabel",
  LanguageSkillsLabel = "LanguageSkillsLabel",
  AgeLabel = "AgeLabel",
  ViewMore = "ViewMore",
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
    en: "Birth Date:",
    fa: "تاریخ تولد:",
  },
  ViewMore: {
    en: "View More:",
    fa: "بیشتر:",
  },
};

////////////
