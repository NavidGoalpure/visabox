import { Locations, Status } from 'Interfaces';
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
    isFeatured: boolean;
    //what countries they work in
    locations: Locations;
    desc: string;
    status: Status
}
