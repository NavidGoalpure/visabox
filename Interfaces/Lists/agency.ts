import {
  Contact,
  Languages,
  Country,
  MultiLanguageText,
  MultiLanguageTextArray,
  Status,
} from 'Interfaces';
import { FeaturedPlan_Business } from '.';

export interface Agency {
  id: string;
  slug: string;
  name: MultiLanguageText;
  contact: Contact;
  //what countries they work in
  country: Country[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  socialsId?: string[];
  agentsId?: string[];
  logoUrl?: string;
}
