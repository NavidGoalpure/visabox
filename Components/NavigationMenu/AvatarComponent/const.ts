import gsap from 'gsap';
import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  ChangeTheme = 'ChangeTheme',
  IsBasicFormShowable = 'IsBasicFormShowable',
  LogOut = 'LogOut',
  HideDataToast = 'HideDataToast',
  ShowDataToast = 'ShowDataToast',
  FailedToastMessage = 'FailedToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  ChangeTheme: {
    en: 'Change Theme',
    fa: 'تغییر تم',
    cz: '改变主题',
  },
  IsBasicFormShowable: {
    en: 'Data Publicity For Agents',
    fa: 'نمایش اطلاعات به وکلای مهاجرت',
    cz: '代理商数据公示',
  },
  LogOut: {
    en: 'Log out',
    fa: 'خروج',
    cz: '登出',
  },
  HideDataToast: {
    en: 'Your Data Is Now Hidden From Migration Agents',
    fa: 'داده های شما اکنون از دید وکلای مهاجرت پنهان شده است',
    cz: '您的数据现在对迁移代理隐藏',
  },
  ShowDataToast: {
    en: 'Your Data Is Now Visible To Migration Agents',
    fa: 'داده های شما اکنون برای وکلای مهاجرت قابل مشاهده است',
    cz: '迁移代理现在可以看到您的数据',
  },
  FailedToastMessage: {
    en: 'Request failed! Try again later',
    fa: 'خطا! بعدا تلاش کنید',
    cz: '请求失败！ 稍后再试',
  },
};
