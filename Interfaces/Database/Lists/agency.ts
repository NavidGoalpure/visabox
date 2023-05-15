import { Country } from 'Interfaces';
import { FeaturedPlan_Business } from '.';
import { Contact, MultiLanguageText, MultiLanguageTextArray, Status } from '..';

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
