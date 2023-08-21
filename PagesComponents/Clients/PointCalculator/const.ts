import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Immigration Point Calculator',
    fa: 'ماشین حساب محاسبه امتیاز مهاجرت',
    cz: '移民点计算器'
  },
  SeoDesc: {
    fa: 'فرم مهاجرت خود را پر کنید تا بعد از محاسبه نمره مهاجرت شما، وکلای معتبر مهاجرت با شما به صورت رایگان در ارتباط باشند ',
    en: 'Fill out your immigration form to have reputable immigration lawyers contact you for free',
    cz: '填写您的移民表格，让信誉良好的移民律师免费与您联系'
  },
};
