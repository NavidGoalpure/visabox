import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    fa: 'لیست شبکه‌های اجتماعی',
    en: 'List Of Social Networks',
    cz: '社交网络列表'
  },
  Subtitle: {
    fa: 'برای مشاهده لیست شبکه های اجتماعی مهاجرت به استرالیا از این بخش استفاده کنید. این گروه‌ها و پیج ها اطلاعات مناسب مهاجرت را در اختیار شما می‌گذارند و مکان مناسبی برای پرسیدن سوالات شما هستند.',
    en: 'Use this section to view the list of social networks for immigration to Australia. These groups and pages provide you with relevant immigration information and are a good place to ask your questions.',
    cz: '使用此部分查看用于移民澳大利亚的社交网络列表。 这些群组和页面为您提供相关移民信息，是提问的好地方。'
  },
  CTA: {
    fa: 'مشاهده همه ',
    en: 'View All',
    cz: '查看全部'
  },
};
