import { EnLanguage, SanityKeys } from "..";

export interface Territory extends SanityKeys {
  title?: EnLanguage;
  abv?: string;
  url?: string;
}
