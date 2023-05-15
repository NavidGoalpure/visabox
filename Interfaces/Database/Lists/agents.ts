
import { Locations } from 'Interfaces';
import { FeaturedPlan_Business } from '.';
import { MultiLanguageText, Contact, MultiLanguageTextArray, Status } from '..';

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
