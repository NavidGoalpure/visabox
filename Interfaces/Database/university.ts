import { EnLanguage, MultiLanguageText } from ".";

export interface University {
  title: MultiLanguageText;
  desc: EnLanguage;
  section: number;
  city: MultiLanguageText;
}
