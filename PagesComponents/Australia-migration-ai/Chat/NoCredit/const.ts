import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  OutOfChargeMessage = 'OutOfChargeMessage',
  Buy = 'Buy',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  OutOfChargeMessage: {
    fa: 'اعتبار شما برای پرسیدن سوال به پایان رسیده است. برای پرسیدن سوالات بیشتر باید پکیج جدیدی را خریداری نمایید.',
    zh: '您已经用尽了提问的信用。请重新充值您的信用。',
    en: 'You have run out of credit to ask questions. Please recharge your credit.',
  },
  Buy: {
    fa: 'خرید',
    zh: '买',
    en: 'Buy',
  },
};
