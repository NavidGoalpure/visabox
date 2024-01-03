import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  PriceTable_Title = 'PriceTable_Title',
  PriceTable_Subtitle = 'PriceTable_Subtitle',
  //
  PlanDescription1 = 'PlanDescription1',
  PlanDescription2 = 'PlanDescription2',
  PlanDescription3 = 'PlanDescription3',
  ContactUs = 'ContactUs',
  //
  TestPlan_Title = 'TestPlan_Title',
  TestPlan_Price = 'TestPlan_Price',
  TestPlan_ABV = 'TestPlan_ABV',
  //
  ProPlan_Title = 'ProPlan_Title',
  ProPlan_Price = 'ProPlan_Price',
  ProPlan_ABV = 'ProPlan_ABV',
  //

  UnlimitedPlan = 'UnlimitedPlan',
  UnlimitedPlan_Price = 'UnlimitedPlan_Price',
  UnlimitedPlan_ABV = 'UnlimitedPlan_ABV',
  UnlimitedPlan_Button = 'UnlimitedPlan_Button',
  UnlimitedPlan_DescItem = 'UnlimitedPlan_DescItem',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  PriceTable_Title: {
    en: 'Ready To Purchase?',
    fa: 'سبد قیمت',
    zh: '准备购买了吗？',
  },
  PriceTable_Subtitle: {
    en: 'Find the Perfect Plan for You.',
    fa: 'بهترین پلن را برای بیزینس خود انتخاب کنید.',
    zh: '找到最适合您的计划',
  },

  PlanDescription1: {
    en: 'Trained on the latest documents',
    fa: 'آموزش داده شده بر اساس آخرین اسناد مهاجرتی',
    zh: '基于最新文件进行培训',
  },
  PlanDescription2: {
    en: 'Questions and answers in multiple languages',
    fa: 'پرسش و پاسخ به زبان های مختلف (فارسی و انگیسی)',
    zh: '多种语言的问题和答案（中文和英语）',
  },

  PlanDescription3: {
    en: 'Additional +3 Credits',
    fa: 'اعتبار اضافی برای ۳ سوال',
    zh: '额外+3积分',
  },

  ContactUs: {
    en: `If you're interested in having a <span>Special</span> Marabox agent account, please get in touch with us through the following methods.`,
    fa: `  اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
              باشید, از راه های زیر با ما در ارتباط باشید.`,
    zh: '如果您有兴趣拥有Marabox特惠代理账户，请通过以下方式与我们联系。',
  },

  TestPlan_Title: {
    en: 'Test Plan',
    fa: ' طرح آزمایشی',
    zh: '测试计划',
  },

  TestPlan_Price: {
    en: '5AU',
    fa: '۱۰۰ هزار تومان',
    zh: '澳5',
  },
  TestPlan_ABV: {
    en: '/ 20 Q&A',
    fa: 'برای ۲۰ پاسخ',
    zh: '为20个答案',
  },
  //
  ProPlan_Title: {
    en: 'Normal Plan',
    fa: 'طرح نرمال',
    zh: '普通计划',
  },
  ProPlan_Price: {
    en: '15AU',
    fa: '۳۰۰ هزار تومان',
    zh: '澳15',
  },
  ProPlan_ABV: {
    en: '/ 100 Q&A',
    fa: 'برای 100 پاسخ',
    zh: '为100个答案',
  },
  //
  UnlimitedPlan: {
    en: 'Unlimited Plan',
    fa: 'طرح نامحدود',
    zh: '无限计划',
  },
  UnlimitedPlan_Price: {
    en: '--',
    fa: 'پرداخت ماهیانه',
    zh: '--',
  },
  UnlimitedPlan_ABV: {
    en: '/ Mo',
    fa: ' برای وکلای مهاجرت',
    zh: '/ 每月',
  },
  UnlimitedPlan_Button: {
    en: 'Contact Us',
    fa: 'تماس بگیرید',
    zh: '联系我们',
  },
  UnlimitedPlan_DescItem: {
    en: 'Display your ads on popular pages',
    fa: 'نمایش تبلیغات شما در صفحات پرطرفدار',
    zh: '在热门页面上显示您的广告',
  },
  CTA: {
    en: 'Order Now',
    fa: 'سفارش دهید',
    zh: '现在下单',
  },
};
