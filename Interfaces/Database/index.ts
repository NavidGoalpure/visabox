import { Languages } from 'Interfaces';

interface MultiLanguageText {
  [Languages.en]: string;
  [Languages.fa]?: string;
}
interface MultiLanguageTextArray {
  [Languages.en]: string[];
  [Languages.fa]?: string[];
}
enum Status {
  'ACTIVE' = 'active',
  'DEACTIVE' = 'deactive',
}
interface Contact {
  email?: string;
  phone?: string[];
  telegram?: string;
  whatsapp?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  website?: string;
  mobile?: string;
  address?: MultiLanguageText;
}
interface SanityKeys {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
}
export type { MultiLanguageText, MultiLanguageTextArray, Contact, SanityKeys };
export { Status };
