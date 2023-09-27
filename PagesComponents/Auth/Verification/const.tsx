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
    zh: '您想导航到哪个页面？',
  },
  Title: {
    en: 'Please Wait Until We Verify Your Information...',
    fa: 'در حال گرفتن اطلاعات از سرور...',
    zh: '请等待我们验证您的信息...'
  },
  Desc: {
    en: 'It might take a while please don’t close this tab',
    fa: ' لطفا در طول پروسه از سایت خارج نشوید',
    zh: '可能需要一段时间，请不要关闭此选项卡'
  },
  HomePage: {
    en: 'Home Page',
    fa: 'صحفه اصلی',
    zh: '主页',
  },
  LoginPage: {
    en: 'Login Page',
    fa: 'صحفه لاگین',
    zh: '登录页面',
  },
  SuccessToastMessage: {
    en: 'You have signed in successfully',
    fa: 'شما با موفقیت ثبت نام کردید',
    zh: '您已登录成功'
  },
  FailedToastMessage: {
    en: 'Request failed! Try again later',
    fa: 'خطا! بعدا تلاش کنید',
    zh: '请求失败！ 稍后再试'
  },
};
