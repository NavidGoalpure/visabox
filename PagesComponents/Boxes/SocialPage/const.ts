import { Locations, MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
  Join = 'Join',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: "List of social networks of immigration institutions | Mara Box",
    fa: "لیست شبکه های اجتماعی موسسه های مهاجرتی | مارا باکس",
  },
  SeoDesc: {
    fa: "لیست شبکه های اجتماعی موسسه های مهاجرتی استرالیا همانند تلگرام و اینستاگرام و غیره",
    en: "List of social networks of Australian immigration institutions such as telegram, instagram etc",
  },
  //
  PageTitle: {
    fa: "لیست شبکه های اجتماعی موسسه های مهاجرتی",
    en: "List of social networks of immigration institutions",
  },
  PageDesc: {
    fa: 'این صفحه برای افرادی است که خواهان آدرس درگاه های مجازی موسسه های مهاجرتی هستند',
    en: `This page is for people who want the addresses of virtual portals of immigration institutions`,
  },
  Join: {
    fa: "عضویت",
    en: "Join",
  },
};

////////////