import { MultiLanguageText } from 'Interfaces/Database';
export enum LanguageKeys {
  Step0Title = 'Step0Title',
  Step0Desc = 'Step0Desc',
  Step0Button = 'Step0Button',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Step0Title: {
    en: "Point calculator",
    fa: "فرم ارزیابی ماراباکس ",
    zh: '点计算器'
  },
  Step0Desc: {
    en: `Dear user
          By spending two minutes and filling out this form, you can provide your information to the best immigration lawyers so that they can provide you with the best immigration solutions by examining your conditions more closely.`,
    fa: `کاربر گرامی
    با صرف زمان ۳ دقیقه و پر کردن این فرم می توانید از نمره مهاجرت خود آگاه شوید و فرصت مشاوره رایگان از طرف بهترین وکلای مهاجرت را به دست آورید.`,
    zh: `亲爱的用户
    只需花两分钟填写此表格，您就可以将您的信息提供给最好的移民律师，以便他们通过更仔细地审查您的条件为您提供最佳的移民解决方案。`
  },
  Step0Button: {
    en: `Start`,
    fa: `محاسبه امتیاز`,
    zh: '开始'
  },
};
