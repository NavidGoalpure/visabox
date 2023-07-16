import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  ScoreTitle = "ScoreTitle",
  VisaSubclassTitle = "VisaSubclassTitle",
  AboutLabel = "AboutLabel",
  NotCompletedHint = "NotCompletedHint",
  BirthDateLabel = "BirthDateLabel",
  EnglishSkillsLabel = "EnglishSkillsLabel",
  MarriageStatusLabel = "MarriageStatusLabel",
  MarriageSituationLabel = "MarriageSituationLabel",
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
  MaritalSituation1 = "MaritalSituation1",
  MaritalSituation2_FirstLine = "MaritalSituation2_FirstLine",
  MaritalSituation2_SecondLine = "MaritalSituation2_SecondLine",
  MaritalSituation2_ThirdLine = "MaritalSituation2_ThirdLine",
  MaritalSituation2_ForthLine = "MaritalSituation2_ForthLine",
  MaritalSituation3_FirstLine = "MaritalSituation3_FirstLine",
  MaritalSituation3_SecondLine = "MaritalSituation3_SecondLine",
  MaritalSituation3_ThirdLine = "MaritalSituation3_ThirdLine",
  MaritalSituation4 = "MaritalSituation4",
  MaritalSituation5 = "MaritalSituation5",
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
  NotCompletedHint: {
    en: `This user has registered information before the new update of "Marabox" form. For this reason, this profile may not be complete.`,
    fa: `            این کاربر قبل از بروزرسانی فرم «ماراباکس» ثبت اطلاعات نموده
            است. به همین دلیل پروفایل او کامل نمیباشد.`,
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
  MarriageSituationLabel: {
    en: "Situation:",
    fa: "وضعیت:",
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
  MaritalSituation1: {
    en: "I don’t have a spouse or de facto partner",
    fa: "من همسر یا شریک ندارم",
  },
  MaritalSituation2_FirstLine: {
    en: "My partner is aged under 45, and",
    fa: "شریک زندگی من زیر 45 سال سن دارد و",
  },
  MaritalSituation2_SecondLine: {
    en: "My partner has Competent English, and",
    fa: "شریک من دارای زبان انگلیسی خوب(Ielts6) است و",
  },
  MaritalSituation2_ThirdLine: {
    en: "My partner is an applicant of the same subclass of visa as me, and",
    fa: "متقاضی همان زیر کلاس ویزا با من است و",
  },
  MaritalSituation2_ForthLine: {
    en: " My partner nominated a suitable skilled occupation and obtained a positive skills assessment (that is not for a Subclass 485 visa)",
    fa: "شریک من یک شغل ماهر مناسب را معرفی کرد و یک ارزیابی مهارت مثبت به دست آورد (که برای ویزای زیر کلاس 485 نیست)",
  },

  MaritalSituation3_FirstLine: {
    en: "My partner has Competent English, and",
    fa: "شریک من دارای زبان انگلیسی خوب است و",
  },
  MaritalSituation3_SecondLine: {
    en: "My partner is an applicant of the same subclass of visa as me, and",
    fa: "شریک من متقاضی همان زیر کلاس ویزا با من است و",
  },
  MaritalSituation3_ThirdLine: {
    en: "My partner is not an Australian permanent resident or an Australian citizen",
    fa: "شریک زندگی من مقیم دائم استرالیا یا شهروند استرالیا نیست",
  },
  MaritalSituation4: {
    en: "My partner is an Australian permanent resident or an Australian citizen",
    fa: "شریک زندگی من مقیم دائم استرالیا یا شهروند استرالیا است",
  },
  MaritalSituation5: {
    en: "This user has not received any points from this section.",
    fa: "این کاربر از این قسمت امتیازی دریافت نکرده است.",
  },
};
