import { MultiLanguageText, SanityKeys } from '..';

export interface Territory extends SanityKeys {
  title?: MultiLanguageText;
  abv?: string;
  url?: string;
}
