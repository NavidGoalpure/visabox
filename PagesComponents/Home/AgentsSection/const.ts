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
  _id: '58e26e02-a352-e311-9402-005056ab0eca',
  slug: {
    current: 'mohammad-azimi',
    _type: 'slug',
  },
  name: {
    en: 'Mohammad Azimi',
    zh: 'Mohammad Azimi',
    fa: 'محمد عظیمی',
  },
  mara_number: '0958292',
  agencies: [
    {
      mara_number_ref: '0958292',
      state: 'NSW',
      title: {
        en: 'Shada Migration and Education Services',
        fa: 'موسسه شادا',
        zh: 'Shada Migration and Education Services',
      },
      country: 'Australia',
      city: 'PARRAMATTA',
      contact: {
        phone: '61290025511',
        full_address:
          'Suite 70 Civic Arcade\n48-50 George Street\nPARRAMATTA NSW 2150\nAustralia',
        email: 'azimi@shada.com.au',
      },
    },
    {
      city: 'Shariati',
      contact: {
        phone: '00982191009946',
        full_address:
          'Unit B6, 6th Floor, No 1643, Safiran Business Complex, Next to the British Embassy Garden, Shariati Street, Shariati, Tehran, Iran, Islamic Republic of',
      },
      mara_number_ref: '0958292',
      state: 'Tehran',
      title: {
        en: 'Shada Migration and International Recruitment Agency',
        fa: 'موسسه شادا',
        zh: 'Shada Migration and Education Services',
      },
      country: 'Iran, Islamic Republic of',
    },
  ],
};
