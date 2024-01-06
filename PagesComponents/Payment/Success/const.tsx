import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  Title = 'Title',
  Subtitle = 'Subtitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Title: {
    en: 'Payment Successful',
    fa: 'پرداخت با موفقیت انجام شد',
    zh: '付款成功',
  },
  Subtitle: {
    en: 'Your payment has been successfully processed. Thank you for your purchase!',
    fa: 'پرداخت شما با موفقیت انجام شد. از خرید شما متشکریم!',
    zh: '您的付款已成功处理。感谢您的购买！',
  },
};
