import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Email = 'Email',
  Phone = 'Phone',
  Website = 'Website',
  ViewMore = 'ViewMore',
  Mara = 'Mara',
  Agent = 'Agent',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Email: {
    en: 'Email',
    fa: 'ایمیل',
  },
  Phone: {
    en: 'Phone',
    fa: 'تلفن',
  },
  Website: {
    en: 'Website',
    fa: 'وبسایت',
  },
  ViewMore: {
    en: 'View More',
    fa: 'نمایش کامل',
  },

  Mara: {
    fa: 'MARA',
    en: 'MARA',
  },
  Agent: {
    fa: 'وکیل',
    en: 'Agent',
  },
};

////////////
