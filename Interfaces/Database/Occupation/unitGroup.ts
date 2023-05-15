import { MultiLanguageText, MultiLanguageTextArray, SanityKeys } from '..';

export interface UnitGroup extends SanityKeys {
  code?: number;
  description?: MultiLanguageText;
  skill_level?: string;
  tasks: MultiLanguageTextArray;
  title?: MultiLanguageText;
}
