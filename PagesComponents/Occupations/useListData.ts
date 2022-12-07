import { Occupation } from 'interfaces/Documents/Occupation';
import { getOccupationsList } from './utils';
import { useInfiniteQuery } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';

export const useListData = () => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    data: occupations,
  } = useInfiniteQuery<Occupation[], Error>(
    OccupationsQueryKeys.list({}),
    ({ pageParam: lastCode = 1 }) => {
      return getOccupationsList({ lastCode });
    },
    {
      getNextPageParam: (lastPage: Occupation[]) => {
        return lastPage?.[lastPage.length - 1]?.code || 0;
      },
    }
  );

  return {
    fetchNextPage,
    isLoading,
    isError,
    occupations,
    hasNextPage,
    isFetching,
  };
};
