import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  ProfessionalYearInAustraliaPopupContent = 'ProfessionalYearInAustraliaPopupContent',
  ProfessionalYearInAustralia = 'ProfessionalYearInAustralia',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ProfessionalYearInAustraliaPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
    Did you complete a professional year program in Australia in your nominated skilled occupation for at least 12 months in the 48 months immediately before the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
   سابقه کار شما در 48 ماه پیش از اخذ دعوت نامه و درخواست ویزا باشد.
   لازم است سابقه حرفه ای شما مرتبط با رشته ای باشد که در آن اسسمنت اخذ نموده اید.`,
    cz: `您对这个问题的回答会影响您的移民分数，
    
   在收到申请签证邀请之前的 48 个月内，您是否在澳大利亚完成了至少 12 个月的指定技术职业专业年课程？`
  },
  ProfessionalYearInAustralia: {
    en: "Professional Year in Australia:",
    fa: "داشتن یک سال سابقه کار حرفه ای در استرالیا در رشته ی مرتبط",
    cz: '澳大利亚职业年：'
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    cz: '下一个'
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    cz: '上一篇'
  },
};
