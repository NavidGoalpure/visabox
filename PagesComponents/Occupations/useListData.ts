import { Occupation } from 'interfaces/Documents/occupation';
import { getOccupationsList } from './utils';
import { useInfiniteQuery } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';

type OccupationsListParams = {
  search: string;
};

export const useListData = ({ search }: OccupationsListParams) => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    data: occupations,
  } = useInfiniteQuery<Occupation[], Error>(
    OccupationsQueryKeys.list({ search }),
    ({ pageParam: lastCode = 1 }) => {
      return getOccupationsList({ lastCode, search });
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
