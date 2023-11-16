import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';
import { Slug } from 'Interfaces/Database/Fields';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست وکلای مهاجرت',
    en: 'List Of Mara Agents',
    zh: 'NAATI 翻译人员名单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست وکلای معتبر مهاجرت به استرالیا که مورد تایید سازمان «MARA» هستند، از این بخش استفاده کنید.',
    en: 'Expert guidance for Australian immigration: Discover trusted MARA agents for your journey.',
    zh: '要查看 NAATI 批准的译员列表，请使用此部分。 这些译员翻译的文件得到了所有澳大利亚政府和非政府组织的认可。',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    zh: '查看全部',
  },
};
