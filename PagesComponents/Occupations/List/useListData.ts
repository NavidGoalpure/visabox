import { ClientError } from '@sanity/client';
import { Occupation } from 'Interfaces/Documents/occupation';
import { getOccupationsList } from 'Queries/occupations/List';
import { useInfiniteQuery } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query';
import { FilteredRang } from './interfaces';

type OccupationsListParams = {
  search: string;
  filteredRange: FilteredRang;
};

export const useListData = ({
  search,
  filteredRange,
}: OccupationsListParams) => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    data: occupations,
    refetch,
  } = useInfiniteQuery<Occupation[], ClientError>(
    OccupationsQueryKeys.list({ search }),
    ({ pageParam: lastCode = 1 }) => {
      return getOccupationsList({
        lastCode,
        search,
        filteredRange,
      });
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
    refetch,
  };
};
