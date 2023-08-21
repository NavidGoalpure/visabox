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
    cz: '$agent 移民代理 | Mara Box',
    fa: '$agent وکیل مهاجرت | ماراباکس',
  },
  SeoDesc: {
    fa: 'marabox.com',
    en: 'marabox.com',
    cz: 'marabox.com',
  },
  //
  About: {
    en: 'About',
    cz: '关于',
    fa: 'توضیحات',
  },
  Contacts: {
    en: 'contacts',
    cz: '联系人',
    fa: 'راه های تماس',
  },
  MaraNumber: {
    en: 'MaraNumber',
    cz: '玛拉号码',
    fa: 'شماره مارا',
  },
  Socials: {
    en: 'Socials',
    cz: '社交',
    fa: 'ارتباطات',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    cz: '已将电子邮件复制到剪贴板',
    fa: 'ایمیل در حافظه کپی شد',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    cz: '已将电话号码复制到剪贴板',
    fa: 'شماره تلفن در حافظه کپی شد',
  },
};
