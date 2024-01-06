import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    en: 'Something Went Wrong',
    fa: 'مشکلی پیش آمده است',
    zh: '出现了问题',
  },
  Subtitle: {
    en: 'Unfortunately, there was an error processing your payment. Please try again.',
    fa: 'متاسفانه در پردازش پرداخت شما خطا رخ داده است. لطفاً مجدداً تلاش کنید.',
    zh: '很遗憾，处理您的付款时出现了错误。请再试一次。',
  },
};
