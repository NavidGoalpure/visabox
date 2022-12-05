import { Occupation } from 'interfaces/Documents/Occupation';
import { useQuery } from 'react-query';
import { OccupationsKeys } from 'utils/query';
import { getlastOccupationCode } from './utils';

export const useLastOccupationData = () => {
  const {
    isLoading,
    isError,
    data: lastOccupation,
  } = useQuery<Occupation, Error>(OccupationsKeys.last(), () =>
    getlastOccupationCode()
  );

  return {
    isLoading,
    isError,
    lastOccupation,
  };
};
