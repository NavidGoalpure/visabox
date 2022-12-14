import { MultiLanguageText } from "interfaces";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
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
  Description = "Description",
  IndicativeSkillLevel = "IndicativeSkillLevel",
  Tasks = "Tasks",
  OccupationsinUnitGroup = "OccupationsinUnitGroup",
  AverageSalary = "AverageSalary",
  AlternativeTitles_title = "AlternativeTitles_title",
  AlternativeTitles_description = "AlternativeTitles_description",
  specialisations_title = "specialisations_title",
  specialisations_description = "specialisations_description",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: "لیست مشاغل | مارا باکس",
    en: "ANZSCO $code: $title | Australia Visa options",
  },
  SeoDesc: {
    fa: "فهرست کامل مشاغل ماهر را ببینید و بدانید که آیا شغل شما واجد شرایط درخواست ویزای کار یا مهارت استرالیا است یا خیر | برای اطلاعات بیشتر امروز با ما تماس بگیرید",
    en: "See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us today for more info",
  },
  //
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
  Description: {
    en: "Description",
    fa: "توضیحات",
  },
  IndicativeSkillLevel: {
    en: "Indicative Skill Level",
    fa: "سطح مهارت نشان دهنده",
  },
  Tasks: {
    en: "Tasks",
    fa: "وظایف",
  },
  OccupationsinUnitGroup: {
    en: "Occupations in This Unit Group",
    fa: "مشاغل در این گروه واحد",
  },
  AverageSalary: {
    en: "Average Salary 2021",
    fa: "میانگین حقوق ۲۰۲۱",
  },
  AlternativeTitles_title: {
    en: "Alternative titles",
    fa: "عنوان جایگزین",
  },
  AlternativeTitles_description: {
    en: "are any commonly used alternative title (or titles) for the occupation. These alternative titles have the same meaning as the principal title but may be less commonly used.",
    fa: "هر جایگزین رایج استفاده می شود عنوان (یا عناوین) برای شغل. این عناوین جایگزین دارند  همان معنای عنوان اصلی است اما ممکن است کمتر مورد استفاده قرار گیرد.",
  },
  specialisations_title: {
    en: "specialisations title",
    fa: "عنوان تخصص ها",
  },
  specialisations_description: {
    en: "are any commonly used titles which refer to a subset of jobs belonging to the occupation designated in the principal title. These jobs involve the performance of specialised tasks rather than the broader range of tasks usually performed in the occupation.",
    fa: "عناوین رایجی هستند که به زیرمجموعه ای از مشاغل متعلق به شغل تعیین شده در عنوان اصلی اشاره می کنند. این مشاغل شامل انجام وظایف تخصصی به جای گستره وسیع تری از وظایفی است که معمولاً در شغل انجام می شود.",
  },
};
