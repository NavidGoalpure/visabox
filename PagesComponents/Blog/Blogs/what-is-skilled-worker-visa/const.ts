import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'What Is Skilled Worker Visa | Mara Box',
    fa: 'ویزای مهارتی استرالیا (Skilled worker) چیست؟  | مارا باکس',
  },
  SeoDesc: {
    fa: `ویزای تخصصی استرالیا از متداول‌ترین روش‌های مهاجرت به استرالیا می‌باشد.
        روش مهاجرتی اسکیل ورکر یا مهارتی یک سیستم امتیازی است که در آن افراد
        متقاضی کار در استرالیا، بر اساس شرایط سنی، سطح زبان، سوابق کاری و میزان
        تحصیلات خود برای دریافت ویزای کاری واجد شرایط می‌شوند. این برنامه
        مهاجرتی به افراد ماهر یا خانواده‌هایی که قصد مهاجرت دائمی به استرالیا را
        دارند کمک می‌کند تا کمبود نیروی حرفه‌ای در این کشور را تکمیل نمایند.
        شرایط اختصاصی دریافت ویزای مهارتی برای هر رشته متفاوت است، اما شرایط
        عمو‌می دریافت ویزای مهارتی شامل موارد زیر می‌شود...`,
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};
