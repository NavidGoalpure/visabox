import { ClientError } from '@sanity/client';
import { Occupation } from 'Interfaces/Documents/occupation';
import { getlastOccupationCode } from 'Queries/occupations/List';
import { useQuery } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query';

export const useLastOccupationData = (searchValue: string) => {
  const {
    isLoading,
    isError,
    data: lastOccupation,
  } = useQuery<Occupation, ClientError>(
    OccupationsQueryKeys.last({ search: searchValue }),
    () => getlastOccupationCode(searchValue)
  );

  return {
    isLoading,
    isError,
    lastOccupation,
  };
};
