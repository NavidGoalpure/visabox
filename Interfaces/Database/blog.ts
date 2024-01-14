import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { MultiLanguageText, SanityKeys, SupportedCountry } from '.';
import { Slug } from './Fields';

import { PortableTextBlock } from '@portabletext/types/dist';
import { ReferenceType } from './Occupation/occupation';

export interface IBlog extends SanityKeys {
  language: MultiLanguageText;
  title: string;
  slug: Slug;
  mainImage: SanityImageSource;
  hashtag: string[];
  //navid check the type
  body: PortableTextBlock;
  otherArticles: ReferenceType | IBlog;
}
interface Row {
  row: string[];
}
export interface ISanityTableValue {
  header: string[];
  rows: Row[];
}
