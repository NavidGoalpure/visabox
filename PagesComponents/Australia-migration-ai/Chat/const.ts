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
    en: 'List of social networks of immigration institutions | Mara Box',
    fa: 'لیست شبکه های اجتماعی | مارا باکس',
    zh: '移民机构社交网络一览| Mara Box',
  },
  SeoDesc: {
    fa: 'لیست شبکه های اجتماعی استرالیا همانند تلگرام و اینستاگرام و غیره',
    zh: '澳洲移民机构社交网络列表，如telegram、instagram等',
    en: 'List of social networks of Australian immigration institutions such as telegram, instagram etc',
  },
  //
  PageTitle: {
    fa: 'مارسیا',
    zh: 'MARCYA',
    en: 'Welcome to MARCYA',
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

  // navid add homeaffair
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