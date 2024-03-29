import { ClientError } from '@sanity/client';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { getlastOccupationCode } from 'Queries/occupations/List';
import { useQuery } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query/keys';

export const useLastOccupationData = (searchValue: string) => {
  const {
    isLoading,
    isError,
    // آخرین آکیوپیشنی که دیتابیس موجود است
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
