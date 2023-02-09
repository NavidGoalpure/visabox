import {
  Locations,
} from "Interfaces";
export enum SocialMediaTypes {
  TELEGRAM = "TELEGRAM",
  INSTAGRAM = "INSTAGRAM"
}
export interface TelegramGroup {
  name: string;
  slug: string;
  telegramLink: string;
  socialmediaType: SocialMediaTypes;
  //what countries they work in
  locations: Locations[];
  desc: string;
}
