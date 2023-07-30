import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  /////////////popupSection////////////////////
  DegreePopupContent = "DegreePopupContent",
  AustralianEducationalQualificationPopupContent = "AustralianEducationalQualificationPopupContent",
  DesignatedRegionalAreaStudyPopupContent = "DesignatedRegionalAreaStudyPopupContent",
  SpecialistEducationalQualificationPopupContent = "SpecialistEducationalQualificationPopupContent",
  ProfessionalYearInAustraliaPopupContent = "ProfessionalYearInAustraliaPopupContent",
  AccreditedCommunityLanguagePopupContent = "AccreditedCommunityLanguagePopupContent",
  //////////////////////////////////////
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
  DegreePopupContent: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
  },
  AustralianEducationalQualificationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
Degree, diploma, advanced diploma or trade qualification from an Australian educational institution which took at least 2 years of full-time study and was taught in English.`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
  },
  DesignatedRegionalAreaStudyPopupContent: {
    en: `Your answer to this question affects your immigration score,

Did you live and study in a ‘designated regional area’ of Australia and complete a course which meets the ‘Australian study requirement’ at the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
  },
  SpecialistEducationalQualificationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
  },
  ProfessionalYearInAustraliaPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
Did you complete a professional year program in Australia in your nominated skilled occupation for at least 12 months in the 48 months immediately before the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    آیا یک برنامه سال حرفه ای را در استرالیا در شغل ماهر معرفی شده خود به مدت حداقل 12 ماه در 48 ماه بلافاصله قبل از زمان دعوت برای درخواست ویزا تکمیل کرده اید؟`,
  },
  AccreditedCommunityLanguagePopupContent: {
    en: `Your answer to this question affects your immigration score,
`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
`,
  },
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
    fa: "آخرین مدرک تحصیلی و دانشگاهی:",
  },
  UniSectionsSectionTitle: {
    en: "University Section:",
    fa: "سکشن دانشگاه:",
  },
  AustralianEducationalQualificationTitle: {
    en: "Australian Educational Qualification:",
    fa: "دارای حداقل دو سال تحصیل تمام وقت در استرالیا میباشم:",
  },
  DesignatedRegionalAreaStudy: {
    en: "Designated regional area study:",
    fa: "تحصیل در مناطق کم جمعیت استرالیا به مدت حداقل دو سال:",
  },
  SpecialistEducationalQualification: {
    en: "Specialist Educational Qualification:",
    fa: "تحصیل در رشته های خاص تخصصی در مقاطع فوق لیسانس (تحقیقی) یا دکترا حداقل بمدت دو سال:",
  },
  ProfessionalYearInAustralia: {
    en: "Professional Year in Australia:",
    fa: "یک سال حرفه ای در استرالیا بعد از تحصیلات خود و مرتبط به رشته خود گذرانده ام.",
  },
  AccreditedCommunityLanguage: {
    en: "Accredited Community Language:",
    fa: "گواهی نامه زبان ناتی:",
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
