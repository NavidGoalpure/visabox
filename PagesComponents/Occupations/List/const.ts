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
  //search filter
  MajorGroup = 'MajorGroup',
  SubMajorGroup = 'SubMajorGroup',
  MinorGroup = 'MinorGroup',
  Select = 'Select',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'لیست مشاغل | مارا باکس',
    en: 'Skill Occupation List | Mara Box',
    zh: '技能职业列表| Mara Box'
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل ماهر را ببینید و بدانید که آیا شغل شما واجد شرایط درخواست ویزای کار یا مهارت استرالیا است یا خیر | برای اطلاعات بیشتر می‌توانید با ما تماس بگیرید',
    en: 'See the full Skilled Occupations List & find out whether your occupation is eligible to apply for an Australian Skilled or Work Visa | Contact us for more info',
    zh: '查看完整的技术职业列表并了解您的职业是否有资格申请澳大利亚技术或工作签证 | 联系我们了解更多信息'
  },
  //
  PageTitle: {
    fa: 'لیست مشاغل',
    en: 'Skill Occupation List',
    zh: '技能职业列表',
  },
  PageSubtitle: {
    fa: 'در این قسمت لیست کامل مشاغل واجد شرایط یا لیست ترکیبی مطابق با دستورالعمل قانونگذاری {{تگ}} آمده است.',
    en: 'Below is the complete list of eligible skilled occupations or combined list as prescribed in Legislative Instrument {{tag}}',
    zh: '以下是立法文书{{tag}}中规定的合格技术职业的完整列表或组合列表',
  },
  Search: {
    fa: 'جستجو',
    en: 'Search',
    zh: '搜索',
  },
  SearchPlaceHolder: {
    fa: 'کد یا نام شغل',
    en: 'Job code or Job title',
    zh: '职位代码或职位名称',
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
  MajorGroup: {
    en: 'Major Group',
    fa: 'گروه اصلی',
    zh: '主要群体',
  },
  SubMajorGroup: {
    en: 'Sub-Major Group',
    fa: 'زیر گروه اصلی',
    zh: '子专业组',
  },
  MinorGroup: {
    en: 'Minor Group',
    fa: 'گروه فرعی',
    zh: '小组',
  },
  Select: {
    en: 'Select ...',
    fa: 'انتخاب ...',
    zh: '选择 ...',
  },
};
/////////
export const FILTERD_Codes__HIGHEST_NUMBER__DEFAULT = 999999;
export const OCCUPATION_PER_PAGE = 9;
