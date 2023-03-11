import { Locations } from 'Interfaces';
export enum SocialMediaTypes {
  TELEGRAM = 'TELEGRAM',
  INSTAGRAM = 'INSTAGRAM',
}
export interface SocialCard {
  name: string;
  slug: string;
  link: string;
  socialmediaType: SocialMediaTypes;
  isFeatured: boolean;
  //what countries they work in
  locations: Locations;
  desc: string;
}
