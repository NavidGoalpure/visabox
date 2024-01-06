import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BotName = 'BotName',
  BotDesc = 'BotDesc',
  Section2Title = 'Section2Title',
  Section2Subitle = 'Section2Subitle',
  Section3Title = 'Section3Title',
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
    fa: ' هوش مصنوعی آموزش دیده، برای پاسخ به سوالات مهاجرتی استرالیا',
    zh: '您的澳大利亚移民专家：AI增强解决方案，实现您的澳大利亚梦想。',
  },
  Section2Title: {
    en: 'Answers to Specialized Questions About:',
    fa: 'پاسخ به سوالات تخصصی درباره:',
    zh: '针对以下问题的专业回答：',
  },
  Section2Subitle: {
    en: `<ul>
  <li>Australia's assessment systems like <span>Vetassess</span>, <span>TRA</span>, <span>ACS</span>, <span>EA</span>, and more.</li>
  <li>The process of obtaining Australian <span>migration</span>, <span>educational</span>, and <span>tourist</span> visas.</li>
  <li>Latest news and updates published by legal migration organizations like <span>Migration Strategy</span>.</li>
  </ul>
  <p>And hundreds of pages of legal documents from various other sources.</p>`,
    fa: `<ul>
  <li> سیستم‌های ارزیابی استرالیا مانند  <span>Vetassess</span>, <span>TRA</span>, <span>ACS</span>, <span>EA</span> و ...</li>
  <li> روند اخذ ویزاهای <span>مهاجرتی</span>، <span>تحصیلی</span>، <span>توریستی</span> به استرالیا</li>
  <li>اخبار و اطلاعات بروز منتشر شده توسط توسط سازمان های مهاجرتی قانونی مانند  <span>Migration Strategy</span></li>
  </ul>
  <p>و صدها صفحه، اسناد قانونی از مراجع متنوع دیگر</p>`,
    zh: `<ul>
  <li>澳大利亚的评估系统，如 <span>Vetassess</span>、<span>TRA</span>、<span>ACS</span>、<span>EA</span> 等。</li>
  <li>获取到澳大利亚的<span>移民</span>、<span>教育</span>和<span>旅游</span>签证的流程。</li>
  <li>由法定移民组织如<span>Migration Strategy</span>发布的最新新闻和更新。</li>
  </ul>
  <p>以及来自其他各种来源的数百页法律文件。</p>`,
  },

  Section3Title: {
    en: `Choose Your Plan`,
    fa: 'پکیج خود را انتخاب کنید',
    zh: `选择您的计划`,
  },

  ContactUs: {
    en: `Get in touch with us for any assistance you may need.`,
    fa: `با ما در تماس باشید.`,
    zh: '如有任何疑问或需要协助，请与我们联系。',
  },
  copyGmailToastMessage: {
    en: 'Copied Gmail number to clipboard',
    zh: '已将 Gmail 号码复制到剪贴板',
    fa: 'آدرس ایمیل در حافظه کپی شد',
  },
};
