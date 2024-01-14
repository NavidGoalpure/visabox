import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { MultiLanguageText, SanityKeys, SupportedCountry } from '..';
import { Slug } from '../Fields';

import { PortableTextBlock } from '@portabletext/types/dist';

export interface IBlog extends SanityKeys {
  language: MultiLanguageText;
  title: string;
  slug: Slug;
  mainImage: SanityImageSource;
  hashtag: string[];
  //navid check the type
  body: PortableTextBlock;
}
