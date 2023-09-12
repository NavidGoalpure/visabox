import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  Section2Title = 'Section2Title',
  Section2Subitle = 'Section2Subitle',
  CTATitle = 'CTATitle',
  CTA = 'CTA',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'AI-Powered Australia Immigration FAQs | Mara Box',
    fa: ' پاسخ پرسش های مهاجرتی به استرالیا با هوش مصنوعی| مارا باکس',
    zh: '人工智能驱动的澳大利亚移民常见问题解答 | Mara Box',
  },
  SeoDesc: {
    fa: 'به لیست انتظار ما بپیونیدید تا اولین کسانی باشید که پاسخ سوالات مهاجرتی خود را از هوش مصنوعی «مارسی» دریافت می‌کنید.',
    en: 'AI-Powered Answers Await You on Your Path to Australia! Join Our Waiting List for Expert Immigration Guidance. Start Your Australian Adventure Now.',
    zh: '人工智能驱动的答案在您前往澳大利亚的路上等待着您！ 加入我们的专家移民指导等候名单。 立即开始您的澳大利亚冒险之旅。',
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
  CTATitle: {
    en: `Join the Vanguard of Marci's Early Users and Be Part of a Select Community of Trailblazers. Click Here to Secure Your Place in the Exclusive Early Access Queue.`,
    fa: 'به گروه پیشتازان، که اولین استفاده کنندگان Marci هستند، بپیوندید. با کلیک بر روی دکمه زیر می‌توانید مکان خود را در صف کاربران اولیه ایمن کنید.',
    zh: '加入 Marci 早期用户的先锋行列，成为精选开拓者社区的一部分。 单击此处以确保您在独家抢先体验队列中的位置。',
  },
  CTA: {
    en: 'JOIN',
    fa: 'ثبت نام',
    zh: '加入',
  },
};
