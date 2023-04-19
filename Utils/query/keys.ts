type OccupationsListParams = {
  // majorGroup?: number
  search?: string;
};
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
const UserQueryKeys = {
  key: ["user"] as const,
  detail: (email: string) =>
    [...UserQueryKeys.key, "detail", email] as const,
};

export { OccupationsQueryKeys, UserQueryKeys };
