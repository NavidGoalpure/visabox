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
    zh: '分数：'
  },
  NameLabel: {
    en: "Name:",
    fa: "نام:",
    zh: '姓名：'
  },
  DateLabel: {
    en: "Date:",
    fa: "تاریخ:",
    zh: '日期：'
  },
  LanguageSkillsLabel: {
    en: "Language Skills:",
    fa: "مهارت انگلیسی:",
    zh: '语言能力：'
  },
  AgeLabel: {
    en: "Age:",
    fa: "سن:",
    zh: '年龄：'
  },
  ViewMore: {
    en: "View More",
    fa: "مشاهده",
    zh: '查看更多'
  },
};

////////////
