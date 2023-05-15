import { FeaturedPlan_Business } from '.';
import { MultiLanguageText, Contact, Status } from '..';

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
