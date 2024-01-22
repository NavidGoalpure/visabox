import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
}

export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
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
