import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  About = 'About',
  Contacts = 'Contacts',
  MaraNumber = 'MaraNumber',
  Socials = 'Socials',
  Agent = 'Agent',
  RelatedTo = 'RelatedTo',
  SocialMedia = 'SocialMedia',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: '$agent Migration Agency | $agent',
    zh: '$agent 移民代理| $agent',
    fa: 'موسسه مهاجرت $agent',
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
    fa: 'ارتباطات',
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
  Agent: {
    en: 'Agency',
    zh: '机构',
    fa: 'وکیل',
  },
  RelatedTo: {
    en: 'Related To',
    zh: '相关',
    fa: 'مرتبط با',
  },
  SocialMedia: {
    en: 'Social Media',
    zh: '社交媒体',
    fa: 'شبکه های اجتماعی',
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
