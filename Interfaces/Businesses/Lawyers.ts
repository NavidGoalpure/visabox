import {
  Contact,
  Languages,  Locations,
  MultiLanguageText,
  MultiLanguageTextArray,
  Status,
} from "Interfaces";

export interface Lawyer {
  slug: string;
  name: MultiLanguageText;
  website?: string;
  contact: Contact;
  //what countries they work in
  locations: Locations[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  maraNumber: string;
  isFeatured: boolean;
  status: Status;
}
