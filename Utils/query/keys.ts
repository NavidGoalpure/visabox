type OccupationsListParams = {
  // majorGroup?: number
  search?: string;
};
////////////////////////////////
//////ocupation queries/////////////
///////////////////////////////
const OccupationsQueryKeys = {
  key: ["occupations"] as const,
  //
  list: (params: OccupationsListParams) =>
    [...OccupationsQueryKeys.key, "list", params] as const,
  //
  last: (params: OccupationsListParams) =>
    [...OccupationsQueryKeys.key, "last", params] as const,
  //
  detail: (slug: string) =>
    [...OccupationsQueryKeys.key, "detail", slug] as const,
};
////////////////////////////////
//////user queries/////////////
///////////////////////////////
const UserQueryKeys = {
  // this key is not useful outside of here
  key: ["user"] as const,
  // we use the detail key to return a client's data.
  // you should pass reParams when you are sending a query
  // but you do not need to send resParams when you are using removeQuery you dont need resParams
  detail: ({ email, resParams }: { email: string; resParams?: string }) =>
    [...UserQueryKeys.key, "detail", email, resParams] as const,
};

export { OccupationsQueryKeys, UserQueryKeys };
