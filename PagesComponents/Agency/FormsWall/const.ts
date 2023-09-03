import { MultiLanguageText } from "Interfaces/Database";

export enum LanguageKeys {
  SeoTitle = "SeoTitle",
  SeoDesc = "SeoDesc",
  //
  PageTitle = "PageTitle",
  PageSubtitle = "PageSubtitle",
  LoadMore = "LoadMore",
  NeedConfirm = "NeedConfirm",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "Pending Migration Inquiries| Mara Box",
    fa: "لیست متقاضیان مهاجرت | مارا باکس",
    zh: "",
  },
  SeoDesc: {
    fa: "لیست افرادی که از طریق پلتفرم «ماراباکس» برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.",
    en: "The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.",
    zh: "表示有兴趣通过我们的平台移民到澳大利亚的个人的完整名单。 及时与他们联系，将他们变成您的下一个满意的客户。",
  },
  //
  PageTitle: {
    fa: "لیست متقاضیان مهاجرت",
    en: "Pending Migration Inquiries",
    zh: "待处理的迁移查询",
  },
  PageSubtitle: {
    fa: "لیست افرادی که از طریق پلتفرم «ماراباکس» برای مهاجرت به استرالیا ابراز علاقه کرده اند. به سرعت با آنها ارتباط برقرار کنید تا آنها را به مشتریان راضی بعدی خود تبدیل کنید.",
    en: "The comprehensive list of individuals who have expressed interest in migrating to Australia through our platform. Connect with them promptly to turn them into your next satisfied clients.",
    zh: "表示有兴趣通过我们的平台移民到澳大利亚的个人的完整名单。 及时与他们联系，将他们变成您的下一个满意的客户。",
  },
  LoadMore: {
    fa: "بیشتر",
    en: "Load More",
    zh: "装载更多",
  },
  NeedConfirm: {
    en: "Your account has not been verified yet. To verify the account, please contact the site support",
    fa: "حساب شما هنوز تایید نشده است. برای تایید اکانت لطفابا پشتیبانی سایت تماس بگیرید",
    zh: "您的帐户尚未经过验证。 要验证帐户，请联系网站支持",
  },
};
