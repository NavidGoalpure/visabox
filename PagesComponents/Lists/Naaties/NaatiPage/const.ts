import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  About = 'About',
  Contacts = 'Contacts',
  MaraNumber = 'MaraNumber',
  Socials = 'Socials',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: '$naati NATTI Translator | Mara Box',
    fa: '$naati مترجم ناتی | ماراباکس',
    zh: '$naati NAATI 翻译 | Mara Box',
  },
  SeoDesc: {
    fa: 'marabox.com',
    zh: 'marabox.com',
    en: 'marabox.com',
  },
  //
  About: {
    en: 'About',
    fa: 'توضیحات',
    zh: '关于',
  },
  Contacts: {
    en: 'contacts',
    fa: 'راه های تماس',
    zh: '联系人',
  },
  MaraNumber: {
    en: 'MaraNumber',
    fa: 'شماره مارا',
    zh: '玛拉号码',
  },
  Socials: {
    en: 'Socials',
    fa: 'ارتباطات',
    zh: '社交',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
    zh: '已将电子邮件复制到剪贴板',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
    zh: '已将电话号码复制到剪贴板',
  },
};
