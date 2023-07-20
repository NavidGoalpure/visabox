import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'What we need to know about assessment or evaluation of documents in Australia | Mara Box',
    fa: 'آنچه باید درباره اسسمنت یا ارزیابی مدارک در استرالیا بدانیم | مارا باکس',
  },
  SeoDesc: {
    fa: 'ویزای اسکیل ورکر یا مهارتی سه مرحله دارد که اسسمنت مرحله اول آن است. اسسمنت به معنای ارزیابی است، شما برای شروع فرایند مهاجرت از طریق ویزای اسکیل ورکر ابتدا لازم است اسسمنت یا ارزیابی مثبت بگیرد. بنابراین با توجه به رزومه و تحصیلات و سابقه کاریتان اسسمنت مثبت می گیرید...',
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};
