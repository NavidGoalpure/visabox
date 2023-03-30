import { Occupation } from 'Interfaces/Occupation/occupation';

export interface OccupationDetailRes extends Occupation {
  similarOccupations: Occupation[];
}
