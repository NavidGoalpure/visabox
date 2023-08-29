import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  OverseasPopupContent = "OverseasPopupContent",
  WorkExperienceSectionTitle = "WorkExperienceSectionTitle",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  OverseasPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    In the last 10 years, how long have you worked in your nominated skilled occupation or closely related occupation outside Australia?
    To get the required points regarding work experience, the applicant must have worked at least 20 hours per week.
    `,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    در 10 سال گذشته، چه مدت در شغل تخصصی انتخابی خود یا شغل نزدیک به آن در خارج از استرالیا کار کرده اید؟
    تنها سابقه کاری با بیش از ۲۰ ساعت در هفته مورد قبول می‌باشد.
    `,
    zh: `您对这个问题的回答会影响您的移民分数，
    
    在过去 10 年中，您在澳大利亚境外从事指定技术职业或密切相关职业工作了多长时间？
    为了获得工作经验所需的分数，申请人必须每周工作至少 20 小时。`
  },
  WorkExperienceSectionTitle: {
    en: "Overseas Work Experience:",
    fa: "سابقه کار خارج از استرالیا شما طی ۱۰ سال گذشته:",
    zh: "海外工作经验："
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
