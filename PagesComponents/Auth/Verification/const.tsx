import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Desc = 'Desc',
  NavigateTitle = 'NavigateTitle',
  SuccessToastMessage = 'SuccessToastMessage',
  FailedToastMessage = 'FailedToastMessage',
  HomePage = 'HomePage',
  LoginPage = 'LoginPage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  NavigateTitle: {
    en: 'Which page would you like to navigate to?',
    fa: 'دوست دارید به کدام صفحه بروید؟',
  },
  SuccessToastMessage: {
    en: 'You have signed in successfully',
    fa: 'شما با موفقیت وارد شدید',
  },
  FailedToastMessage: {
    en: 'Request failed! Try again later',
    fa: 'خطا! بعدا تلاش کنید',
  },
  Title: {
    en: 'Please Wait Until We Verify Your Information...',
    fa: 'در حال گرفتن اطلاعات از سرور...',
  },
  Desc: {
    en: 'It might take a while please don’t close this tab',
    fa: ' لطفا در طول پروسه از سایت خارج نشوید',
  },
  HomePage: {
    en: 'Home Page',
    fa: 'صحفه اصلی',
  },
  LoginPage: {
    en: 'Login Page',
    fa: 'صحفه لاگین',
  },
};
