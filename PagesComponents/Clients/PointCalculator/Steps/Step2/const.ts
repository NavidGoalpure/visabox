import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  NameInputLabel = "NameInputLabel",
  NameInputPlaceholder = "NameInputPlaceholder",
  LastNameInputLabel = "LastNameInputLabel",
  LastNameInputPlaceholder = "LastNameInputPlaceholder",
  PhoneInputLabel = "PhoneInputLabel",
  PhoneInputPlaceholder = "PhoneInputPlaceholder",
  NextButtonTitle = "NextButtonTitle",
  PrevButtonTitle = "PrevButtonTitle",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {

  NameInputLabel: {
    en: "Name:",
    fa: "نام:",
    cz: '姓名：'
  },
  NameInputPlaceholder: {
    en: "Example: Simon",
    fa: "مثال: علی",
    cz: '例子： 静'
  },
  LastNameInputLabel: {
    en: "Last Name:",
    fa: "نام خانوادگی:",
    cz: '姓：'
  },
  LastNameInputPlaceholder: {
    en: "Example: Smith",
    fa: "مثال: محمدی",
    cz: '例子：刘'
  },
  PhoneInputLabel: {
    en: "Phone Number:",
    fa: "شماره تلفن:",
    cz: '电话号码：'
  },
  PhoneInputPlaceholder: {
    en: "Example: +98 0000 000 0000",
    fa: "0000 000 0900 مثال:",
    cz: 'Example: +98 0000 000 0000'
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
    cz: '下一个'
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
    cz: '上一篇'
  },

};
