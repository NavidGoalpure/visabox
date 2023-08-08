import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست موسسات مهاجرتی',
    en: 'List Of Immigration Agencies',
    cz: '移民机构名单',
  },
  Subtitle: {
    fa: 'فرایند مهاجرت خود را بیمه کنید. برای مشاهده لیست موسسات مهاجرتی معتبر از این بخش استفاده کنید.',
    en: 'Discover trusted immigration agencies for your Australian journey: Expert guidance and application services available here.',
    cz: '为您的澳大利亚之旅寻找值得信赖的移民机构：此处提供专家指导和申请服务。',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    cz: '查看全部',
  },
};
