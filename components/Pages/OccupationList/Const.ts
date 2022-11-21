import { MultiLanguageText } from 'pages/interfaces';

export enum PageKeys {
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
}
export const componrntStatements: Record<PageKeys, MultiLanguageText> = {
  PageTitle: {
    ir: 'لیست مشاغل',
    en: 'Skill Occupation List',
  },
  PageSubtitle: {
    ir: 'در این قسمت لیست کامل مشاغل واجد شرایط یا لیست ترکیبی مطابق با دستورالعمل قانونگذاری {{تگ}}آمده است.',
    en: 'Below is the complete list of eligible skilled occupations or combined list as prescribed in Legislative Instrument {{tag}}',
  },
};
