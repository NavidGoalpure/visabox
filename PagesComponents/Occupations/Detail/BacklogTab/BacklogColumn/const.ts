import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Submitted = 'Submitted',
  Invited = 'Invited',
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
  Submitted: {
    en: 'Submitted',
    fa: 'ثبت شده‌ها',
  },
  Invited: {
    en: 'Invited',
    fa: 'دعوت شده‌ها',
  },
  Title189TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزای متخصصان با سابکلاس',
  },
  Title189TitleSection2: {
    en: 'Skilled Independent',
    fa: '',
  },
  Title190TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
  },
  Title190TitleSection2: {
    en: '( State/Territory Nominated )',
    fa: '( ایالت/منطقه نامزد شده )',
  },
  Title491TitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
  },
  Title491TitleSection2: {
    en: '( State/Territory Nominated )',
    fa: '( ایالت/منطقه نامزد شده )',
  },
  Title491FamilyTitleSection1: {
    en: 'Visa Subclass',
    fa: 'ویزا سابکلاس',
  },
  Title491FamilyTitleSection2: {
    en: '( Family Sponsored )',
    fa: '( فامیلی )',
  },
  //
  NoDataMessage: {
    en: 'No EOI data',
    fa: 'دیتایی برای نمایش وجود ندارد',
  },
};
