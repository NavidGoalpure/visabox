import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces';

export interface UnitGroup {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
  code?: number;
  description?: MultiLanguageText;
  skill_level?: string;
  tasks: MultiLanguageTextArray;
  title?: MultiLanguageText;
}
