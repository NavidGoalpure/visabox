type ListInterface = {
  // majorGroup?: number
  search?: string;
};
const OccupationsKeys = {
  key: ['occupations'] as const,
  //
  list: (filters: ListInterface) =>
    [...OccupationsKeys.key, 'list', { filters }] as const,
  //
  last: () => [...OccupationsKeys.key, 'last'] as const,
  //
  detail: (id: number) => [...OccupationsKeys.key, 'detail', id] as const,
};

export { OccupationsKeys };
