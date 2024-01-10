import { FeaturedPlan_Business } from '.';
import {
  Contact,
  En_FaLanguage,
  MultiLanguageText,
  MultiLanguageTextArray,
  SanityKeys,
  Status,
  SupportedCountry,
} from '..';

export interface Agency {
  id: string;
  slug: string;
  name: En_FaLanguage;
  contact: Contact;
  //what countries they work in
  country: SupportedCountry[];
  desc?: En_FaLanguage;
  qualifications?: MultiLanguageTextArray;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  socialsId?: string[];
  agentsId?: string[];
  logoUrl?: string;
}

export interface AgencySanity extends SanityKeys {
  credit: number | undefined;
  email: string; // ایمیلی که برای لاگین استفاده میکنه
  avatar: string;
  status: Status;
}
