import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Title = 'Title',
  Desc = 'Desc',
  SuccessToastMessage = 'SuccessToastMessage',
  FailedToastMessage = 'FailedToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
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