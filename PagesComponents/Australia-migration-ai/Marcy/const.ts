import { MultiLanguageText } from 'Interfaces/Database';
import { ILookupEnum } from './Interface';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Disclaimer = 'Disclaimer',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'List of social networks of immigration institutions | Mara Box',
    fa: 'لیست شبکه های اجتماعی | مارا باکس',
    zh: '移民机构社交网络一览| Mara Box',
  },
  SeoDesc: {
    fa: 'لیست شبکه های اجتماعی استرالیا همانند تلگرام و اینستاگرام و غیره',
    zh: '澳洲移民机构社交网络列表，如telegram、instagram等',
    en: 'List of social networks of Australian immigration institutions such as telegram, instagram etc',
  },
  //
  PageTitle: {
    fa: 'Marcy',
    zh: 'Marcy',
    en: 'Welcome to Marcy',
  },
  PageSubtitle: {
    fa: 'آموزش دیده برای پاسخ به سوالات مربوط به اسناد «VETASSESS»،«ACS»،«TRA» و «Migration Strategy»',
    zh: '您的澳大利亚移民AI助手',
    en: `Trained to answer questions related to "VETASSESS", "ACS", "TRA" and "Migration Strategy" documents`,
  },
  Disclaimer: {
    fa: 'Disclaimer: هر چند که هوش مصنوعی ما راهنمایی های مفیدی در زمینه ارزیابی مدارک و مهاجرت به استرالیا ارائه می‌دهد، اما در نظر داشته باشید که این پلتفرم جایگزین مهارت‌ها و مشاوره شخصی که توسط کارشناسان مهاجرتی ارائه می‌شود، نمی‌باشد.',
    zh: 'Disclaimer: 接受过回答与“VETASSESS”、“ACS”、“TRA”和“迁移策略”文件相关问题的培训',
    en: `Disclaimer: While our AI provides guidance on Australia migration, it is essential to understand that this platform does not replace the expertise and personalized advice that can be provided by immigration experts or professionals.`,
  },
};
export const LOOKUP_STORE: Record<ILookupEnum, string> = {
  lookUpKnowVetassess: 'Vetassess documents',
  loadBySimilarity: 'similarity documents',
};
////////////
