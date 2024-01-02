import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  Section2Title = 'Section2Title',
  Section2Subitle = 'Section2Subitle',
  Section3Title = 'Section3Title',
  Section3Desc = 'Section3Desc',
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
    en: 'MARCYA',
    fa: 'مارسیا',
    zh: 'MARCYA',
  },
  BotDesc: {
    en: 'Your Expert Guide to Australian Immigration: AI-Enhanced Solutions for Achieving Your Australian Dream.',
    fa: ' هوش مصنوعی تعلیم دیده، برای پاسخ به سوالات مهاجرتی به مقصد استرالیا',
    zh: '您的澳大利亚移民专家：AI增强解决方案，实现您的澳大利亚梦想。',
  },
  Section2Title: {
    en: 'Your Tireless Expert',
    fa: 'مشاور خستگی ناپذیر شما',
    zh: '您孜孜不倦的专家',
  },
  Section2Subitle: {
    en: `<ul>
  <li>Expert answers to specialized questions from legal documents including <span>Vetassess</span>, <span>TRA</span>, <span>ACS</span>, <span>EA</span></li>
  <li>Specialized insights on the latest <span>Migration Strategies</span> based on documents published in 2023</li>
  <li>Specialized answers regarding documents published on the <span>Department of Home Affairs</span> website</li>
  </ul>
  <p>And hundreds of pages of legal documents from various other sources.</p>`,
    fa: `<ul>
  <li>پاسخ به سوالات تخصصی از درون اسناد قانونی شامل اسناد <span>Vetassess</span>, <span>TRA</span>, <span>ACS</span>, <span>EA</span></li>
  <li>دیدگاه‌های تخصصی در مورد آخرین <span>استراتژی‌های مهاجرت</span> بر اساس اسناد منتشر شده در سال ۲۰۲۳</li>
  <li>پاسخ به سوالات تخصصی درباره مستندات منتشر شده در ,وبسایت <span>Department of Home Affairs</span></li>
  </ul>
  <p>و صدها صفحه اسناد قانونی از مراجع متنوع دیگر</p> `,
    zh: `<ul>
  <li>专家回答来自法律文件的专业问题，包括 <span>Vetassess</span>, <span>TRA</span>, <span>ACS</span>, <span>EA</span></li>
  <li>基于2023年发布的文件的最新<span>移民策略</span>的专业见解</li>
  <li>关于在 <span>Department of Home Affairs</span> 网站上发布的文件的专业答案</li>
  </ul>
  <p>和来自其他各种来源的数百页法律文件。</p>`,
  },

  Section3Title: {
    en: `Choose Your Plan`,
    fa: 'پکیج خود را انتخاب کنید',
    zh: `选择您的计划`,
  },
  Section3Desc: {
    en: `Experience Immediate and High-Quality Responses to Your Immigration Queries with the Help of <span>MARCYA</span>, Your Trusted AI Assistant.`,
    fa: 'با کمک <span>MARCYA</span> می‌توانید پاسخ سوالات مهاجرتی خود را به صورت آنی و با دقت مثال‌زدنی دریافت کنید.',
    zh: `在您值得信赖的人工智能助手<span>MARCYA</span>的帮助下，体验对您的移民查询的即时、高质量的答复。`,
  },
  ContactUs: {
    en: `If you have any questions or would like to consult with our sales team before making a payment, please feel free to reach out to us using the following contact methods.`,
    fa: `برای آگاهی از روش های پرداخت، لطفاً با استفاده از روش های تماس زیر با ما تماس بگیرید.`,
    zh: '如果您有任何疑问或想在付款前咨询我们的销售团队，请随时使用以下联系方式与我们联系',
  },
  copyGmailToastMessage: {
    en: 'Copied Gmail number to clipboard',
    zh: '已将 Gmail 号码复制到剪贴板',
    fa: 'آدرس ایمیل در حافظه کپی شد',
  },
};
