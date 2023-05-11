import { Locations, Status } from 'Interfaces';
import { FeaturedPlan_Business } from '.';
export enum SocialMediaTypes {
  TELEGRAM = 'TELEGRAM',
  INSTAGRAM = 'INSTAGRAM',
  YOUTUBE = 'YOUTUBE',
}
export interface Socials {
  id: string;
  name: string;
  slug: string;
  link: string;
  socialmediaType: SocialMediaTypes;
  featuredPlan: FeaturedPlan_Business;
  //what countries they work in
  locations: Locations;
  desc: string;
  status: Status;
}
