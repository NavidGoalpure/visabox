import { EnLanguage } from "Interfaces/Database";
import { AssessingAuthorityAbv } from "Interfaces/Database/Occupation/occupation";

type AssssingAuthority = {
  title: EnLanguage;
  abv: AssessingAuthorityAbv;
  address: string;
  email: string;
  website: string;
};

export type { AssssingAuthority };
