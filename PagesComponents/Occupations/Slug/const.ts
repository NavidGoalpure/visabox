import { MultiLanguageText } from "interfaces";

export enum LanguageKeys {
  Details = "Details",
  Anzsco = "Anzsco",
  Backlog = "Backlog",
  AnzscoTabTitle = "AnzscoTabTitle",
  MajorGroup = "MajorGroup",
  SubMajorGroup = "SubMajorGroup",
  MinorGroup = "MinorGroup",
  UnitGroup = "UnitGroup",
  AlternativeTitles = "AlternativeTitles",
  Specialisations = "Specialisations",
  SkillPriorityLists = "SkillPriorityLists",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Details: {
    fa: "جزییات",
    en: "Details",
  },
  Anzsco: {
    fa: "کد رشته",
    en: "Anzsco",
  },
  Backlog: {
    fa: "صف",
    en: "Backlog",
  },
  AnzscoTabTitle: {
    fa: "مشخصات کد رشته",
    en: "ANZSCO Version Specifications",
  },
  MajorGroup: {
    en: "Major Group",
    fa: "گروه اصلی",
  },
  SubMajorGroup: {
    en: "Sub-Major Group",
    fa: "زیر گروه اصلی",
  },
  MinorGroup: {
    en: "Minor Group",
    fa: "گروه فرعی",
  },
  UnitGroup: {
    en: "Unit Group",
    fa: "گروه واحد",
  },
  AlternativeTitles: {
    en: "Alternative Titles",
    fa: "عنوان جایگزین",
  },
  Specialisations: {
    en: "Specialisations",
    fa: "تخصص ها",
  },
  SkillPriorityLists: {
    en: "2022 Skill Priority Lists",
    fa: "لیست اولویت مهارت 2022",
  },
};
