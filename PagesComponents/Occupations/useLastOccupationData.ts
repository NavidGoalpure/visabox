import { Occupation } from 'interfaces/Documents/Occupation';
import { useQuery } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';
import { getlastOccupationCode } from './utils';

export const useLastOccupationData = () => {
  const {
    isLoading,
    isError,
    data: lastOccupation,
  } = useQuery<Occupation, Error>(OccupationsQueryKeys.last(), () =>
    getlastOccupationCode()
  );

  return {
    isLoading,
    isError,
    lastOccupation,
  };
};
