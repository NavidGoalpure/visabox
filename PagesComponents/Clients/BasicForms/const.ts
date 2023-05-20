import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  FailedToastMessage = 'FailedToastMessage',
  SuccessToastText = 'SuccessToastText',
  NameInputLabel = 'NameInputLabel',
  NameInputPlaceholder = 'NameInputPlaceholder',
  LastNameInputLabel = 'LastNameInputLabel',
  LastNameInputPlaceholder = 'LastNameInputPlaceholder',
  PhoneInputLabel = 'PhoneInputLabel',
  PhoneInputPlaceholder = 'PhoneInputPlaceholder',
  AgeSectionTitle = 'AgeSectionTitle',
  maritalStatusSectionTitle = 'maritalStatusSectionTitle',
  FieldOfStudyInputLabel = 'FieldOfStudyInputLabel',
  FieldOfStudyInputPlaceholder = 'FieldOfStudyInputPlaceholder',
  DegreeOfEducationSectionTitle = 'DegreeOfEducationSectionTitle',
  UniSectionsSectionTitle = 'UniSectionsSectionTitle',
  CurrentJobInputLabel = 'CurrentJobInputLabel',
  CurrentJobInputPlaceholder = 'CurrentJobInputPlaceholder',
  WorkExperienceSectionTitle = 'WorkExperienceSectionTitle',
  AustralianWorkExperienceSectionTitle = 'AustralianWorkExperienceSectionTitle',
  IELTSScoreSectionTitle = 'IELTSScoreSectionTitle',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
  ConfirmButtonTitle = 'ConfirmButtonTitle',
  Step0Title = 'Step0Title',
  Step0Desc = 'Step0Desc',
  Step0Button = 'Step0Button',
  Step9Title = 'Step9Title',
  Step9Desc = 'Step9Desc',
  YesText = 'YesText',
  NoText = 'NoText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Immigration Information Form',
    fa: 'فرم اطلاعات مهاجرت',
  },
  SeoDesc: {
    fa: 'فرم مهاجرت خود را پر کنید تا وکلای معتبر مهاجرت با شما به صورت رایگان در ارتباط باشند ',
    en: 'Fill out your immigration form to have reputable immigration lawyers contact you for free',
  },
  FailedToastMessage: {
    en: 'Request failed! Try again later',
    fa: 'خطا! بعدا تلاش کنید',
  },
  SuccessToastText: {
    en: 'Congrats! You Are Done',
    fa: 'تبریک! فرم کامل شد',
  },
  NameInputLabel: {
    en: 'Name:',
    fa: 'نام:',
  },
  NameInputPlaceholder: {
    en: 'Example: Simon',
    fa: 'مثال: علی',
  },
  LastNameInputLabel: {
    en: 'Last Name:',
    fa: 'نام خانوادگی:',
  },
  LastNameInputPlaceholder: {
    en: 'Example: Smith',
    fa: 'مثال: محمدی',
  },
  PhoneInputLabel: {
    en: 'Phone Number:',
    fa: 'شماره تلفن:',
  },
  PhoneInputPlaceholder: {
    en: '+98 0000 000 0000',
    fa: '0000 000 0900',
  },
  AgeSectionTitle: {
    en: 'Age:',
    fa: 'سن:',
  },
  maritalStatusSectionTitle: {
    en: 'marital Status:',
    fa: 'وضعیت تاهل:',
  },
  FieldOfStudyInputLabel: {
    en: 'Field of Study:',
    fa: 'حوزه تحصیلات:',
  },
  FieldOfStudyInputPlaceholder: {
    en: 'Math',
    fa: 'ریاضیات',
  },
  DegreeOfEducationSectionTitle: {
    en: 'Degree of education :',
    fa: 'درجه تحصیلات:',
  },
  UniSectionsSectionTitle: {
    en: 'University Section:',
    fa: 'سکشن دانشگاه:',
  },
  CurrentJobInputLabel: {
    en: 'Current Job:',
    fa: 'کار فعلی:',
  },
  CurrentJobInputPlaceholder: {
    en: 'Web Developer',
    fa: 'برنامه نویس اپلیکیشن موبایل',
  },
  WorkExperienceSectionTitle: {
    en: 'Work Experience :',
    fa: 'تجربه کار:',
  },
  AustralianWorkExperienceSectionTitle: {
    en: 'Australian work experience :',
    fa: 'تجربه کار استرالیایی:',
  },
  IELTSScoreSectionTitle: {
    en: 'IELTS Score:',
    fa: 'نمره ایلتس:',
  },
  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
  },
  ConfirmButtonTitle: {
    en: 'Send',
    fa: 'ارسال',
  },
  Step0Title: {
    en: 'Marabox evaluation form',
    fa: 'فرم ارزیابی ماراباکس ',
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
    en: 'Last Step',
    fa: 'پایان فرم',
  },
  Step9Desc: {
    en: 'Would you like us to share this information with Marabax approved immigration attorneys to contact you for a free consultation?',
    fa: 'آیا مایل هستید که این اطلاعات را در اختیار وکلای مهاجرت مورد تایید «ماراباکس» بگذاریم تا برای مشاوره رایگان با شما تماس بگیرند؟',
  },
  YesText: {
    en: 'Yes',
    fa: 'بله',
  },
  NoText: {
    en: 'No',
    fa: 'خیر',
  },
};
