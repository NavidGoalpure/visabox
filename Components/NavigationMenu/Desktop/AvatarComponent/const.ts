import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  ChangeTheme = 'ChangeTheme',
  IsBasicFormShowable = 'IsBasicFormShowable',
  LogOut = 'LogOut',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ChangeTheme: {
    en: 'Change Theme',
    fa: 'تغییر تم',
  },
  IsBasicFormShowable: {
    en: 'Share Profile With Agents?',
    fa: 'نمایش فرم به وکلای مهاجرت',
  },
  LogOut: {
    en: 'Log out',
    fa: 'خروج از حساب کاربری',
  },
};
