import { ICountry, IState, ICity } from 'country-state-city';
export interface FilteredMaraAgentRange {
  highestNumber: string;
  lowerNumber: string;
}
export interface SearchFilters_Location {
  country?: ICountry;
  state?: IState;
}
export interface SearchFilters {
  location: SearchFilters_Location;
}
