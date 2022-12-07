type OccupationsListParams = {
  // majorGroup?: number
  search?: string;
};
const OccupationsQueryKeys = {
  key: ['occupations'] as const,
  //
  list: (params: OccupationsListParams) =>
    [...OccupationsQueryKeys.key, 'list', params] as const,
  //
  last: () => [...OccupationsQueryKeys.key, 'last'] as const,
  //
  detail: (id: number) => [...OccupationsQueryKeys.key, 'detail', id] as const,
};

export { OccupationsQueryKeys };
