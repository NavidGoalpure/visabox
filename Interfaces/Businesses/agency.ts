import {
  Contact,
  Languages,
  Country,
  MultiLanguageText,
  MultiLanguageTextArray,
  Status,
} from 'Interfaces';

export interface Agency {
  id: string;
  slug: string;
  name: MultiLanguageText;
  contact: Contact;
  //what countries they work in
  country: Country[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  isFeatured: boolean;
  status: Status;
  socialsId?: string[];
  agentsId?: string[];
}
