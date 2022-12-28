import { Occupation } from 'Interfaces/Documents/occupation';

export interface OccupationDetailRes extends Occupation {
  similarOccupations: Occupation[];
}
