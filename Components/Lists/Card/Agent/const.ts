import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BusinessName = 'BusinessName',
  Phone = 'Phone',
  Website = 'Website',
  ViewMore = 'ViewMore',
  Mara = 'Mara',
  Agent = 'Agent',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BusinessName: {
    en: 'Business Name',
    fa: 'دفتر مهاجرتی',
    zh: '公司名称',
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

  Mara: {
    fa: 'MARA',
    en: 'MARA',
    zh: 'MARA',
  },
  Agent: {
    fa: 'وکیل',
    en: 'Agent',
    zh: '代理人',
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

////////////
