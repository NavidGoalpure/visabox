import { MultiLanguageText } from 'Interfaces';
import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';

type AssssingAuthority = {
  title: MultiLanguageText;
  abv: AssessingAuthorityAbv;
  address: string;
  email: string;
  website: string;
};

export type { AssssingAuthority };
