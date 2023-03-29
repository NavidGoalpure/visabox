import { Locations, MultiLanguageText } from 'Interfaces';

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
  },
  SeoDesc: {
    fa: 'لیست شبکه های اجتماعی استرالیا همانند تلگرام و اینستاگرام و غیره',
    en: 'List of social networks of Australian immigration institutions such as telegram, instagram etc',
  },
  //
  PageTitle: {
    fa: 'لیست شبکه های اجتماعی',
    en: 'Social Networks',
  },
  PageDesc: {
    fa: 'این صفحه حاوی آدرس شبکه های اجتماعی مرتبط با امور مهاجرت به استرالیا است. در صورتی که ادمین چنین صفحاتی در شبکه های اجتماعی مختلف هستید، می‌توانید آدرس آن را جهت نمایش در این صفحه برای ما ایمیل کنید.',
    en: `You can find list of Persian social networks related to immigration to Australia on this page.`,
  },
};

////////////
