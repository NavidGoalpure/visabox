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
  },
  NameInputPlaceholder: {
    en: "Example: Simon",
    fa: "مثال: علی",
  },
  LastNameInputLabel: {
    en: "Last Name:",
    fa: "نام خانوادگی:",
  },
  LastNameInputPlaceholder: {
    en: "Example: Smith",
    fa: "مثال: محمدی",
  },
  PhoneInputLabel: {
    en: "Phone Number:",
    fa: "شماره تلفن:",
  },
  PhoneInputPlaceholder: {
    en: "Example: +98 0000 000 0000",
    fa: "0000 000 0900 مثال:",
  },
  NextButtonTitle: {
    en: "Next",
    fa: "بعدی",
  },
  PrevButtonTitle: {
    en: "Prev",
    fa: "قبلی",
  },
 
};
