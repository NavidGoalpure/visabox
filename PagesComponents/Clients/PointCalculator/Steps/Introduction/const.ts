import { MultiLanguageText } from "Interfaces/Database";
export enum LanguageKeys {
  Step0Title = "Step0Title",
  Step0Desc = "Step0Desc",
  Step0Button = "Step0Button",
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Step0Title: {
    en: "Point calculator",
    fa: "فرم ارزیابی ماراباکس ",
    zh: "点计算器",
  },
  Step0Desc: {
    en: `Dear user
         By filling out the form provided, you will gain valuable insights into your immigration score. This score serves as an important indicator of your eligibility and potential for immigration to Australia.Once you have completed the form, our advanced algorithm will analyze your responses and generate your immigration score for you.`,
    fa: `کاربر گرامی
    با پر کردن فرم ارائه شده، اطلاعات ارزشمندی در مورد امتیاز مهاجرت خود به دست خواهید آورد. این امتیاز به عنوان یک شاخص مهم برای واجد شرایط بودن و پتانسیل شما برای مهاجرت به استرالیا عمل می کند. پس از تکمیل فرم، الگوریتم پیشرفته ما پاسخ های شما را تجزیه و تحلیل می کند و امتیاز مهاجرت شما را ایجاد می کند.`,
    zh: `通过填写所提供的表格，您将获得有关您的移民分数的宝贵见解。 该分数是您移民澳大利亚的资格和潜力的重要指标。完成表格后，我们的先进算法将分析您的回答并为您生成移民分数。`,
  },
  Step0Button: {
    en: `Start`,
    fa: `محاسبه امتیاز`,
    zh: "开始",
  },
};
