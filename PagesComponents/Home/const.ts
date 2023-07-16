import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
  StampText = 'StampText'
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Mara Box | Australia immigration toolkit',
    fa: 'ماراباکس | جعبه ابزار مهاجرت به استرالیا',
  },
  SeoDesc: {
    fa: 'بررسی شرایط ویزا برای نیروی متخصص, لیست وکلای مهاجرت معتبر, شبکه های اجتماعی مناسب و امکانات جذاب دیگر برای مهاجرت به استرالیا',
    en: 'A toolbox for immigrating  via skilled worker visa. You can find any of your requirements in this box',
  },
  BannerButtonText: {
    en: 'Evaluation Form',
    fa: 'فرم ارزیابی',
  },
  BannerDesc: {
    en: `Are you ready to start your <span> immigration </span> journey? Now our form
         Fill out the immigration lawyers with you for <span> free </span> with
         You stay in touch.`,
    fa: `برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟ اکنون فرم ما
                را پر کنید تا وکلای مهاجرت با شما به صورت <span>رایگان</span> با
                شما در ارتباط باشند.`,
  },
  StampText: {
    fa: `ماشین حساب امتیازات`,
    en: `With Point Calculator`
  }
};
