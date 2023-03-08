import { MultiLanguageText, Status } from 'Interfaces';

export interface Naati {
  fullName: MultiLanguageText;
  desc?: MultiLanguageText;
  language: MultiLanguageText[];
  location?: MultiLanguageText;
  contact: {
    email?: string;
    phone?: string[];
    telegram?: string;
    whatsapp?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  isFeatured: boolean;
  status: Status;
}
