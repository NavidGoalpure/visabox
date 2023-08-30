enum Languages {
  fa = 'fa',
  en = 'en',
  zh = 'zh',
}
enum Locations {
  iran = 'iran',
  china = 'china',
  india = 'india',
  other = 'other',
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
  Client_IsFormBannerClosed = 'Client_IsFormBannerClosed',
}
enum CookieKeys {
  // وقتی با گوگل یا چیز دیگه ای لاگین میکنیم از دامین خودمون خارج میشیم و وقتی برمیگردیم مشخص نبوده
  // که قبلا روی لوکیل چه زبانی بودیم. برای این کار در صفحه ساین این لوکیل رو موقتا ذخیره میکنیم و بعد از لاگین
  // دوباره پاک میکنیم
  TemporaryLocale = 'TemporaryLocale', //
}

export {
  Languages,
  Locations,
  LanguageDirection,
  ThemeModes,
  LocalStorageKeys,
  CookieKeys,
  Country,
};
