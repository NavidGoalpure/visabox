import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Getting-skilled-worker-visa | Mara Box',
    fa: 'قدم به قدم تا ویزای اسکیل ورکر (مهارتی) | مارا باکس',
  },
  SeoDesc: {
    fa: 'مهاجرت به استرالیا، از طریق ویزای مهارتی یا اسکیل ورکر، طرفداران زیادی دارد، با توجه به اینکه بسیاری از واجدین شرایط این ویزا ، در ابتدای کار با این سوال مواجه هستند که از کجا باید شروع کنند و چه مسیری پیش رویشان است، ما در اینجا بر آن شدیم تا به زبانی ساده، مراحل و شرایط مهاجرت به استرالیا از طریق ویزای مهارتی را توضیح دهیم.',
    en: 'Practical and helpful articles for immigrants to Australia',
  },
};
