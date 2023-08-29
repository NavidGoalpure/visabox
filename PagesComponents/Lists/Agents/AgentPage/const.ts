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
    en: '$agent Migration Agent | Mara Box',
    zh: '$agent 移民代理 | Mara Box',
    fa: '$agent وکیل مهاجرت | ماراباکس',
  },
  SeoDesc: {
    fa: 'marabox.com',
    en: 'marabox.com',
    zh: 'marabox.com',
  },
  //
  About: {
    en: 'About',
    zh: '关于',
    fa: 'توضیحات',
  },
  Contacts: {
    en: 'contacts',
    zh: '联系人',
    fa: 'راه های تماس',
  },
  MaraNumber: {
    en: 'MaraNumber',
    zh: '玛拉号码',
    fa: 'شماره مارا',
  },
  Socials: {
    en: 'Socials',
    zh: '社交',
    fa: 'ارتباطات',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    zh: '已将电子邮件复制到剪贴板',
    fa: 'ایمیل در حافظه کپی شد',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    zh: '已将电话号码复制到剪贴板',
    fa: 'شماره تلفن در حافظه کپی شد',
  },
};
