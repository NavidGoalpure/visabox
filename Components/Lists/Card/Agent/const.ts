import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  BusinessName = 'BusinessName',
  Country = 'Country',
  ViewMore = 'ViewMore',
  Mara = 'Mara',
  Agent = 'Agent',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  BusinessName: {
    en: 'Business Name',
    fa: 'دفتر مهاجرتی',
    zh: '公司名称',
  },
  Country: {
    en: 'Country',
    fa: 'کشور',
    zh: '国家',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
    zh: '查看更多',
  },

  Mara: {
    fa: 'MARA',
    en: 'MARA',
    zh: 'MARA',
  },
  Agent: {
    fa: 'وکیل',
    en: 'Agent',
    zh: '代理人',
  },
};

////////////
