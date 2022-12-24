import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  NoMobile = 'NoMobile',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NoMobile: {
    en: 'This content cannot be viewed on mobile. To see it, please use a larger screen like a laptop.',
    fa: 'این محتوا در موبایل قابل دیدن نمی باشد. برای دیدن آن لطفا از یک اسکرین بزرگتر مثل لپتاپ استفاده کنید.',
  },
};
