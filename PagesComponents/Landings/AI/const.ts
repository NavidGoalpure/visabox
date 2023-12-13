import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  Section2Title = 'Section2Title',
  Section2Subitle = 'Section2Subitle',
  CTATitle_Logined = 'CTATitle_Logined',
  ContactUs = 'ContactUs',
  copyGmailToastMessage = 'copyGmailToastMessage',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'AI-Powered Australia Immigration FAQs | Mara Box',
    fa: ' پاسخ پرسش های مهاجرتی به استرالیا با هوش مصنوعی| مارا باکس',
    zh: '人工智能驱动的澳大利亚移民常见问题解答 | Mara Box',
  },
  SeoDesc: {
    fa: 'پاسخ به سوالات مهاجرت شامل ارزیابی های Vetassess و مستندات آخرین استراتژی های مهاجرت  که در سال  2023 منتشر شده است',
    en: `"Unlock AI-Powered Answers for a Smooth Migration to Australia! Explore Expert Guidance on Vetassess Assessment and Stay Informed about Cutting-Edge Migration Strategies in 2023. Your Essential Resource for a Successful Journey Down Under!"`,
    zh: '解锁通往澳大利亚之路的人工智能答案！包括：Vetassess评估、移民战略…… 探索2023年最新移民策略的专业指导。成为您成功之旅的重要资源！',
  },
  BotName: {
    en: 'Marcy: Your Australia Immigration Expert',
    fa: 'Marcy: کارشناس هوشمند شما برای مهاجرت به استرالیا',
    zh: 'Marcy：您的澳大利亚移民专家',
  },
  BotDesc: {
    en: 'AI-Powered Expertise for Your Australian Dream',
    fa: 'پاسخ به سوالات مهاجرتی با استفاده از قدرت هوش مصنوعی',
    zh: '人工智能驱动的专业知识助您实现澳大利亚梦',
  },
  Section2Title: {
    en: 'Your Tireless Expert',
    fa: 'مشاور خستگی ناپذیر شما',
    zh: '您孜孜不倦的专家',
  },
  Section2Subitle: {
    en: `Experience Immediate and High-Quality Responses to Your Immigration Queries with the Help of 'Marcy', Your Trusted AI Assistant.`,
    fa: 'به کمک «Marcy» می‌توانید پاسخ سوالات مهاجرتی خود را به صورت آنی و با دقت مثال‌زدنی دریافت کنید.',
    zh: `在您值得信赖的人工智能助手“Marcy”的帮助下，体验对您的移民查询的即时、高质量的答复。`,
  },
  CTATitle_Logined: {
    en: `Answers to "Vetassess" Questions and Expert Insights into the Latest "Migration Strategies" after 2023`,
    fa: ' پاسخ به سوالات درباره Vetassess و دیدگاه‌های تخصصی در «استراتژی‌های جدید مهاجرت» بعد از سال ۲۰۲۳ ',
    zh: '提供对Vetassess问题的答案和对2023年最新移民策略的专业见解',
  },
  ContactUs: {
    en: `If you have any questions or would like to consult with our sales team before making a payment, please feel free to reach out to us using the following contact methods.`,
    fa: `اگر سوالی دارید یا می خواهید قبل از پرداخت با تیم فروش ما مشورت کنید، لطفاً با استفاده از روش های تماس زیر با ما تماس بگیرید.`,
    zh: '如果您有任何疑问或想在付款前咨询我们的销售团队，请随时使用以下联系方式与我们联系',
  },
  copyGmailToastMessage: {
    en: 'Copied Gmail number to clipboard',
    zh: '已将 Gmail 号码复制到剪贴板',
    fa: 'ایمیل در حافظه کپی شد',
  },
};
