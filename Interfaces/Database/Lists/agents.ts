import { FeaturedPlan_Business } from '.';
import { Contact, EnLanguage, Status } from '..';
import { Slug } from '../Fields';
interface MaraAgencyContact {
  email: string;
  phone: string;
  full_address: string;
}

interface MaraAgency {
  mara_number_ref: string;
  title: string;
  country: string;
  state: string;
  city: string;
  contact: MaraAgencyContact;
}
export interface MaraAgent {
  _id: string;
  name: EnLanguage;
  slug: Slug;
  email: string;
  desc: string;
  plan: FeaturedPlan_Business;
  contact: Contact;
  avatar?: string;
  status: Status;
  mara_number: string;
  reg_date: string;
  website: string;
  agencies: MaraAgency;
}
