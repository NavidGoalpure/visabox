import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
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
    fa: 'لیست شبکه های اجتماعی',
    zh: '社交网络',
    en: 'Social Networks',
  },
  PageDesc: {
    fa: 'این صفحه حاوی آدرس شبکه های اجتماعی مرتبط با امور مهاجرت به استرالیا است. در صورتی که ادمین چنین صفحاتی در شبکه های اجتماعی مختلف هستید، می‌توانید آدرس آن را جهت نمایش در این صفحه برای ما ایمیل کنید.',
    zh: '您可以在此页面上找到与移民澳大利亚相关的波斯社交网络列表。',
    en: `You can find list of Persian social networks related to immigration to Australia on this page.`,
  },
};

////////////
