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
  },
  ProfessionalYearInAustralia: {
    en: "Professional Year in Australia:",
    fa: "داشتن یک سال سابقه کار حرفه ای در استرالیا در رشته ی مرتبط",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
  },
};
