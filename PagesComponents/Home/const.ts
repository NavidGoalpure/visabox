import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  BannerDesc = 'BannerDesc',
  BannerButtonText = 'BannerButtonText',
  StampText = 'StampText',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Mara Box | Australia immigration toolkit',
    fa: 'ماراباکس | جعبه ابزار مهاجرت به استرالیا',
    zh: 'Mara Box | 澳大利亚移民工具包',
  },
  SeoDesc: {
    fa: 'بررسی شرایط ویزا برای نیروی متخصص, لیست وکلای مهاجرت معتبر, شبکه های اجتماعی مناسب و امکانات جذاب دیگر برای مهاجرت به استرالیا',
    en: 'A toolbox for immigrating  via skilled worker visa. You can find any of your requirements in this box',
    zh: '通过技术工人签证移民的工具箱。 您可以在此框中找到您的任何要求',
  },
  BannerButtonText: {
    en: 'Chat With Marcya',
    fa: 'چت با مارسیا',
    zh: '与Marcya聊天',
  },
  BannerDesc: {
    en: `<div>
    <h3>
       Your AI Guide to Australian Immigration
    </h3>
    <p> From assessment systems to visa processes and the latest updates, <span>Marcya</span> provides expert guidance tailored to your needs.</p>
  </div>`,
    fa: `<div>
    <h3>
       دستیار هوش مصنوعی شما در مهاجرت به استرالیا
    </h3>
    <p> از سیستم‌های ارزیابی گرفته تا روند اخذ ویزا و به‌روزرسانی‌های جدید،  سوالات خود را از<span>مارسیا</span> بپرسید.</p>
  </div>`,
    zh: `<div>
    <h3>
       您的澳大利亚移民AI指南
    </h3>
    <p>在澳大利亚移民的复杂性中导航？让 <span>Marcya</span> 成为您的AI动力伴侣。从评估系统到签证流程以及最新的更新，<span>Marcya</span> 为您提供专家指导，满足您的需求。</p>
  </div>`,
  },
  StampText: {
    fa: `اینجا بپرس`,
    en: `Ask Your Questions`,
    zh: `提出您的问题`,
  },
};
