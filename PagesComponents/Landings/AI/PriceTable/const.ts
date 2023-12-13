import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  PriceTable_Title = 'PriceTable_Title',
  PriceTable_Subtitle = 'PriceTable_Subtitle',
  MonthlyABV = 'MonthlyABV',
  PlanDescription1 = 'PlanDescription1',
  PlanDescription2 = 'PlanDescription2',
  PlanDescription3 = 'PlanDescription3',
  ContactUs = 'ContactUs',
  TestPlan = 'TestPlan',
  AnnualPlan = 'AnnualPlan',
  MonthlyPlan = 'MonthlyPlan',
  YearlyABV = 'YearlyABV',
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
  MonthlyABV: {
    en: '/ mo',
    fa: '/ ماهانه',
    zh: '/ 每月',
  },

  YearlyABV: {
    en: '/ yearly',
    fa: '/ سالانه',
    zh: '/ 每年',
  },

  PlanDescription3: {
    en: 'Answer questions based on "Migration Strategy" documents',
    fa: 'پاسخ به سوالات بر اساس مستندات «Migration Strategy»',
    zh: '根据《2023年移民战略》文件回答问题',
  },

  PlanDescription1: {
    en: 'Using ChatGPT4 chat engine',
    fa: 'با استفاده از نیروی قدرتمند ChatGPT4',
    zh: '使用ChatGPT4聊天引擎',
  },
  PlanDescription2: {
    en: 'Answer questions based on "Vetassess" documentation',
    fa: 'پاسخ به سوالات بر اساس مستندات «Vetassess»',
    zh: '根据“Vetassess”文档回答问题',
  },
  ContactUs: {
    en: `If you're interested in having a <span>Special</span> Marabox agent account, please get in touch with us through the following methods.`,
    fa: `  اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
              باشید, از راه های زیر با ما در ارتباط باشید.`,
    zh: '如果您有兴趣拥有Marabox特惠代理账户，请通过以下方式与我们联系。',
  },

  TestPlan: {
    en: 'Test Plan',
    fa: ' طرح آزمایشی',
    zh: '测试计划',
  },
  AnnualPlan: {
    en: 'Annual Plan',
    fa: 'طرح سالانه',
    zh: '年度计划',
  },
  MonthlyPlan: {
    en: 'Monthly Plan',
    fa: 'طرح ماهیانه',
    zh: '月度计划',
  },
  CTA: {
    en: 'Order Now',
    fa: 'سفارش دهید',
    zh: '现在下单',
  },
};
