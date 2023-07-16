import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Step0Title = 'Step0Title',
  Step0Desc = 'Step0Desc',
  Step0Button = 'Step0Button',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Step0Title: {
    en: 'Marabox evaluation form',
    fa: 'فرم ارزیابی ماراباکس ',
  },
  Step0Desc: {
    en: `Dear user
          By spending two minutes and filling out this form, you can provide your information to the best immigration lawyers so that they can provide you with the best immigration solutions by examining your conditions more closely.`,
    fa: `کاربر گرامی
         با صرف زمان ۳ دقیقه و پر کردن این فرم می توانید از نمره مهاجرت خود آگاه شوید و فرصت مشاوره رایگان از طرف بهترین وکلای مهاجرت را به دست آورید.`,
  },
  Step0Button: {
    en: `Start`,
    fa: `محاسبه امتیاز`,
  },
};
