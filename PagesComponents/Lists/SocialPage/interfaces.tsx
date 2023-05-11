import { Locations } from 'Interfaces';
import { FeaturedPlan_Business } from 'Interfaces/Lists';
export enum SocialMediaTypes {
  TELEGRAM = 'TELEGRAM',
  INSTAGRAM = 'INSTAGRAM',
}
export interface SocialCard {
  name: string;
  slug: string;
  link: string;
  socialmediaType: SocialMediaTypes;
  featuredPlan: FeaturedPlan_Business;
  //what countries they work in
  locations: Locations;
  desc: string;
}
