import { MultiLanguageText } from 'Interfaces/Database';
import { ILookupEnum } from './Interface';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
  PageSubtitle = 'PageSubtitle',
  Disclaimer = 'Disclaimer',
  QuestionRemain = 'QuestionRemain',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Marcya Chatbot: Your AI Companion for Australian Immigration Assistance | Mara Box',
    fa: 'چت‌بات مارسیا: همراه هوش مصنوعی شما برای کمک در مهاجرت به استرالیا| Mara Box',
    zh: 'Marcya聊天机器人：您的澳大利亚移民辅助AI伴侣 | Mara Box',
  },
  SeoDesc: {
    en: 'Explore the capabilities of Marcya, the AI chatbot designed to assist you with comprehensive guidance on Australian immigration. From assessment systems to visa processes, Marcya is your virtual companion on the journey to realizing your Australian dream. | Mara Box',
    fa: 'تجربه قابلیت‌های چت‌بات مارسیا، چت‌بات هوش مصنوعی طراحی شده برای همراهی شما در ارائه راهنمای جامع در مهاجرت به استرالیا. از سیستم‌های ارزیابی تا روند اخذ ویزا، مارسیا همراه مجازی‌تان در سفر به تحقق آرزوی استرالیایی‌تان است. | Mara Box',
    zh: '探索Marcya的功能，这是一款旨在为您提供关于澳大利亚移民的全面指导的AI聊天机器人。从评估系统到签证流程，Marcya是您在实现澳大利亚梦想之旅中的虚拟伴侣。| Mara Box',
  },

  //
  PageTitle: {
    fa: 'مارسیا',
    zh: 'Marcya',
    en: 'Welcome to Marcya',
  },
  PageSubtitle: {
    fa: 'راهنمایی به سوی استرالیا: همراه دیجیتال معتبر شما',
    zh: '解锁澳大利亚签证洞见：您值得信赖的数字伙伴',
    en: 'Unlocking Australian Visa Insights: Your Trusted Digital Companion',
  },

  Disclaimer: {
    fa: `<span>توجه:</span> هر چند که هوش مصنوعی ما راهنمایی های مفیدی در زمینه ارزیابی مدارک و مهاجرت به استرالیا ارائه می‌دهد، اما در نظر داشته باشید که این پلتفرم جایگزین مهارت‌ها و مشاوره شخصی که توسط کارشناسان مهاجرتی ارائه می‌شود، نمی‌باشد.`,
    zh: `<span>免责声明:</span> 接受过回答与“VETASSESS”、“ACS”、“TRA”和“迁移策略”文件相关问题的培训`,
    en: `<span>Disclaimer:</span> While our AI provides guidance on Australia migration, it is essential to understand that this platform does not replace the expertise and personalized advice that can be provided by immigration experts or professionals.`,
  },
  QuestionRemain: {
    fa: 'سوالات باقیمانده: <span> $number</span> ',
    zh: '剩余问题 <span> $number</span> 个:',
    en: 'Questions remaining: <span> $number</span>',
  },
};
export const LOOKUP_STORE: Record<ILookupEnum, string> = {
  lookUpKnowVetassess: 'Vetassess documents',
  lookUpKnowACS: 'ACS documents',
  lookUpKnowTRA: 'TRA documents',
  lookUpKnowSkillWorker: 'SkillWorker documents',
  loadBySimilarity: 'similarity documents',
};
const navidAnswer = `برای ویزای توریستی مادرتان به کشور استرالیا می‌توانید از ویزاهای مختلف بازدید کننده استفاده کنید که شامل دسته‌های زیر می‌شوند:

1. **ویزای توریستی (Subclass 600) - Tourist Stream**: برای افرادی که قصد گردش یا بازدید از خانواده و دوستان را دارند.
2. **ویزای توریستی (Subclass 600) - Sponsored Family Stream**: برای کسانی که توسط یک نفر از اهالی استرالیا یا شخصی دارای ویزای موقت اسپانسر شده‌اند.
3. **ویزای برنامه‌ریزی شده (Subclass 600) - Approved Destination Status Stream**: برای افرادی که از کشورهای خاص در قالب تورهای گروهی وارد استرالیا می‌شوند.
4. **ویزای توریستی الکترونیکی (eVisitor - Subclass 651)**: برای اتباع برخی کشورها که برای اقامت کوتاه مدت به استرالیا سفر می‌کنند.

شما باید شرایط خاص مادرتان و همچنین الزامات هر نوع ویزا را در نظر بگیرید تا ببینید کدام یک از گزینه‌ها با نیازهای ایشان همخوانی بیشتری دارد. همیشه توصیه می‌شود قبل از اقدام برای ویزا، با یک متخصص در زمینه مهاجرت مشورت کنید تا بتوانید گزینه‌ها را به دقت بررسی و انتخاب کنید.

<NextStepsButton prompt="آیا نیاز به کمک بیشتری برای انتخاب نوع ویزا یا فرایند درخواست ویزا دارید؟" />`;

export const FREE_CREDIT_THRESHOLD = -3;
