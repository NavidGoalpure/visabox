import { Contact, MultiLanguageText } from 'Interfaces';

export interface ExchangeCard {
  name: MultiLanguageText;
  slug: string;
  externalLink: string;
  isFeatured: boolean;
  contact: Contact;
  desc: MultiLanguageText;
  // کشور ثبت صرافی
  location: MultiLanguageText;
}
