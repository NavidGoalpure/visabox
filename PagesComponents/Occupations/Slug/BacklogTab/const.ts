import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  TabTitle = 'TabTitle',
  Title189 = 'Title189',
  Title190 = 'Title190',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  TabTitle: {
    en: 'Backlog & Invitations issued',
    fa: 'صف انتظار و دعوت نامه های صادر شده',
  },
  Title189: {
    en: 'Visa Subclass 189 Skilled Independent',
    fa: 'ویزای متخصصان با سابکلاس ۱۸۹ ',
  },
  Title190: {
    en: 'Visa Subclass 190 Skilled Independent',
    fa: 'ویزای متخصصان با سابکلاس ۱۹۰ ',
  },
};
