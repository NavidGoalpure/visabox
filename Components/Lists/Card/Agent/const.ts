import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Email = 'Email',
  Phone = 'Phone',
  Website = 'Website',
  ViewMore = 'ViewMore',
  Mara = 'Mara',
  Agent = 'Agent',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Email: {
    en: 'Email',
    fa: 'ایمیل',
    cz: '电子邮件',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
    cz: '电话',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
    cz: '网站',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
    cz: '查看更多',
  },

  Mara: {
    fa: 'MARA',
    en: 'MARA',
    cz: 'MARA',
  },
  Agent: {
    fa: 'وکیل',
    en: 'Agent',
    cz: '代理人',
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

////////////
