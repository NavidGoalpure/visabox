import { Contact, MultiLanguageText } from "Interfaces";

export interface ExchangeCard {
  name: MultiLanguageText;
  slug: string;
  externalLink: string;
  isFeatured: boolean;
  contact: Contact;
  hasImage: boolean;
  desc: MultiLanguageText;
  // کشور ثبت صرافی
  location: MultiLanguageText;
}
