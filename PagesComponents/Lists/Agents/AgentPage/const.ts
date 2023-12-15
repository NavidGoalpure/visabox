import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageSubtitle = 'PageSubtitle',
  About = 'About',
  Contacts = 'Contacts',
  MaraNumber = 'MaraNumber',
  Socials = 'Socials',
  NoAgent = 'NoAgent',
  NoAgentSub = 'NoAgentSub',
  MaraPageButton = 'MaraPageButton',
  copyEmailToastMessage = 'copyEmailToastMessage',
  copyPhoneToastMessage = 'copyPhoneToastMessage',
  AgencyTitle = 'AgencyTitle',
  Name = 'Name',
  Address = 'Address',
  Phone = 'Phone',
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

  PageSubtitle: {
    fa: 'این اطلاعات از سایت رسمی portal.mara.gov.au گرفته شده است. درصورتی که معتقدید هر بخشی از این اطلاعات نادرست است، لطفا با پشتیبانی سایت تماس بگیرید. ',
    en: 'This information is taken from the official website portal.mara.gov.au. If you believe any part of this information is incorrect, please contact the site support.',
    zh: '该信息取自官方网站portal.mara.gov.au。 如果您认为此信息的任何部分不正确，请联系站点支持。',
  },
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
  NoAgent: {
    en: 'No Agent',
    fa: 'وکیلی پیدا نشد',
    zh: '无代理',
  },
  NoAgentSub: {
    en: `Sorry, we couldn't find the page you're looking for. Please check the URL you entered or try searching for what you need. If you believe this is an issue on our end, please contact with admin@marabox.com.au`,
    fa: 'متاسفانه، صفحه مورد نظر شما پیدا نشد. لطفاً URL وارد شده را بررسی کنید. اگر فکر می کنید که این یک مشکل در طرف ما است، لطفاً با admin@marabox.com.au تماس بگیرید',
    zh: '抱歉，我们找不到您要查找的页面。 请检查您输入的 URL 或尝试搜索您需要的内容。 如果您认为这是我们的问题，请联系 admin@marabox.com.au',
  },
  MaraPageButton: {
    en: 'Profile in portal.mara.gov.au',
    zh: 'Portal.mara.gov.au 中的个人资料',
    fa: 'پروفایل در سایت رسمی وکلای مارا',
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
  AgencyTitle: {
    en: 'Office',
    fa: 'دفتر',
    zh: '办公室',
  },
  Name: {
    en: 'Name',
    fa: 'نام',
    zh: '姓名',
  },
  Address: {
    en: 'Address',
    fa: 'آدرس',
    zh: '地址',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
    zh: '电话',
  },
};
