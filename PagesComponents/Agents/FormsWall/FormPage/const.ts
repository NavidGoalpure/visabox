import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  ScoreTitle = "ScoreTitle",
  VisaSubclassTitle = "VisaSubclassTitle",
  AboutLabel = "AboutLabel",
  BirthDateLabel = "BirthDateLabel",
  EnglishSkillsLabel = "EnglishSkillsLabel",
  MarriageStatusLabel = "MarriageStatusLabel",
  CountryLabel = "CountryLabel",
  FieldOfStudyLabel = "FieldOfStudyLabel",
  DegreeLabel = "DegreeLabel",
  AustralianEducationalQualificationLabel = "AustralianEducationalQualificationLabel",
  DesignatedRegionalAreaStudyLabel = "DesignatedRegionalAreaStudyLabel",
  SpecialistEducationalQualificationLabel = "SpecialistEducationalQualificationLabel",
  ProfessionalYearInAustraliaLabel = "ProfessionalYearInAustraliaLabel",
  AccreditedCommunityLanguageLabel = "AccreditedCommunityLanguageLabel",
  UniversitySectionLabel = "UniversitySectionLabel",
  CurrentJobLabel = "CurrentJobLabel",
  WorkExperienceLabel = "WorkExperienceLabel",
  AustralianWorkExperienceLabel = "AustralianWorkExperienceLabel",
  copyEmailToastMessage = "copyEmailToastMessage",
  copyPhoneToastMessage = "copyPhoneToastMessage",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "$agent Migration Agent | $agent",
    fa: "$agent وکیل مهاجرت ",
  },
  SeoDesc: {
    fa: "marabox.com",
    en: "marabox.com",
  },
  //
  ScoreTitle: {
    en: "Score:",
    fa: "امتیاز:",
  },
  VisaSubclassTitle: {
    en: "Subclass:",
    fa: "زیر کلاس ویزا:",
  },
  AboutLabel: {
    en: "About",
    fa: "توضیحات",
  },

  BirthDateLabel: {
    en: "Birth Date:",
    fa: "تاریخ تولد:",
  },
  EnglishSkillsLabel: {
    en: "English Skill:",
    fa: "سطح زبان انگیلیسی:",
  },
  MarriageStatusLabel: {
    en: "Marriage Status:",
    fa: "وضعیت تاهل:",
  },
  CountryLabel: {
    en: "Country:",
    fa: "کشور:",
  },
  FieldOfStudyLabel: {
    en: "Field of study:",
    fa: "رشته ی تحصیلی:",
  },
  DegreeLabel: {
    en: "Degree:",
    fa: "مدرک تحصیلی:",
  },
  AustralianEducationalQualificationLabel: {
    en: "Australian Educational Qualification:",
    fa: "مدرک تحصیلی استرالیا:",
  },
  DesignatedRegionalAreaStudyLabel: {
    en: "Designated regional area study:",
    fa: "مطالعه منطقه ای تعیین شده:",
  },
  SpecialistEducationalQualificationLabel: {
    en: "Specialist Educational Qualification:",
    fa: "مدرک تحصیلی تخصصی:",
  },
  ProfessionalYearInAustraliaLabel: {
    en: "Professional Year in Australia:",
    fa: "سال حرفه ای در استرالیا:",
  },
  AccreditedCommunityLanguageLabel: {
    en: "Accredited Community Language",
    fa: "زبان انجمن معتبر",
  },
  UniversitySectionLabel: {
    en: "University Section:",
    fa: "سکشن دانشگاه:",
  },
  CurrentJobLabel: {
    en: "Current Job:",
    fa: "شغل الان:",
  },
  WorkExperienceLabel: {
    en: "Work experience:",
    fa: "سابقه کاری:",
  },
  AustralianWorkExperienceLabel: {
    en: "Australian work experience:",
    fa: "سابقه کاری در استرالیا:",
  },
  copyEmailToastMessage: {
    en: "Copied email to clipboard",
    fa: "ایمیل در حافظه کپی شد",
  },
  copyPhoneToastMessage: {
    en: "Copied Phone number to clipboard",
    fa: "شماره تلفن در حافظه کپی شد",
  },
};
