import { ClientError } from '@sanity/client';
import { Occupation } from 'Interfaces/Documents/occupation';
import { getOccupationsList } from 'Queries/occupations/List';
import { useInfiniteQuery } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query';

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
  } = useInfiniteQuery<Occupation[], ClientError>(
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
