import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Title189TitleSection1 = 'Title189TitleSection1',
  Title189TitleSection2 = 'Title189TitleSection2',
  Title190TitleSection1 = 'Title190TitleSection1',
  Title190TitleSection2 = 'Title190TitleSection2',
  Title491TitleSection1 = 'Title491TitleSection1',
  Title491TitleSection2 = 'Title491TitleSection2',
  Title491FamilyTitleSection1 = 'Title491FamilyTitleSection1',
  Title491FamilyTitleSection2 = 'Title491FamilyTitleSection2',
  //
  NoDataMessage = 'NoDataMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title189TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزای متخصصان با سابکلاس',
    cz: '签证子类别'
  },
  Title189TitleSection2: {
    en: 'Skilled Independent',
    fa: '',
    cz: '熟练的独立'
  },
  Title190TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
    cz: '签证子类别'
  },
  Title190TitleSection2: {
    en: '( State/Territory Nominated )',
    fa: '( ایالت/منطقه نامزد شده )',
    cz: '（州/地区提名）'
  },
  Title491TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
    cz: '签证子类别'
  },
  Title491TitleSection2: {
    en: '( State/Territory Nominated )',
    fa: '( ایالت/منطقه نامزد شده )',
    cz: '（州/地区提名）'
  },
  Title491FamilyTitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
    cz: '签证子类别'
  },
  Title491FamilyTitleSection2: {
    en: '( Family Sponsored )',
    fa: '( فامیلی )',
    cz: '（家庭赞助）'
  },
  //
  NoDataMessage: {
    en: 'No EOI data',
    fa: 'دیتایی برای نمایش وجود ندارد',
    cz: '没有意向书 (EOI) 数据'
  },
};
