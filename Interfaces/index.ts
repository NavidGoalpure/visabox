enum Languages {
  fa = 'fa',
  en = 'en',
}
enum Locations {
  fa = 'fa',
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
  HasBeenAnswered = 'HasBeenAnswered',
}
interface MultiLanguageText {
  [Languages.en]: string;
  [Languages.fa]?: string;
}
interface MultiLanguageTextArray {
  [Languages.en]: string[];
  [Languages.fa]?: string[];
}
enum Status {
  'ACTIVE' = 'ACTIVE',
  'DEACTIVE' = 'DEACTIVE',
}
export type { MultiLanguageText, MultiLanguageTextArray };
export {
  Languages,
  Locations,
  LanguageDirection,
  ThemeModes,
  LocalStorageKeys,
  Status,
};
