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
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    مدرک، دیپلم، دیپلم پیشرفته یا مدرک تجاری از یک موسسه آموزشی استرالیایی که حداقل 2 سال تحصیلی تمام وقت طول کشیده و به زبان انگلیسی تدریس می شود.`,
  },
  DesignatedRegionalAreaStudyPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    Did you live and study in a ‘designated regional area’ of Australia and complete a course which meets the ‘Australian study requirement’ at the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    آیا در «منطقه منطقه‌ای تعیین‌شده» استرالیا زندگی و تحصیل کرده‌اید و دوره‌ای را گذرانده‌اید که در زمان پر کردن این فرم، «شرایط تحصیل استرالیا» را برآورده می‌کند؟`,
  },
  SpecialistEducationalQualificationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    مدرک کارشناسی ارشد توسط تحقیقات یا مدرک دکترا از یک موسسه آموزشی استرالیا که شامل حداقل دو سال تحصیلی در یک زمینه مرتبط (علوم طبیعی و فیزیکی، فناوری اطلاعات یا مهندسی و فناوری‌های مرتبط) باشد.`,
  },
  ProfessionalYearInAustraliaPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    Did you complete a professional year program in Australia in your nominated skilled occupation for at least 12 months in the 48 months immediately before the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    آیا یک برنامه سال حرفه ای را در استرالیا در شغل ماهر معرفی شده خود به مدت حداقل 12 ماه در 48 ماه بلافاصله قبل از زمان دعوت برای درخواست ویزا تکمیل کرده اید؟`,
  },
  AccreditedCommunityLanguagePopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    Do you hold any one of the following?

Accreditation at the paraprofessional level or above;
Certification at the certified provisional level or above;
A community language credential`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    آیا شما یکی از موارد زیر را دارید؟

اعتباربخشی در سطح فوق حرفه ای یا بالاتر؛
صدور گواهینامه در سطح گواهی موقت یا بالاتر؛
اعتبار زبان جامعه`,
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
