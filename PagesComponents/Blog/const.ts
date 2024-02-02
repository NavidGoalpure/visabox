import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}

export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Helpful blogs and articles for immigrating to Australia | Mara Box',
    fa: 'بلاگ مهاجرت به استرالیا | مارا باکس',
    zh: '对移民澳大利亚有用的博客和文章 | 玛拉盒子',
  },
  SeoDesc: {
    fa: 'مقاله های کاربردی و کمکی برای مهاجران به استرالیا',
    en: 'Practical and helpful articles for immigrants to Australia',
    zh: '为澳大利亚移民提供实用且有帮助的文章',
  },

  PageTitle: {
    fa: 'بلاگ مهاجرت',
    en: 'Migration Blog',
    zh: '移民博客',
  },
  PageSubtitle: {
    fa: `صفحه وبلاگ های ما خوش آمدید، جایی که ما اطلاعات، نکات و اخبار مربوط به مهاجرت به استرالیا را به اشتراک می گذاریم.`,
    en: `Welcome to our blog page, where we share information, tips, and news related to migration to Australia.`,
    zh: `欢迎来到我们的博客页面，在这里我们分享与移民澳大利亚相关的信息、建议和新闻。`,
  },
};

//////
