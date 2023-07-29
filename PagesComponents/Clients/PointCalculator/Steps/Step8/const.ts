import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  AstralianPopupContent = 'AstralianPopupContent',
  AustralianWorkExperienceSectionTitle = 'AustralianWorkExperienceSectionTitle',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  AstralianPopupContent: {
    en: `Your answer to this question affects your immigration score,
    To get the required points regarding work experience, the applicant must have worked at least 20 hours per week.
    `,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    در 10 سال گذشته، چه مدت در شغل تخصصی انتخابی خود یا شغل نزدیک مرتبط در استرالیا کار کرده اید؟
    تنها سابقه کاری با بیش از ۲۰ ساعت در هفته مورد قبول می‌باشد.
    `,
  },
  AustralianWorkExperienceSectionTitle: {
    en: 'Australian work experience :',
    fa: 'سابقه کار شما در استرالیا طی ۱۰ سال گذشته:',
  },

  NextButtonTitle: {
    en: 'Next',
    fa: 'بعدی',
  },
  PrevButtonTitle: {
    en: 'Prev',
    fa: 'قبلی',
  },
};
