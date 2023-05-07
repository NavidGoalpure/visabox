type OccupationsListParams = {
  // majorGroup?: number
  search?: string;
};
////////////////////////////////
//////ocupation queries/////////////
///////////////////////////////
const OccupationsQueryKeys = {
  key: ['occupations'] as const,
  //
  list: (params: OccupationsListParams) =>
    [...OccupationsQueryKeys.key, 'list', params] as const,
  //
  last: (params: OccupationsListParams) =>
    [...OccupationsQueryKeys.key, 'last', params] as const,
  //
  detail: (slug: string) =>
    [...OccupationsQueryKeys.key, 'detail', slug] as const,
};
////////////////////////////////
//////user queries/////////////
///////////////////////////////
const UserQueryKeys = {
  key: ['user'] as const,
  detail: ({ email, resParams }: { email: string; resParams: string }) =>
    [...UserQueryKeys.key, 'detail', email, resParams] as const,
};

export { OccupationsQueryKeys, UserQueryKeys };
