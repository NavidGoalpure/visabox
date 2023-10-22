import { ClientError } from '@sanity/client';
import { getAgentsList } from 'Queries/agents/List';
import { useInfiniteQuery } from 'react-query';
import { FilteredMaraAgentRange } from './interfaces';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { AgentsQueryKeys } from 'Utils/query/keys';

type AgentsListParams = {
  search: string;
  filteredMaraAgentRange: FilteredMaraAgentRange;
};

export const useListData = ({
  search,
  filteredMaraAgentRange,
}: AgentsListParams) => {
  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    isRefetching,
    data: agents,
    refetch,
  } = useInfiniteQuery<MaraAgent[], ClientError>(
    AgentsQueryKeys.list({ search }),
    ({ pageParam: lastMaraNumber = 1 }) => {
      return getAgentsList({
        lastMaraNumber,
        search,
        filteredMaraAgentRange,
      });
    },
    {
      getNextPageParam: (lastPage: MaraAgent[]) => {
        return lastPage?.[lastPage.length - 1]?.mara_number || '0';
      },
    }
  );

  return {
    fetchNextPage,
    isLoading,
    isError,
    agents,
    hasNextPage,
    isFetching,
    isRefetching,
    refetch,
  };
};
