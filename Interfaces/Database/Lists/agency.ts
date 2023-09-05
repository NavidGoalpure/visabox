import { FeaturedPlan_Business } from '.';
import {
  Contact,
  MultiLanguageText,
  MultiLanguageTextArray,
  SanityKeys,
  Status,
  SupportedCountry,
} from '..';

export interface Agency {
  id: string;
  slug: string;
  name: MultiLanguageText;
  contact: Contact;
  //what countries they work in
  country: SupportedCountry[];
  desc?: MultiLanguageText;
  qualifications?: MultiLanguageTextArray;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  socialsId?: string[];
  agentsId?: string[];
  logoUrl?: string;
}

export interface AgencySanity extends SanityKeys {
  email: string; // ایمیلی که برای لاگین استفاده میکنه
  avatar: string;
  status: Status;
}
