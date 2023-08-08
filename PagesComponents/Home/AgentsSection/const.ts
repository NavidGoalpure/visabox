import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست وکلای مهاجرت',
    en: 'List Of Mara Agents',
    cz: '玛拉代理商名单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست وکلای معتبر مهاجرت به استرالیا که مورد تایید سازمان «MARA» هستند، از این بخش استفاده کنید.',
    en: 'Expert guidance for Australian immigration: Discover trusted MARA agents for your journey.',
    cz: '澳大利亚移民专家指导：为您的旅程寻找值得信赖的 MARA 代理。'
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    cz: '查看全部',
  },
};
