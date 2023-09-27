import { Locations } from "Interfaces";
import { FeaturedPlan_Business } from ".";
import { Contact, MultiLanguageTextArray, Status, En_FaLanguage, En_FaLanguageArray } from "..";

export interface Agent {
  id: string;
  slug: string;
  name: En_FaLanguage;
  contact: Contact;
  //what countries they work in
  locations: Locations[];
  desc?: En_FaLanguage;
  qualifications?: En_FaLanguageArray;
  maraNumber: string;
  featuredPlan: FeaturedPlan_Business;
  status: Status;
  avatar?: string;
}
