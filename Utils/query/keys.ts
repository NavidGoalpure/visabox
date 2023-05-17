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
//////client queries/////////////
///////////////////////////////
const ClientQueryKeys = {
  // this key is not useful outside of here
  key: ['client'] as const,

  // we use the detail key to return a client's data.
  // you should pass reParams when you are sending a query
  // but you do not need to send resParams when you are using removeQuery you dont need resParams
  detail: ({
    reqParams,
    resParams,
  }: {
    reqParams: string;
    resParams?: string;
  }) => [...ClientQueryKeys.key, 'detail', reqParams, resParams] as const,
  //
  last: ({ resParams }: { resParams: string }) =>
    [...ClientQueryKeys.key, 'last', resParams] as const,
  listOfBasicForm: ({ resParams }: { resParams?: string }) =>
    [...ClientQueryKeys.key, 'listOfBasicForm', resParams] as const,
};

export { OccupationsQueryKeys, ClientQueryKeys };
