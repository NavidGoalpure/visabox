import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  TabTitle = 'TabTitle',
  Submitted = 'Submitted',
  Invited = 'Invited',
  Title189 = 'Title189',
  Title190 = 'Title190',
  Title491 = 'Title491',
  Title491_family = 'Title491_family',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  TabTitle: {
    en: 'Backlog & Invitations issued',
    fa: 'صف انتظار و دعوت نامه های صادر شده',
  },
  Submitted: {
    en: 'Submitted',
    fa: 'ثبت شده‌ها',
  },
  Invited: {
    en: 'Invited',
    fa: 'دعوت شده‌ها',
  },
  Title189: {
    en: 'Visa Subclass 189 Skilled Independent',
    fa: 'ویزای متخصصان با سابکلاس ۱۸۹',
  },
  Title190: {
    en: 'Visa Subclass 190 (State/Territory Nominated)',
    fa: 'ویزا سابکلاس 190 (ایالت/منطقه نامزد شده)',
  },
  Title491: {
    en: 'Visa Subclass 491 (State/Territory Nominated)',
    fa: 'ویزا سابکلاس 491 (ایالت/منطقه نامزد شده)',
  },
  Title491_family: {
    en: 'Visa Subclass 491 (Family Sponsored)',
    fa: 'ویزا سابکلاس 491 (فامیلی)',
  },
};
