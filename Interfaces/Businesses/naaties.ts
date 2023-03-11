import { Contact, MultiLanguageText, Status } from 'Interfaces';

export interface Naati {
  fullName: MultiLanguageText;
  desc?: MultiLanguageText;
  language: MultiLanguageText[];
  location?: MultiLanguageText;
  contact: Contact;
  isFeatured: boolean;
  status: Status;
}
