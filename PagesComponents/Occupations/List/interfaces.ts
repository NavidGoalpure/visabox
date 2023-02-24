import { AnszcoGroup } from 'Consts/Occupations/anszco';

export interface FilteredRang {
  highestNumber: number;
  lowerNumber: number;
}
export interface SearchFilter {
  anzcoGropup: {
    majorGroup?: AnszcoGroup;
    subMajorGroup?: AnszcoGroup;
  };
}

export interface FilterdList {
  subMajorGroup?: AnszcoGroup[];
  minorGroup?: AnszcoGroup[];
}
