import { MultiLanguageText } from 'interfaces';

export enum LanguageKeys {
  Details = 'Details',
  Anzsco = 'Anzsco',
  Backlog = 'Backlog',
  AnzscoTabTitle = 'AnzscoTabTitle',
  MajorGroup = 'MajorGroup',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Details: {
    fa: 'جزییات',
    en: 'Details',
  },
  Anzsco: {
    fa: 'کد رشته',
    en: 'Anzsco',
  },
  Backlog: {
    fa: 'صف',
    en: 'Backlog',
  },
  AnzscoTabTitle: {
    fa: 'مشخصات کد رشته',
    en: 'ANZSCO Version Specifications',
  },
  MajorGroup: {
    en: 'MajorGroup',
    fa: 'گروه اصلی',
  },
};
