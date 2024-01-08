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
    en: 'MARCYA: Your AI-Powered Chat Bot for Australian Immigration Guidance',
    fa: 'مارسیا: راهنمای هوش مصنوعی شما برای مهاجرت به استرالیا',
    zh: 'MARCYA：您的澳大利亚移民AI聊天机器人助手',
  },
  SeoDesc: {
    en: 'MARCYA, your AI-powered chat bot, provides expert guidance on Australian immigration, covering assessment systems, visa processes, and updates from legal migration organizations. Connect with MARCYA for a seamless journey towards achieving your Australian dream.',
    fa: 'مارسیا راهنمای تخصصی شما در موضوع مهاجرت به استرالیا است، از سیستم‌های ارزیابی گرفته تا روند اخذ ویزا و اخبار از سازمان‌های مهاجرتی قانونی. با مارسیا همراه شوید تا به آرزوی استرالیایی‌تان برسید.',
    zh: 'MARCYA是您的AI聊天机器人，为您提供澳大利亚移民的专家指导，涵盖评估系统、签证流程以及法定移民组织的最新动态。与MARCYA联系，顺利实现您的澳大利亚梦想。',
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
