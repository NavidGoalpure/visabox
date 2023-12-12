import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  Section2Title = 'Section2Title',
  Section2Subitle = 'Section2Subitle',
  CTATitle_Logined = 'CTATitle_Logined',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'AI-Powered Australia Immigration FAQs | Mara Box',
    fa: ' پاسخ پرسش های مهاجرتی به استرالیا با هوش مصنوعی| مارا باکس',
    zh: '人工智能驱动的澳大利亚移民常见问题解答 | Mara Box',
  },
  SeoDesc: {
    fa: 'ارائه پاسخ به سوالات مهاجرت شامل ارزیابی های Vetassess و مستندات آخرین استراتژی های مهاجرت  که در سال  2023 منتشر شده است',
    en: `"Unlock AI-Powered Answers for a Smooth Migration to Australia! Explore Expert Guidance on Vetassess Assessment and Stay Informed about Cutting-Edge Migration Strategies in 2023. Your Essential Resource for a Successful Journey Down Under!"`,
    zh: '解锁通往澳大利亚之路的人工智能答案！包括：Vetassess评估、移民战略…… 探索2023年最新移民策略的专业指导。成为您成功之旅的重要资源！',
  },
  BotName: {
    en: 'Marci: Your Australia Immigration Expert',
    fa: 'Marci: کارشناس هوشمند شما برای مهاجرت به استرالیا',
    zh: 'Marci：您的澳大利亚移民专家',
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
    en: `Experience Immediate and High-Quality Responses to Your Immigration Queries with the Help of 'Marci', Your Trusted AI Assistant.`,
    fa: 'به کمک «Marci» می‌توانید پاسخ سوالات مهاجرتی خود را به صورت آنی و با کیفیت بالا دریافت کنید.',
    zh: `在您值得信赖的人工智能助手“Marci”的帮助下，体验对您的移民查询的即时、高质量的答复。`,
  },
  CTATitle_Logined: {
    en: `Your All-in-One Solution for Successful Migration: Marci - Providing Answers to Vetassess Questions and Expert Insights into the Latest Migration Strategies for 2023`,
    fa: 'راه حل جامع برای موفقیت در مهاجرت: [Marci] - ارائه پاسخ به سوالات Vetassess و دیدگاه‌های تخصصی در استراتژی‌های مهاجرت جدید برای 2023',
    zh: '通往成功移民的全方位解决方案：[Marci] - 提供对Vetassess问题的答案和对2023年最新移民策略的专业见解',
  },
};
