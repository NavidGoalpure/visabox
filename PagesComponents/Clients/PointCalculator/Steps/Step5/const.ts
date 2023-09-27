import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  /////////////popupSection////////////////////
  DegreePopupContent = "DegreePopupContent",
  AustralianEducationalQualificationPopupContent = "AustralianEducationalQualificationPopupContent",
  DesignatedRegionalAreaStudyPopupContent = "DesignatedRegionalAreaStudyPopupContent",
  SpecialistEducationalQualificationPopupContent = "SpecialistEducationalQualificationPopupContent",
  ProfessionalYearInAustraliaPopupContent = "ProfessionalYearInAustraliaPopupContent",
  AccreditedCommunityLanguagePopupContent = "AccreditedCommunityLanguagePopupContent",
  //////////////////////////////////////
  FieldOfStudyInputLabel = "FieldOfStudyInputLabel",
  FieldOfStudyInputPlaceholder = "FieldOfStudyInputPlaceholder",
  DegreeOfEducationSectionTitle = "DegreeOfEducationSectionTitle",
  UniSectionsSectionTitle = "UniSectionsSectionTitle",
  AustralianEducationalQualificationTitle = "AustralianEducationalQualificationTitle",
  DesignatedRegionalAreaStudy = "DesignatedRegionalAreaStudy",
  SpecialistEducationalQualification = "SpecialistEducationalQualification",
  ProfessionalYearInAustralia = "ProfessionalYearInAustralia",
  AccreditedCommunityLanguage = "AccreditedCommunityLanguage",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
  // universitySearchInput titles
  UniInput_SectionTitle = "UniInput_SectionTitle",
  UniInput_Placeholder = "UniInput_Placeholder",
  UniInput_HintText = "UniInput_HintText",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  DegreePopupContent: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
    zh: "您对这个问题的回答会影响您的移民分数",
  },
  AustralianEducationalQualificationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
Degree, diploma, advanced diploma or trade qualification from an Australian educational institution which took at least 2 years of full-time study and was taught in English.`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
    zh: `您对这个问题的回答会影响您的移民分数，
    
    澳大利亚教育机构颁发的学位、文凭、高级文凭或行业资格，经过至少 2 年的全日制学习，并以英语授课。`,
  },
  DesignatedRegionalAreaStudyPopupContent: {
    en: `Your answer to this question affects your immigration score,

Did you live and study in a ‘designated regional area’ of Australia and complete a course which meets the ‘Australian study requirement’ at the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
    zh: `您对这个问题的回答会影响您的移民分数，

    您是否在澳大利亚“指定偏远地区”生活和学习，并在收到申请签证邀请时完成了符合“澳大利亚学习要求”的课程？`,
  },
  SpecialistEducationalQualificationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.`,
    zh: `您对这个问题的回答会影响您的移民分数，
    
    澳大利亚教育机构颁发的研究型硕士学位或博士学位，其中至少包括相关领域（自然科学和物理科学、信息技术或工程及相关技术）的两个学年。`,
  },
  ProfessionalYearInAustraliaPopupContent: {
    en: `Your answer to this question affects your immigration score,
    
Did you complete a professional year program in Australia in your nominated skilled occupation for at least 12 months in the 48 months immediately before the time of invitation to apply for the visa?`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    
    آیا یک برنامه سال حرفه ای را در استرالیا در شغل ماهر معرفی شده خود به مدت حداقل 12 ماه در 48 ماه بلافاصله قبل از زمان دعوت برای درخواست ویزا تکمیل کرده اید؟`,
    zh: `您对这个问题的回答会影响您的移民分数，
    
    在收到申请签证邀请之前的 48 个月内，您是否在澳大利亚完成了至少 12 个月的指定技术职业专业年课程？`,
  },
  AccreditedCommunityLanguagePopupContent: {
    en: `Your answer to this question affects your immigration score,
`,
    fa: `جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است.
    `,
    zh: `您对这个问题的回答会影响您的移民分数`,
  },
  FieldOfStudyInputLabel: {
    en: "Field of Study:",
    fa: "رشته تحصیلی:",
    zh: "研究领域：",
  },
  FieldOfStudyInputPlaceholder: {
    en: "Example: Math",
    fa: "مثال: ریاضیات",
    zh: "示例：数学",
  },
  DegreeOfEducationSectionTitle: {
    en: "Degree of education :",
    fa: "آخرین مدرک تحصیلی و دانشگاهی:",
    zh: "教育程度：",
  },
  UniSectionsSectionTitle: {
    en: "University Section:",
    fa: "سکشن دانشگاه:",
    zh: "大学部分：",
  },
  AustralianEducationalQualificationTitle: {
    en: "Australian Educational Qualification:",
    fa: "دارای حداقل دو سال تحصیل تمام وقت در استرالیا میباشم:",
    zh: "澳大利亚教育资格：",
  },
  DesignatedRegionalAreaStudy: {
    en: "Designated regional area study:",
    fa: "تحصیل در مناطق کم جمعیت استرالیا به مدت حداقل دو سال:",
    zh: "指定区域研究：",
  },
  SpecialistEducationalQualification: {
    en: "Specialist Educational Qualification:",
    fa: "تحصیل در رشته های خاص تخصصی در مقاطع فوق لیسانس (تحقیقی) یا دکترا حداقل بمدت دو سال:",
    zh: "专业教育资格：",
  },
  ProfessionalYearInAustralia: {
    en: "Professional Year in Australia:",
    fa: "یک سال حرفه ای در استرالیا بعد از تحصیلات خود و مرتبط به رشته خود گذرانده ام:",
    zh: "澳大利亚职业年：",
  },
  AccreditedCommunityLanguage: {
    en: "Accredited Community Language:",
    fa: "گواهی نامه زبان ناتی:",
    zh: "认可的社区语言：",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    zh: "下一个",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    zh: "上一篇",
  },
  UniInput_SectionTitle: {
    en: "section",
    fa: "سکشن",
    zh: '部分'
  },
  UniInput_Placeholder: {
    en: "Search",
    fa: "جستجو",
    zh: "搜索"
  },
  UniInput_HintText: {
    en: "You can search your university section by writing the name of your university",
    fa: `با وارد نمودن نام هر دانشگاه، می‌توانید ببینید در چه دسته بندی
                (سکشن) ای قرار دارد`,
  },
};
