import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Search = 'Search',
  SearchPlaceHolder = 'SearchPlaceHolder',
  LoadMore = 'LoadMore',
  //
  SomethingWentWrong = 'SomethingWentWrong',
  //
  Country = 'Country',
  State = 'State',
  //
  Select = 'Select',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'جستجوی وکلای مورد تایید مارا | مارا باکس',
    en: 'Find MARA-Registered Agents | Mara Box',
    zh: '查找 MARA 注册代理商 | Mara Box',
  },
  SeoDesc: {
    fa: 'جستجوی وکلای مورد تایید مارا برای دریافت کمک های حرفه ای در فرایند پیچیده مهاجرت به استرالیا',
    en: 'Connecting You with Certified Migration Experts, Guiding You through the Complex Australian Visa Process.',
    zh: '为您联系经过认证的移民专家，指导您完成复杂的澳大利亚签证流程。',
  },
  //
  PageTitle: {
    fa: 'جستجوی وکلای مورد تایید مارا برای رویای مهاجرت به استرالیا',
    en: 'Connecting You with Certified Migration Experts for Australia',
    zh: '为您联系澳大利亚认证移民专家',
  },
  PageSubtitle: {
    fa: 'این اطلاعات از سایت رسمی portal.mara.gov.au گرفته شده است. درصورتی که معتقدید هر بخشی از این اطلاعات نادرست است، لطفا با پشتیبانی سایت تماس بگیرید. ',
    en: 'This information is taken from the official website portal.mara.gov.au. If you believe any part of this information is incorrect, please contact the site support.',
    zh: '该信息取自官方网站portal.mara.gov.au。 如果您认为此信息的任何部分不正确，请联系站点支持。',
  },
  Search: {
    fa: 'جستجو',
    en: 'Search',
    zh: '搜索',
  },
  SearchPlaceHolder: {
    fa: 'نام وکیل',
    en: 'Agent name',
    zh: '代理名称',
  },
  LoadMore: {
    fa: 'بیشتر',
    en: 'Load More',
    zh: '装载更多',
  },
  SomethingWentWrong: {
    en: 'Something Went Wrong',
    fa: 'متاسفانه مشکلی پیش آمده',
    zh: '出了些问题',
  },
  ///////search filter//////
  Country: {
    en: 'Country',
    fa: 'کشور',
    zh: '结语',
  },
  State: {
    en: 'State',
    fa: 'ایالت (استان)',
    zh: '状态',
  },
  Select: {
    en: 'Select ...',
    fa: 'انتخاب ...',
    zh: '选择 ...',
  },
};
/////////
export const AGENTS_PER_PAGE = 12;
