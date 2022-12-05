import { Occupation } from 'interfaces/Documents/Occupation';
import { getOccupationsList } from 'PagesComponents/utils';
import { useInfiniteQuery } from 'react-query';

export const useData = () => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    data: occupations,
  } = useInfiniteQuery<Occupation[], Error>(
    ['occupations', { lastCode: 0 }],
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
