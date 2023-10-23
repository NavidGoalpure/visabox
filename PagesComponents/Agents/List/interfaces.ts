export interface FilteredMaraAgentRange {
  highestNumber: string;
  lowerNumber: string;
}

export interface SearchFilters_Location {
  country?: string;
  state?: string;
  city?: string;
}
export interface SearchFilters {
  location: SearchFilters_Location;
}
