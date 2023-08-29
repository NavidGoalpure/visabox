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
    zh: 'Mara Box | 澳大利亚移民工具包'
  },
  SeoDesc: {
    fa: 'بررسی شرایط ویزا برای نیروی متخصص, لیست وکلای مهاجرت معتبر, شبکه های اجتماعی مناسب و امکانات جذاب دیگر برای مهاجرت به استرالیا',
    en: 'A toolbox for immigrating  via skilled worker visa. You can find any of your requirements in this box',
    zh: '通过技术工人签证移民的工具箱。 您可以在此框中找到您的任何要求'
  },
  BannerButtonText: {
    en: 'Evaluation Form',
    fa: 'فرم ارزیابی',
    zh: '评估表'
  },
  BannerDesc: {
    en: `Are you ready to start your <span> immigration </span> journey? Now our form
         Fill out the immigration lawyers with you for <span> free </span> with
         You stay in touch.`,
    fa: `برای شروع سفر <span>مهاجرتی</span> خود آماده اید؟ اکنون فرم ما
                را پر کنید تا وکلای مهاجرت با شما به صورت <span>رایگان</span> با
                شما در ارتباط باشند.`,
    zh: `你准备好开始你的 <span> 移民 </span> 旅行？ 现在我们的表格
    与您一起填写移民律师的信息 <span> 自由的 </span> 与您保持联系。`,
  },
  StampText: {
    fa: `ماشین حساب امتیازات`,
    en: `Point Calculator`,
    zh: `积分计算器`
  }
};
