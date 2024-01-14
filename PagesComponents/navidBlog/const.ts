import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  HintTitle = 'HintTitle',
  HintDesc = 'HintDesc',
  HintLink = 'HintLink',
  HintLinkAlt = 'HintLinkAlt',
  SimilarArticle = 'SimilarArticle',
}

export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  HintTitle: {
    fa: 'توجه: ',
    en: 'Disclaimer:',
    zh: '免责声明：',
  },
  HintDesc: {
    en: `The information provided on this blog is for general informational purposes only and should not be construed as legal advice. While we make every effort to ensure the accuracy and currency of our content, we cannot guarantee its completeness or reliability. The responsibility for any action taken based on the information presented in our blogs rests entirely with you. It is strongly recommended to seek professional advice before making decisions related to immigration. You can find a list of Iranian immigration lawyers for Australia through this link:`,
    fa: `اطلاعات ارائه شده در این بلاگ، فقط برای اطلاعاتی عمومی است و نباید به عنوان مشاوره حقوقی تلقی شود. ما تمام تلاش خود را می کنیم تا از صحت و به روز بودن محتوای خود اطمینان حاصل کنیم، اما نمی توانیم کامل بودن یا قابلیت اطمینان آن را تضمین کنیم. مسئولیت هر اقدامی که بر اساس اطلاعات ارائه شده در وبلاگ های ما انجام شود کاملاً به عهده شماست. اکیداً توصیه می‌شود که قبل از تصمیم گیری در مورد مهاجرت از مشاوره حرفه ای استفاده کنید. لیست وکلای مهاجرت قانونی ایرانی برای استرالیا را می‌توانید از طریق این لینک پیدا کنید:`,
    zh: `本博客提供的信息仅供一般信息目的，不应被视为法律建议。尽管我们竭尽全力确保内容的准确性和时效性，但我们无法保证其完整性或可靠性。基于我们博客中提供的信息所采取的任何行动完全由您负责。强烈建议在做出与移民相关的决定之前寻求专业建议。您可以通过此链接找到前往澳大利亚的伊朗移民律师名单:`,
  },
  HintLink: {
    fa: '/lists/agents?country=IR',
    en: '/lists/agents',
    zh: '/lists/agents?country=CN',
  },
  HintLinkAlt: {
    fa: 'لیست ایجنت های قانونی ایرانی برای مهاجرت به استرالیا ',
    en: 'List of Legal Agents for Immigration to Australia',
    zh: '中国移民澳大利亚的法律代理名单',
  },
  SimilarArticle: {
    fa: 'مقالات مشابه',
    en: 'Similar Articles',
    zh: '类似文章',
  },
};

//////
