import {
  Contact,
  Locations,
  MultiLanguageText,
  MultiLanguageTextArray,
  Status,
} from 'Interfaces';
import { FeaturedPlan_Business } from '.';

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
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  avatar?: string;
}
