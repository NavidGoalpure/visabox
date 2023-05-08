import { MultiLanguageText } from "Interfaces";
export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  SuccessToastText = "SuccessToastText",
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
  IELTSScoreSectionTitle = "IELTSScoreSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
  ConfirmButtonTitle = "ConfirmButtonTitle",
  Step0Title = "Step0Title",
  Step0Desc = "Step0Desc",
  Step0Button="Step0Button",
  Step9Title = "Step9Title",
  Step9Desc = "Step9Desc",
  YesText = "YesText",
  NoText = "NoText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Request a Call from Immigration Agencies | Mara Box",
    fa: "درخواست تماس از وکلای مهاجرت | مارا باکس",
  },
  SeoDesc: {
    fa: "اطلاعات خود را ارسال کنید و منتظر تماس وکلای مهاجرت باشید",
    en: "Submit your information and wait for a call from immigration agencies",
  },
  SuccessToastText: {
    en: "Congrats! You Are Done",
    fa: "تبریک! فرم کامل شد",
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
    en: "Web Developer",
    fa: "برنامه نویس اپلیکیشن موبایل",
  },
  WorkExperienceSectionTitle: {
    en: "Work Experience :",
    fa: "تجربه کار:",
  },
  AustralianWorkExperienceSectionTitle: {
    en: "Australian work experience :",
    fa: "تجربه کار استرالیایی:",
  },
  IELTSScoreSectionTitle: {
    en: "IELTS Score:",
    fa: "نمره ایلتس:",
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
    en: "Send",
    fa: "ارسال",
  },
  Step0Title: {
    en: "Marabox evaluation form",
    fa: "فرم ارزیابی ماراباکس ",
  },
  Step0Desc: {
    en: `Dear user
          By spending two minutes and filling out this form, you can provide your information to the best immigration lawyers so that they can provide you with the best immigration solutions by examining your conditions more closely.`,
    fa: `کاربر گرامی
         با صرف زمان دو دقیقه و پر کردن این فرم می توانید اطلاعات خود را در اختیار بهترین وکلای مهاجرت قرار دهید تا با بررسی  دقیق تر شرایط شما بتوانند بهترین راهکارهای مهاجرت را در اختیارتان قرار دهند.`,
  },
  Step0Button: {
    en: `Start`,
    fa: `ورود به فرم`,
  },
  Step9Title: {
    en: "Last Step",
    fa: "پایان فرم",
  },
  Step9Desc: {
    en: "We value your privacy and want to ensure that you have complete control over your information. Do you want us to share your registered information with immigration lawyers?",
    fa: "ما برای حریم خصوصی شما ارزش قائل هستیم و می خواهیم اطمینان حاصل کنیم که کنترل کاملی بر اطلاعات خود دارید. آیا مایل هستید که اطلاعات ثبت شده شما را در اختیار وکلای مهاجرت بگذاریم؟",
  },
  YesText: {
    en: "Yes",
    fa: "بله",
  },
  NoText: {
    en: "No",
    fa: "خیر",
  },
};
