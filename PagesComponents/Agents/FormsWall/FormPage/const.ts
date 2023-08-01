import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  ScoreTitle = 'ScoreTitle',
  VisaSubclassTitle = 'VisaSubclassTitle',
  AboutLabel = 'AboutLabel',
  NotCompletedHint = 'NotCompletedHint',
  BirthDateLabel = 'BirthDateLabel',
  EnglishSkillsLabel = 'EnglishSkillsLabel',
  MarriageStatusLabel = 'MarriageStatusLabel',
  PartnerEnglishLabel = 'PartnerEnglishLabel',
  PartnerAssesmentLabel = 'PartnerAssesmentLabel',
  CountryLabel = 'CountryLabel',
  FieldOfStudyLabel = 'FieldOfStudyLabel',
  DegreeLabel = 'DegreeLabel',
  AustralianEducationalQualificationLabel = 'AustralianEducationalQualificationLabel',
  DesignatedRegionalAreaStudyLabel = 'DesignatedRegionalAreaStudyLabel',
  SpecialistEducationalQualificationLabel = 'SpecialistEducationalQualificationLabel',
  ProfessionalYearInAustraliaLabel = 'ProfessionalYearInAustraliaLabel',
  AccreditedCommunityLanguageLabel = 'AccreditedCommunityLanguageLabel',
  UniversitySectionLabel = 'UniversitySectionLabel',
  CurrentJobLabel = 'CurrentJobLabel',
  WorkExperienceLabel = 'WorkExperienceLabel',
  AustralianWorkExperienceLabel = 'AustralianWorkExperienceLabel',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: '$agent Migration Agent | $agent',
    fa: '$agent وکیل مهاجرت ',
  },
  SeoDesc: {
    fa: 'marabox.com',
    en: 'marabox.com',
  },
  //
  ScoreTitle: {
    en: 'Score:',
    fa: 'امتیاز:',
  },
  VisaSubclassTitle: {
    en: 'Subclass:',
    fa: 'سابکلاس ویزا:',
  },
  AboutLabel: {
    en: 'About',
    fa: 'توضیحات',
  },
  NotCompletedHint: {
    en: `This user has registered information before the new update of "Marabox" form. For this reason, this profile may not be complete.`,
    fa: `            این کاربر قبل از بروزرسانی فرم «ماراباکس» ثبت اطلاعات نموده
            است. به همین دلیل پروفایل او کامل نمیباشد.`,
  },
  BirthDateLabel: {
    en: 'Birth Date:',
    fa: 'تاریخ تولد:',
  },
  EnglishSkillsLabel: {
    en: 'English Skill:',
    fa: 'سطح زبان انگیلیسی:',
  },
  MarriageStatusLabel: {
    en: 'Marriage Status:',
    fa: 'وضعیت تاهل:',
  },
  PartnerEnglishLabel: {
    en: "Is spouse's IELTS score 6?",
    fa: ' آیا نمره ایلتس همسر ۶ هست؟',
  },
  PartnerAssesmentLabel: {
    en: 'Does the spouse have an assessment of documents?',
    fa: 'آیا همسر دارای اسسمنت مدارک است؟',
  },
  CountryLabel: {
    en: 'Country:',
    fa: 'کشور:',
  },
  FieldOfStudyLabel: {
    en: 'Field of study:',
    fa: 'رشته ی تحصیلی:',
  },
  DegreeLabel: {
    en: 'Degree:',
    fa: 'مدرک تحصیلی:',
  },
  AustralianEducationalQualificationLabel: {
    en: 'Australian Educational Qualification:',
    fa: 'دارای حداقل دو سال تحصیل تمام وقت در استرالیا میباشم:',
  },
  DesignatedRegionalAreaStudyLabel: {
    en: 'Designated regional area study:',
    fa: 'حداقل دو سال تحصیل در مناطق کم جمعیت استرالیا دارم:',
  },
  SpecialistEducationalQualificationLabel: {
    en: 'Specialist Educational Qualification:',
    fa: 'تحصیل در رشته های خاص تخصصی در مقاطع فوق لیسانس (تحقیقی) یا دکترا حداقل بمدت دو سال:',
  },
  ProfessionalYearInAustraliaLabel: {
    en: 'Professional Year in Australia:',
    fa: 'یک سال حرفه ای در استرالیا بعد از تحصیلات خود و مرتبط به رشته خود گذرانده ام:',
  },
  AccreditedCommunityLanguageLabel: {
    en: 'Accredited Community Language',
    fa: 'گواهی نامه زبان ناتی:',
  },
  UniversitySectionLabel: {
    en: 'University Section:',
    fa: 'سکشن دانشگاه:',
  },
  CurrentJobLabel: {
    en: 'Current Job:',
    fa: 'شغل الان:',
  },
  WorkExperienceLabel: {
    en: 'Work experience:',
    fa: 'سابقه کاری:',
  },
  AustralianWorkExperienceLabel: {
    en: 'Australian work experience:',
    fa: 'سابقه کاری در استرالیا:',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
  },
};
