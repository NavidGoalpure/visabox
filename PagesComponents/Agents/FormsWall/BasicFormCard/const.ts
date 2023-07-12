import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Score = "Score",
  NameLabel = "NameLabel",
  DateLabel = "DateLabel",
  LanguageSkillsLabel = "LanguageSkillsLabel",
  AgeLabel = "AgeLabel",
  ViewMore = "ViewMore",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Score:{
    en:"Score:",
    fa:"امتیاز:"
  },
  NameLabel: {
    en: 'Name:',
    fa: 'نام:',
  },
  DateLabel: {
    en: 'Date:',
    fa: 'تاریخ:',
  },
  LanguageSkillsLabel: {
    en: 'Language Skills:',
    fa: 'مهارت انگلیسی:',
  },
  AgeLabel: {
    en: 'Birth Date:',
    fa: 'تاریخ تولد:',
  },
  ViewMore: {
    en: 'View More',
    fa: 'مشاهده',
  },
};

////////////
