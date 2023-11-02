import { Languages } from 'Interfaces';

interface MultiLanguageText {
  [Languages.en]: string;
  [Languages.fa]: string;
  [Languages.zh]: string;
}
interface MultiLanguageTextArray {
  [Languages.en]: string[];
  [Languages.fa]: string[];
  [Languages.zh]: string[];
}
interface EnLanguage {
  [Languages.en]: string;
}
interface EnLanguageArray {
  [Languages.en]: string[];
}
interface En_FaLanguage {
  [Languages.en]: string;
  [Languages.fa]: string;
}
interface En_FaLanguageArray {
  [Languages.en]: string[];
  [Languages.fa]: string[];
}
enum Status {
  'ACTIVE' = 'active',
  'DEACTIVE' = 'deactive',
}
enum UserRole {
  Normal = 'normal',
  Admin = 'admin',
  Client = 'Client',
  Agent = 'Agent',
  Agency = 'Agency',
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
  // address?: EnLanguage; navid
  address?: string;
}
interface SanityKeys {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
}

// the enum values should be the same as sanity document name and toggle group english text
export enum SupportedCountry {
  Iran = 'iran',
  China = 'china',
  India = 'india',
  Australia = 'australia',
  Other = 'other',
}
export type {
  MultiLanguageText,
  MultiLanguageTextArray,
  EnLanguageArray,
  EnLanguage,
  En_FaLanguage,
  En_FaLanguageArray,
  Contact,
  SanityKeys,
};
export { Status, UserRole };
