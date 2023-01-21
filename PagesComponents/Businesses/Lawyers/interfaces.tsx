import {
  Languages,
  Locations,
  MultiLanguageText,
  MultiLanguageTextArray,
} from "Interfaces";

export interface Lawyer {
  slug: string;
  name: MultiLanguageText;
  website: string;
  contact: {
    email?: string;
    phone?: string[];
    telegram?: string;
    whatsapp?: string;
    instagram?: string;
    linkedin?: string;
  };
  avatar: string;
  //what countries they work in
  locations: Locations[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  maraNumber?: string;
  isFeatured: boolean;
}
