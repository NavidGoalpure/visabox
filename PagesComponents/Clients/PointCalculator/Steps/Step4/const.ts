import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  maritalStatusTitle = 'maritalStatusTitle',
  PartnerEnglishTitle = 'PartnerEnglishTitle',
  DoesPartnerHaveAssessmentTitle = 'DoesPartnerHaveAssessmentTitle',
  DoesPartnerHaveAssessmentPopup = 'DoesPartnerHaveAssessmentPopup',
  NextButtonTitle = 'NextButtonTitle',
  PrevButtonTitle = 'PrevButtonTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  maritalStatusTitle: {
    en: 'Marital Status:',
    fa: 'وضعیت تاهل:',
    zh: '婚姻状况：'
  },
  DoesPartnerHaveAssessmentTitle: {
    en: 'Does your partner has an assessment of documents?',
    fa: 'آیا همسر شما اسسمنت مدارک دارد؟',
    zh: '您的合作伙伴对文件进行评估吗？'
  },
  DoesPartnerHaveAssessmentPopup: {
    en: "If you don't know what this means just select No",
    fa: 'اگر در این زمینه اطلاعات ندارید این گزینه را خالی بگذارید',
    zh: '如果您不知道这意味着什么，请选择否'
  },
  PartnerEnglishTitle: {
    en: 'Can your partner obtain IELTS 6 or above?',
    fa: 'آیا همسر شما می تواند حداقل آیلتس 6 یا معادل آن را دریافت کند؟',
    zh: '你的伴侣能考到雅思6分或以上吗？'
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
