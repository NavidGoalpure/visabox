import { Occupation } from 'interfaces/Documents/occupation';
import { getlastOccupationCode } from 'queries/occupations/List';
import { useQuery } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';

export const useLastOccupationData = (searchValue: string) => {
  const {
    isLoading,
    isError,
    data: lastOccupation,
  } = useQuery<Occupation, Error>(
    OccupationsQueryKeys.last({ search: searchValue }),
    () => getlastOccupationCode(searchValue)
  );

  return {
    isLoading,
    isError,
    lastOccupation,
  };
};
