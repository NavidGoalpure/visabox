import { MultiLanguageText } from 'Interfaces/Database';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    fa: 'آنچه باید در مورد سازمانهای ارزیاب استرالیا بدانیم | مارا باکس',
    en: 'What we need to know about Australian Evaluating-Organizations | Mara Box',
  },
  SeoDesc: {
    fa: 'در استرالیا بیش از 40 سازمان ارزیاب وجود دارد.در اینجا می خواهیم به خصوصیات کلی برخی از سازمانهای ارزیاب که بیشترین کد های شغلی را پوشش می دهند، بپردازیم ',
    en: 'There are over 40 appraiser organizations in Australia. Here I can look at the specifics of some of the appraiser organizations that cover the most job codes.',
  },
};
