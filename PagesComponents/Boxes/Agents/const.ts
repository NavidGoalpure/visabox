import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Find the most authentic migration agents for australia| Mara Box',
    fa: 'معتبر ترین وکلای ایرانی مهاجرت به استرالیا و نیوزلند را پیدا کنید | مارا باکس',
  },
  SeoDesc: {
    fa: 'اسامی بهترین وکلای ایرانی برای اقامت و مهاجرت به استرالیا و نیوزلند، ویزای سرمایه گذاری، مهارتی، خانواده و ازدواج، تجاری و تحصیلی',
    en: 'name and info of some of the best migration agents for migration to australia,investment visa,work visa,marriage and student visa',
  },
  //
  PageTitle: {
    fa: 'لیست وکلای مهاجرت',
    en: 'Migration Agents',
  },
  PageDesc: {
    fa: 'برای انتخاب وکیل مهاجرت مناسب، می‌توانید از این لیست کمک بگیرید. این لیست شامل اطلاعات مرتبط با کلیه وکلای ایرانی مورد تایید اداره مهاجرت استرالیا است.',
    en: `You can find MARA agents that provide immigration advice and assistance to Australia on this page.`,
  },
};

////////////
