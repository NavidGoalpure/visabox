import { ClientError } from '@sanity/client';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { getOccupationsList } from 'Queries/occupations/List';
import { useInfiniteQuery } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query/keys';
import { FilteredOccupationRange } from './interfaces';

type OccupationsListParams = {
  search: string;
  filteredOccupationRange: FilteredOccupationRange;
};

export const useListData = ({
  search,
  filteredOccupationRange,
}: OccupationsListParams) => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    isRefetching,
    data: occupations,
    refetch,
  } = useInfiniteQuery<Occupation[], ClientError>(
    OccupationsQueryKeys.list({ search }),
    ({ pageParam: lastCode = 1 }) => {
      return getOccupationsList({
        lastCode,
        search,
        filteredOccupationRange,
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
    isRefetching,
    refetch,
  };
};
