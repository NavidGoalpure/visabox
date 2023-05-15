import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  NoMobile = 'NoMobile',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NoMobile: {
    en: 'Due to having a table, this content may not be displayed well on small devices such as mobile phones. Use a laptop to display it better.',
    fa: 'این محتوا به علت داشتن جدول، ممکن است در دستگاه های کوچک مانند موبایل به خوبی نمایش داده نشود. برای نمایش بهتر آن از لپتاپ استفاده کنید.',
  },
};
