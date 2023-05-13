import { Contact, MultiLanguageText, Status } from 'Interfaces';
import { FeaturedPlan_Business } from '.';

export interface Exchange {
  fullName: MultiLanguageText;
  desc: MultiLanguageText;
  //what countries they work in
  location: MultiLanguageText;
  contact: Contact;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  slug: string;
  logoUrl: string;
}
