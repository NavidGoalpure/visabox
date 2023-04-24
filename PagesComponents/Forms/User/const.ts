import { MultiLanguageText } from 'Interfaces';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
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
  CurrentJobInputLabel = 'CurrentJobInputLabel',
  CurrentJobInputPlaceholder = 'CurrentJobInputPlaceholder',
  WorkExperienceSectionTitle = 'WorkExperienceSectionTitle',
  AustralianWorkExperienceSectionTitle = 'AustralianWorkExperienceSectionTitle',
  IELTSScoreSectionTitle = 'IELTSScoreSectionTitle',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
  ConfirmButtonTitle = 'ConfirmButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Request a Call from Immigration Agencies | Mara Box',
    fa: 'درخواست تماس از وکلای مهاجرت | مارا باکس',
  },
  SeoDesc: {
    fa: 'اطلاعات خود را ارسال کنید و منتظر تماس وکلای مهاجرت باشید',
    en: 'Submit your information and wait for a call from immigration agencies',
  },
  NameInputLabel: {
    en: 'Name:',
    fa: 'نام:',
  },
  NameInputPlaceholder: {
    en: 'Simon',
    fa: 'علی',
  },
  LastNameInputLabel: {
    en: 'Last Name:',
    fa: 'نام خانوادگی:',
  },
  LastNameInputPlaceholder: {
    en: 'Smith',
    fa: 'محمدی',
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
  CurrentJobInputLabel: {
    en: 'Current Job:',
    fa: 'کار فعلی:',
  },
  CurrentJobInputPlaceholder: {
    en: 'Engineer',
    fa: 'مهندس',
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
};
