import { MultiLanguageText } from 'Interfaces/Database';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست وکلای مهاجرت',
    en: 'List Of Mara Agents',
    zh: '玛拉代理商名单',
  },
  Subtitle: {
    fa: 'برای مشاهده لیست وکلای معتبر مهاجرت به استرالیا که مورد تایید سازمان «MARA» هستند، از این بخش استفاده کنید.',
    en: 'Expert guidance for Australian immigration: Discover trusted MARA agents for your journey.',
    zh: '澳大利亚移民专家指导：为您的旅程寻找值得信赖的 MARA 代理。',
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    zh: '查看全部',
  },
};
/////////////////
export const ExampleAgent: MaraAgent = {
  _id: 'a95d12a2-8ab0-4568-92c2-b08e4fd0aabb',
  slug: {
    current: 'majid-panahandeh-fard',
    _type: 'slug',
  },
  name: {
    en: 'Majid Panahandeh Fard',
    zh: 'Majid Panahandeh Fard',
    fa: 'دکتر مجید پناهنده فرد',
  },
  mara_number: '2418637',
  agencies: [
    {
      mara_number_ref: '2418637',
      state: 'Vic',
      title: {
        en: 'Sleek Migration',
        fa: 'اسلیک میگریشن',
        zh: 'Sleek Migration',
      },
      country: 'Australia',
      city: 'victoria',
      contact: {
        phone: '0431970959',
        full_address:
          '	36 Wordsworth Street Unit 2703 Moonee Ponds VIC 3039 Australia',
        email: 'info@sleekmigration.com',
      },
    },
  ],
};
