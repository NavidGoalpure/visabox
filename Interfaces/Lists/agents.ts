import {
  Contact,
  Languages,
  Locations,
  MultiLanguageText,
  MultiLanguageTextArray,
  Status,
} from 'Interfaces';

export interface Agent {
  id: string;
  slug: string;
  name: MultiLanguageText;
  contact: Contact;
  //what countries they work in
  locations: Locations[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  maraNumber: string;
  isFeatured: boolean;
  status: Status;
}