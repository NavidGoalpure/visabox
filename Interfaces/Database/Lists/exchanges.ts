import { FeaturedPlan_Business } from '.';
import {  Contact, Status, En_FaLanguage } from '..';

export interface Exchange {
  fullName: En_FaLanguage;
  desc: En_FaLanguage;
  //what countries they work in
  location: En_FaLanguage;
  contact: Contact;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  slug: string;
  logoUrl: string;
}
