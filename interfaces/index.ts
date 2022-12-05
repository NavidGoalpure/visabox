enum Languages {
  ir = 'ir',
  en = 'en',
}
enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}
enum LanguageDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

enum LocalStorageKeys {
  Theme = 'Theme',
}
interface MultiLanguageText {
  [Languages.en]: string;
  [Languages.ir]?: string;
}
export type { MultiLanguageText };
export { Languages, LanguageDirection, ThemeModes, LocalStorageKeys };
