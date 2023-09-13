import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  copyGmailToastMessage = 'copyGmailToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'sponsership of lawyers in our site | Mara Box',
    fa: 'اسپانسر شوید | مارا باکس',
    zh: '我们网站的律师赞助| Mara Box',
  },
  SeoDesc: {
    fa: 'اسپانسر ماراباکس شدن چگونه می‌تواند به کسب و کار مهاجرتی کمک کند',
    en: 'In this page we show you the benefits of buying our vip account',
    zh: '在此页面中，我们向您展示购买 VIP 帐户的好处',
  },
  copyGmailToastMessage: {
    en: 'Copied Gmail number to clipboard',
    zh: '已将 Gmail 号码复制到剪贴板',
    fa: 'ایمیل در حافظه کپی شد',
  },
};
