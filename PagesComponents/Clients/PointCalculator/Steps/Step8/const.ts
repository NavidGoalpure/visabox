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
    zh: `您对这个问题的回答会影响您的移民分数，
    为了获得工作经验所需的分数，申请人必须每周工作至少 20 小时。`
  },
  AustralianWorkExperienceSectionTitle: {
    en: 'Australian work experience :',
    fa: 'سابقه کار شما در استرالیا طی ۱۰ سال گذشته:',
    zh: `澳洲工作经验：`
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    zh: '下一个'
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    zh: '上一篇'
  },
};
