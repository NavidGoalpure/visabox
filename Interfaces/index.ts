enum Languages {
  fa = "fa",
  en = "en",
}
enum Locations {
  fa = "fa",
  en = "en",
}
enum Country {
  Iran = "Iran",
  Australia = "Australia",
  Global = "Global",
}
enum ThemeModes {
  LIGHT = "light",
  DARK = "dark",
}
enum LanguageDirection {
  LTR = "ltr",
  RTL = "rtl",
}

enum LocalStorageKeys {
  Theme = "Theme",
  Client_IsFormBannerClosed = "Client_IsFormBannerClosed",
}
enum CookieKeys {
  // وقتی با گوگل یا چیز دیگه ای لاگین میکنیم از دامین خودمون خارج میشیم و وقتی برمیگردیم مشخص نبوده
  // که قبلا روی لوکیل چه زبانی بودیم. برای این کار در صفحه ساین این لوکیل رو موقتا ذخیره میکنیم و بعد از لاگین
  // دوباره پاک میکنیم
  TemporaryLocale = "TemporaryLocale", //
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
  "ACTIVE" = "ACTIVE",
  "DEACTIVE" = "DEACTIVE",
}
interface Contact {
  email?: string;
  phone?: string[];
  telegram?: string;
  whatsapp?: string;
  instagram?: string;
  youtube?: string;
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
  CookieKeys,
  Status,
  Country,
};
