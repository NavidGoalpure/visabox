enum Languages {
  fa = 'fa',
  en = 'en',
}
enum Locations {
  fa = 'fa',
  en = 'en',
}
enum Country {
  Iran = 'Iran',
  Australia = 'Australia',
  Global = 'Global',
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
interface Contact {
  email?: string;
  phone?: string[];
  telegram?: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  mobile?: string;
  address?: MultiLanguageText;
}
export type { MultiLanguageText, MultiLanguageTextArray, Contact };
export {
  Languages,
  Locations,
  LanguageDirection,
  ThemeModes,
  LocalStorageKeys,
  Status,
  Country,
};
