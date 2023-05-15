import { FeaturedPlan_Business } from '.';
import { MultiLanguageText, Contact, Status } from '..';

export interface Naati {
  fullName: MultiLanguageText;
  desc?: MultiLanguageText;
  language: MultiLanguageText[];
  location?: MultiLanguageText;
  contact: Contact;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  avatar?: string;
  slug: string;
}
