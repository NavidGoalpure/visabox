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
    cz: '$agent 移民代理| $agent',
    fa: 'موسسه مهاجرت $agent',
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
    fa: 'ارتباطات',
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
  Agent: {
    en: 'Agency',
    cz: '机构',
    fa: 'وکیل',
  },
  RelatedTo: {
    en: 'Related To',
    cz: '相关',
    fa: 'مرتبط با',
  },
  SocialMedia: {
    en: 'Social Media',
    cz: '社交媒体',
    fa: 'شبکه های اجتماعی',
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
