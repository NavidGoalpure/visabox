import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  FieldOfStudyInputLabel = "FieldOfStudyInputLabel",
  FieldOfStudyInputPlaceholder = "FieldOfStudyInputPlaceholder",
  DegreeOfEducationSectionTitle = "DegreeOfEducationSectionTitle",
  UniSectionsSectionTitle = "UniSectionsSectionTitle",
  AustralianEducationalQualificationTitle = "AustralianEducationalQualificationTitle",
  DesignatedRegionalAreaStudy = "DesignatedRegionalAreaStudy",
  SpecialistEducationalQualification = "SpecialistEducationalQualification",
  ProfessionalYearInAustralia = "ProfessionalYearInAustralia",
  AccreditedCommunityLanguage = "AccreditedCommunityLanguage",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  FieldOfStudyInputLabel: {
    en: "Field of Study:",
    fa: "رشته تحصیلی:",
  },
  FieldOfStudyInputPlaceholder: {
    en: "Example: Math",
    fa: "مثال: ریاضیات",
  },
  DegreeOfEducationSectionTitle: {
    en: "Degree of education :",
    fa: "درجه تحصیلات:",
  },
  UniSectionsSectionTitle: {
    en: "University Section:",
    fa: "سکشن دانشگاه:",
  },
  AustralianEducationalQualificationTitle: {
    en: "Australian Educational Qualification:",
    fa: "مدرک تحصیلی استرالیا:",
  },
  DesignatedRegionalAreaStudy: {
    en: "Designated regional area study:",
    fa: "مطالعه منطقه ای تعیین شده:",
  },
  SpecialistEducationalQualification: {
    en: "Specialist Educational Qualification:",
    fa: "مدرک تحصیلی تخصصی:",
  },
  ProfessionalYearInAustralia: {
    en: "Professional Year in Australia:",
    fa: "سال حرفه ای در استرالیا:",
  },
  AccreditedCommunityLanguage: {
    en: "Accredited Community Language",
    fa: "زبان انجمن معتبر",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
  },
};
