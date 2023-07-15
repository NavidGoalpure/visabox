import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  maritalStatusPopupContent = "maritalStatusPopupContent",
  maritalSituationPopupContent = "maritalSituationPopupContent",
  maritalStatusSectionTitle = "maritalStatusSectionTitle",
  maritalSituationTitle = "maritalSituationTitle",
  situation1_FirstLine = "situation1_FirstLine",
  situation1_SecondLine = "situation1_SecondLine",
  situation1_ThirdLine = "situation1_ThirdLine",
  situation1_ForthLine = "situation1_ForthLine",
  situation2 = "situation2",
  situation3_FirstLine = "situation3_FirstLine",
  situation3_SecondLine = "situation3_SecondLine",
  situation3_ThirdLine = "situation3_ThirdLine",
  situation4 = "situation4",
  situation5 = "situation5",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  maritalStatusPopupContent: {
    en: "Your answer to this question affects your immigration score",
    fa: "جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است",
  },
  maritalSituationPopupContent: {
    en: `Your answer to this question affects your immigration score,
    The description of each item is displayed after selecting them
    `,
    fa: `.جواب شما در این سوال بر روی نمره مهاجرتی شما تاثیر گذار است
    
    توضیحات هر کدام از موارد پس از انتخاب آنها نمایش داده میشود`,
  },
  maritalStatusSectionTitle: {
    en: "marital Status:",
    fa: "وضعیت تاهل:",
  },
  maritalSituationTitle: {
    en: "Which one describes your marital situation?",
    fa: "کدام یک وضعیت تاهل شما را توصیف می کند؟",
  },
  situation1_FirstLine: {
    en: "My partner is aged under 45, and",
    fa: "شریک زندگی من زیر 45 سال سن دارد و",
  },
  situation1_SecondLine: {
    en: "My partner has Competent English, and",
    fa: "شریک من دارای زبان انگلیسی خوب(Ielts6) است و",
  },
  situation1_ThirdLine: {
    en: "My partner is an applicant of the same subclass of visa as me, and",
    fa: "متقاضی همان زیر کلاس ویزا با من است و",
  },
  situation1_ForthLine: {
    en: " My partner nominated a suitable skilled occupation and obtained a positive skills assessment (that is not for a Subclass 485 visa)",
    fa: "شریک من یک شغل ماهر مناسب را معرفی کرد و یک ارزیابی مهارت مثبت به دست آورد (که برای ویزای زیر کلاس 485 نیست)",
  },
  situation2: {
    en: "I don’t have a spouse or de facto partner",
    fa: "من همسر یا شریک ندارم",
  },
  situation3_FirstLine: {
    en: "My partner has Competent English, and",
    fa: "شریک من دارای زبان انگلیسی خوب است و",
  },
  situation3_SecondLine: {
    en: "My partner is an applicant of the same subclass of visa as me, and",
    fa: "شریک من متقاضی همان زیر کلاس ویزا با من است و",
  },
  situation3_ThirdLine: {
    en: "My partner is not an Australian permanent resident or an Australian citizen",
    fa: "شریک زندگی من مقیم دائم استرالیا یا شهروند استرالیا نیست",
  },
  situation4: {
    en: "My partner is an Australian permanent resident or an Australian citizen",
    fa: "شریک زندگی من مقیم دائم استرالیا یا شهروند استرالیا است",
  },
  situation5: {
    en: "None of the other",
    fa: "هیچ کدام از موارد",
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
