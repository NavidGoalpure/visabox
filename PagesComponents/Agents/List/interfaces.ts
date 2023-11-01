import { ICountry } from 'country-state-city';

export interface SearchFilters_Location {
  country?: ICountry;
  state?: string;
}
export interface SearchFilters {
  location: SearchFilters_Location;
}
