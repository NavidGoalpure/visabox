import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  NoMobile = 'NoMobile',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NoMobile: {
    en: 'Due to having a table, this content may not be displayed well on small devices such as mobile phones. Use a laptop to display it better.',
    fa: 'این محتوا به علت داشتن جدول، ممکن است در دستگاه های کوچک مانند موبایل به خوبی نمایش داده نشود. برای نمایش بهتر آن از لپتاپ استفاده کنید.',
    cz: '由于有表格，该内容在手机等小型设备上可能无法很好地显示。 使用笔记本电脑可以更好地显示它。'
  },
};
