import { Occupation } from 'Interfaces/Database/Occupation/occupation';

export interface OccupationDetailRes extends Occupation {
  similarOccupations: Occupation[];
}
