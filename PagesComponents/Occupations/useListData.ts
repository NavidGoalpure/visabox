import { Occupation } from 'interfaces/Documents/Occupation';
import { getlastOccupationCode, getOccupationsList } from './utils';
import { useInfiniteQuery } from 'react-query';
import { OccupationsKeys } from 'utils/query';

export const useListData = () => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    data: occupations,
  } = useInfiniteQuery<Occupation[], Error>(
    OccupationsKeys.list({}),
    ({ pageParam: lastCode = 1 }) => {
      return getOccupationsList({ lastCode });
    },
    {
      getNextPageParam: (lastPage: Occupation[]) => {
        //  برای اینکه هزنکست پیج فالس بشه باید در موقع لازم آندیفایند برگردونیم
        // navid
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
