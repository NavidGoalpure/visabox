import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  AboutLabel = "AboutLabel",
  FullNameLabel = "FullNameLabel",
  ScoreTitle = "ScoreTitle",
  BirthDateLabel = "BirthDateLabel",
  EnglishSkillsLabel = "EnglishSkillsLabel",
  MarriageStatusLabel = "MarriageStatusLabel",
  PartnerEnglishLabel = "PartnerEnglishLabel",
  PartnerAssesmentLabel = "PartnerAssesmentLabel",
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
  PhoneNumberTitle = "PhoneNumberTitle",
  EmailTitle = "EmailTitle",
  copyEmailToastMessage = "copyEmailToastMessage",
  copyPhoneToastMessage = "copyPhoneToastMessage",
  SaveTitle = "SaveTitle",
  BackTitle = "BackTitle",
  FailedToastMessage = "FailedToastMessage",
  SuccessToastText = "SuccessToastText",
  YesText = "YesText",
  NoText = "NoText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AboutLabel: {
    en: "About",
    fa: "توضیحات",
    zh: "关于",
  },
  FullNameLabel: {
    en: "Full Name:",
    fa: "نام و نام خانوادگی:",
    zh: "全名：",
  },
  ScoreTitle: {
    en: "Score:",
    fa: "امتیاز:",
    zh: "分数：",
  },

  BirthDateLabel: {
    en: "Birth Date:",
    fa: "تاریخ تولد:",
    zh: "出生日期：",
  },

  PhoneNumberTitle: {
    en: "Phone Number:",
    fa: "شماره تماس:",
    zh: "电话号码：",
  },
  EmailTitle: {
    en: "Email:",
    fa: "ایمیل:",
    zh: "电子邮件：",
  },

  EnglishSkillsLabel: {
    en: "English Skill:",
    fa: "سطح زبان انگیلیسی:",
    zh: "英语能力：",
  },
  MarriageStatusLabel: {
    en: "Marriage Status:",
    fa: "وضعیت تاهل:",
    zh: "婚姻状况：",
  },
  PartnerEnglishLabel: {
    en: "Is spouse's IELTS score 6?",
    fa: " آیا نمره ایلتس همسر ۶ هست؟",
    zh: "配偶的雅思成绩是6分吗？",
  },
  PartnerAssesmentLabel: {
    en: "Does the spouse have an assessment of documents?",
    fa: "آیا همسر دارای اسسمنت مدارک است؟",
    zh: "配偶是否对文件进行评估？",
  },
  CountryLabel: {
    en: "Country:",
    fa: "کشور:",
    zh: "国家：",
  },
  FieldOfStudyLabel: {
    en: "Field of study:",
    fa: "رشته ی تحصیلی:",
    zh: "研究领域：",
  },
  DegreeLabel: {
    en: "Degree:",
    fa: "مدرک تحصیلی:",
    zh: "程度：",
  },
  AustralianEducationalQualificationLabel: {
    en: "Australian Educational Qualification:",
    fa: "دارای حداقل دو سال تحصیل تمام وقت در استرالیا میباشم:",
    zh: "澳大利亚教育资格：",
  },
  DesignatedRegionalAreaStudyLabel: {
    en: "Designated regional area study:",
    fa: "حداقل دو سال تحصیل در مناطق کم جمعیت استرالیا دارم:",
    zh: "指定区域研究：",
  },
  SpecialistEducationalQualificationLabel: {
    en: "Specialist Educational Qualification:",
    fa: "تحصیل در رشته های خاص تخصصی در مقاطع فوق لیسانس (تحقیقی) یا دکترا حداقل بمدت دو سال:",
    zh: "专业教育资格：",
  },
  ProfessionalYearInAustraliaLabel: {
    en: "Professional Year in Australia:",
    fa: "یک سال حرفه ای در استرالیا بعد از تحصیلات خود و مرتبط به رشته خود گذرانده ام:",
    zh: "澳大利亚职业年：",
  },
  AccreditedCommunityLanguageLabel: {
    en: "Accredited Community Language:",
    fa: "گواهی نامه زبان ناتی:",
    zh: "认可的社区语言",
  },
  UniversitySectionLabel: {
    en: "University Section:",
    fa: "سکشن دانشگاه:",
    zh: "大学部分：",
  },
  CurrentJobLabel: {
    en: "Current Job:",
    fa: "شغل الان:",
    zh: "目前的工作：",
  },
  WorkExperienceLabel: {
    en: "Work experience overseas:",
    fa: "سابقه کاری خارج از استراليا:",
    zh: "工作经验：",
  },
  AustralianWorkExperienceLabel: {
    en: "Australian work experience:",
    fa: "سابقه کاری در استرالیا:",
    zh: "澳洲工作经验：",
  },
  copyEmailToastMessage: {
    en: "Copied email to clipboard.",
    fa: "ایمیل در حافظه کپی شد",
    zh: "已将电子邮件复制到剪贴板",
  },
  copyPhoneToastMessage: {
    en: "Copied Phone number to clipboard.",
    fa: "شماره تلفن در حافظه کپی شد",
    zh: "已将电话号码复制到剪贴板",
  },
  SaveTitle: {
    en: "Save",
    fa: "ذخیره",
    zh: "节省",
  },
  BackTitle: {
    en: "Back",
    fa: "بازگشت",
    zh: "后退",
  },
  FailedToastMessage: {
    en: "Request failed! Try again later",
    fa: "خطا! بعدا تلاش کنید",
    zh: "请求失败！ 稍后再试",
  },
  SuccessToastText: {
    en: "Congrats! You Are Done",
    fa: "تبریک! فرم کامل شد",
    zh: "请求失败！ 稍后再试",
  },
  YesText: {
    en: "Yes",
    fa: "بله",
    zh: "是的",
  },
  NoText: {
    en: "No",
    fa: "خیر",
    zh: "不",
  },
};
