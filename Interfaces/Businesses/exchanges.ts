import { Contact, MultiLanguageText, Status } from 'Interfaces';

export interface Exchange {
  fullName: MultiLanguageText;
  desc: MultiLanguageText;
  //what countries they work in
  location: MultiLanguageText;
  contact: Contact;
  isFeatured: boolean;
  status: Status;
  slug: string;
}
