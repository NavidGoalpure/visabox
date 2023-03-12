import { Locations, MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  Join = 'Join',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Skills Assessment And Assessing Authorities | Mara Box',
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا | مارا باکس',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل موسسات ارزیابی مدارک و مهارت های استرالیا به همراه آدرس و اطلاعات تماس',
    en: 'See the full skills assessment and assessing authorities List & find their address, email, website and etc.',
  },
  //
  PageTitle: {
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا',
    en: 'Assessing authorities',
  },
  Join: {
    fa: 'عضویت',
    en: 'Join',
  },
};

////////////
