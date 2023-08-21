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
  Score: {
    en: "Score:",
    fa: "امتیاز:",
    cz: '分数：'
  },
  NameLabel: {
    en: "Name:",
    fa: "نام:",
    cz: '姓名：'
  },
  DateLabel: {
    en: "Date:",
    fa: "تاریخ:",
    cz: '日期：'
  },
  LanguageSkillsLabel: {
    en: "Language Skills:",
    fa: "مهارت انگلیسی:",
    cz: '语言能力：'
  },
  AgeLabel: {
    en: "Age:",
    fa: "سن:",
    cz: '年龄：'
  },
  ViewMore: {
    en: "View More",
    fa: "مشاهده",
    cz: '查看更多'
  },
};

////////////
