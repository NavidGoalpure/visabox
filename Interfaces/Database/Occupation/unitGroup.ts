import { EnLanguage, EnLanguageArray, SanityKeys } from "..";

export interface UnitGroup extends SanityKeys {
  code?: number;
  description?: EnLanguage;
  skill_level?: string;
  tasks: EnLanguageArray;
  title?: EnLanguage;
}
