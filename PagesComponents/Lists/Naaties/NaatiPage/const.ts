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
    cz: '$naati NAATI 翻译 | Mara Box',
  },
  SeoDesc: {
    fa: 'marabox.com',
    cz: 'marabox.com',
    en: 'marabox.com',
  },
  //
  About: {
    en: 'About',
    fa: 'توضیحات',
    cz: '关于',
  },
  Contacts: {
    en: 'contacts',
    fa: 'راه های تماس',
    cz: '联系人',
  },
  MaraNumber: {
    en: 'MaraNumber',
    fa: 'شماره مارا',
    cz: '玛拉号码',
  },
  Socials: {
    en: 'Socials',
    fa: 'ارتباطات',
    cz: '社交',
  },
  copyEmailToastMessage: {
    en: 'Copied email to clipboard',
    fa: 'ایمیل در حافظه کپی شد',
    cz: '已将电子邮件复制到剪贴板',
  },
  copyPhoneToastMessage: {
    en: 'Copied Phone number to clipboard',
    fa: 'شماره تلفن در حافظه کپی شد',
    cz: '已将电话号码复制到剪贴板',
  },
};
