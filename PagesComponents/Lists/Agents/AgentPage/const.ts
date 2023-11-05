import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  About = 'About',
  Contacts = 'Contacts',
  MaraNumber = 'MaraNumber',
  Socials = 'Socials',
  MaraPageButton = 'MaraPageButton',
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
    en: 'Business name: $businessName | Mara Number: $maraNumber  | Mara Box',
    fa: 'دفتر وکالت: $businessName | شماره مارا: $maraNumber  | Mara Box',
    zh: '企业名称: $businessName | 马拉数: $maraNumber  | Mara Box',
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
  MaraPageButton: {
    en: 'Mara Profile',
    zh: '玛拉简介',
    fa: 'پروفایل مارا',
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
