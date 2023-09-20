import { FeaturedPlan_Business } from '.';
import {  Contact, Status, En_FaLanguage } from '..';

export interface Naati {
  fullName: En_FaLanguage;
  desc?: En_FaLanguage;
  language: En_FaLanguage[];
  location?: En_FaLanguage;
  contact: Contact;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  avatar?: string;
  slug: string;
}
