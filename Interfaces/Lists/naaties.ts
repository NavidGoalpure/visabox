import { Contact, MultiLanguageText, Status } from 'Interfaces';
import { FeaturedPlan_Business } from '.';

export interface Naati {
  fullName: MultiLanguageText;
  desc?: MultiLanguageText;
  language: MultiLanguageText[];
  location?: MultiLanguageText;
  contact: Contact;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
}
