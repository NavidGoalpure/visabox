import { MultiLanguageText } from 'Interfaces';
import { AssessingAuthorityAbv } from 'Interfaces/Occupation/occupation';

type AssssingAuthority = {
  title: MultiLanguageText;
  abv: AssessingAuthorityAbv;
  address: string;
  email: string;
  website: string;
};

export type { AssssingAuthority };
