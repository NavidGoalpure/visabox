import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { MultiLanguageText, SanityKeys, SupportedCountry } from '.';
import { Slug } from './Fields';

import { PortableTextBlock } from '@portabletext/types/dist';
import { ReferenceType } from './Occupation/occupation';

export type IQA = { answer: string; question: string };
export interface IBlog extends SanityKeys {
  language?: MultiLanguageText;
  title?: string;
  slug?: Slug;
  mainImage?: SanityImageSource;
  hashtag?: string[];
  body?: PortableTextBlock;
  otherArticles?: ReferenceType | IBlog;
  qa: IQA[];
  // این اکسرپت توی دیتابیس وجود نداره. ازش استفاده میکنیم تا خلاصه مقاله رو از بادی بگیریم. میتونه نام دیگه ای هم باشه
  // اما برای یکدستی بهتره همیشه از همین اسم رسمی استفاده کنیم
  excerpt?: string;
}
interface Row {
  row: string[];
}
export interface ISanityTableValue {
  header: string[];
  rows: Row[];
}
