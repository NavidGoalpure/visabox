import { MultiLanguageText } from 'Interfaces';

export enum LanguageKeys {
  Desc = 'Desc',
  TranslateIt = 'TranslateIt',
  DontTranslateIt = 'DontTranslateIt',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  Desc: {
    fa: 'این صفحه حاوی عباراتی است که دارای بار معنای دقیق در زبان انگلیسی هستند و ممکن است در اثر ترجمه،‌ کاربر را دچار اشتباه کنند. به همین دلیل این عبارات ترجمه نشده اند و با ادبیات دقیق اداره مهاجرت استرالیا -به زبان انگلیسی-عینا نشان داده می‌شوند./n به هرحال با استفاده از دکمه های زیر، می‌توانید نظر خود را در این باره به ما بگویید تا در ورژن های بعدی لحاظ شود.',
    en: '',
  },
  TranslateIt: {
    fa: 'همه بخش ها به فارسی ترجمه شود',
    en: '',
  },
  DontTranslateIt: {
    fa: 'عبارات انگلیسی تخصصی نباید ترجمه شوند',
    en: '',
  },
};
