import { MultiLanguageText } from 'Interfaces/Database';
import { AssessingAuthorityAbv } from 'Interfaces/Database/Occupation/occupation';

type AssssingAuthority = {
  title: MultiLanguageText;
  abv: AssessingAuthorityAbv;
  address: string;
  email: string;
  website: string;
};

export type { AssssingAuthority };
