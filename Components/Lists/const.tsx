import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Email = 'Email',
  Phone = 'Phone',
  Website = 'Website',
  ViewMore = 'ViewMore',
  NAATI = 'NAATI',
  Translator = 'Translator',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
  Agency = 'Agency',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Email: {
    en: 'Email',
    fa: 'ایمیل',
    zh: '电子邮件',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
    zh: '电话',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
    zh: '网站',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
    zh: '查看更多',
  },
  NAATI: {
    en: 'NAATI',
    fa: 'NATTI',
    zh: 'NATTI',
  },
  Translator: {
    en: 'Translator',
    fa: 'مترجم',
    zh: '翻译',
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
  Agency: {
    fa: 'موسسه',
    en: 'Agency',
    zh: '机构',
  },
};

////////////
