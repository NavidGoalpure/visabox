import { MultiLanguageText } from "Interfaces";
import { Dispatch, SetStateAction } from "react";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  NameInputLabel = "NameInputLabel",
  NameInputPlaceholder = "NameInputPlaceholder",
  LastNameInputLabel = "LastNameInputLabel",
  LastNameInputPlaceholder = "LastNameInputPlaceholder",
  PhoneInputLabel = "PhoneInputLabel",
  PhoneInputPlaceholder = "PhoneInputPlaceholder",
  AgeSectionTitle = "AgeSectionTitle",
  maritalStatusSectionTitle = "maritalStatusSectionTitle",
  FieldOfStudyInputLabel = "FieldOfStudyInputLabel",
  FieldOfStudyInputPlaceholder = "FieldOfStudyInputPlaceholder",
  DegreeOfEducationSectionTitle = "DegreeOfEducationSectionTitle",
  CurrentJobInputLabel = "CurrentJobInputLabel",
  CurrentJobInputPlaceholder = "CurrentJobInputPlaceholder",
  WorkExperienceSectionTitle = "WorkExperienceSectionTitle",
  AustralianWorkExperienceSectionTitle = "AustralianWorkExperienceSectionTitle",
  EnglishSkillLevelSectionTitle = "EnglishSkillLevelSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
  ConfirmButtonTitle = "ConfirmButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "sponsership of lawyers in our site | Mara Box",
    fa: "اسپانسری وکلا در سایت ما | مارا باکس",
  },
  SeoDesc: {
    fa: "در این صفحه طراحی شده برای وکلا شما مزیت های خرید اکانت وی ای پی سایت ماراباکس را میبینید",
    en: "In this page we show you the benefits of buying our vip account",
  },
  NameInputLabel: {
    en: "Name:",
    fa: "نام:",
  },
  NameInputPlaceholder: {
    en: "Simon",
    fa: "علی",
  },
  LastNameInputLabel: {
    en: "Last Name:",
    fa: "نام خانوادگی:",
  },
  LastNameInputPlaceholder: {
    en: "Smith",
    fa: "محمدی",
  },
  PhoneInputLabel: {
    en: "Phone Number:",
    fa: "شماره تلفن:",
  },
  PhoneInputPlaceholder: {
    en: "+98 0000 000 0000",
    fa: "0000 000 0900",
  },
  AgeSectionTitle: {
    en: "Age:",
    fa: "سن:",
  },
  maritalStatusSectionTitle: {
    en: "marital Status:",
    fa: "وضعیت تاهل:",
  },
  FieldOfStudyInputLabel: {
    en: "Field of Study:",
    fa: "حوزه تحصیلات:",
  },
  FieldOfStudyInputPlaceholder: {
    en: "Math",
    fa: "ریاضیات",
  },
  DegreeOfEducationSectionTitle: {
    en: "Degree of education :",
    fa: "درجه تحصیلات:",
  },
  CurrentJobInputLabel: {
    en: "Current Job:",
    fa: "کار فعلی:",
  },
  CurrentJobInputPlaceholder: {
    en: "Engineer",
    fa: "مهندس",
  },
  WorkExperienceSectionTitle: {
    en: "Work Experience :",
    fa: "تجربه کار:",
  },
  AustralianWorkExperienceSectionTitle: {
    en: "Australian work experience :",
    fa: "تجربه کار استرالیایی:",
  },
  EnglishSkillLevelSectionTitle: {
    en: "English Skill Level:",
    fa: "مهارت انگلیسی:",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
  },
  ConfirmButtonTitle: {
    en: "Confirm",
    fa: "تایید",
  },
};

////////////
export function getGsapTimeLine_Hero(
  setState: Dispatch<SetStateAction<boolean>>
) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      onLeave: () => setState(true),
      onEnterBack: () => setState(false),
    },
  });
}
