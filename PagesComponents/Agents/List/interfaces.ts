import { AnszcoGroup } from 'Consts/Occupations/anszco';

export interface FilteredMaraAgentRange {
  highestNumber: string;
  lowerNumber: string;
}

export interface SearchFilters_Anzsco {
  majorGroup?: AnszcoGroup;
  subMajorGroup?: AnszcoGroup;
  minorGroup?: AnszcoGroup;
}
export interface SearchFilters {
  anzcoGropup: SearchFilters_Anzsco;
}

export interface FilterdList {
  subMajorGroup?: AnszcoGroup[];
  minorGroup?: AnszcoGroup[];
}
