import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageDesc = 'PageDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Find the most authentic migration agencies for australia| Mara Box',
    fa: 'معتبر ترین موسسات مهاجرت ایرانی برای مهاجرت به استرالیا را پیدا کنید | مارا باکس',
  },
  SeoDesc: {
    fa: 'اسامی بهترین موسسات مهاجرت ایرانی برای اقامت و مهاجرت به استرالیا، ویزای سرمایه گذاری،کاری، خانواده و ازدواج، تجاری و تحصیلی',
    en: 'name and info of some of the best migration agencies for migration to australia,investment visa,work visa,marriage and student visa',
  },
  //
  PageTitle: {
    fa: 'موسسات مهاجرتی معتبر',
    en: 'Migration Agencies',
    cz: '移民机构',
  },
  PageDesc: {
    fa: 'برای انتخاب موسسه مهاجرتی مناسب، می‌توانید از این لیست کمک بگیرید. این لیست شامل اطلاعات مرتبط با کلیه موسسات مهاجرتی ایران است که حداقل با یک وکیل مورد تایید اداره مهاجرت استرالیا همکاری می‌کنند.',
    en: `You can use this list to choose the right immigration agency. This list contains information related to all Iranian immigration agencies that cooperate with at least one lawyer approved by the Australian Immigration Department.`,
    cz: `您可以使用此列表来选择合适的移民机构。 该列表包含与至少一名澳大利亚移民部批准的律师合作的所有伊朗移民机构的相关信息。`,
  },
};

////////////
