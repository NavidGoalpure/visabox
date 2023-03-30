import { MultiLanguageText } from 'Interfaces';

export interface Territory {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
  title?: MultiLanguageText;
  abv?: string;
  url?: string;
}
