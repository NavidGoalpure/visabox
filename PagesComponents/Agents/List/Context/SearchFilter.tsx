// این هوک هندلرهای دکمه های سرچ پیشرفته را مهیا می‌کند

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { FILTERD_Codes__HIGHEST_NUMBER__DEFAULT } from '../const';
import { FilteredMaraAgentRange, SearchFilters } from '../interfaces';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useInfiniteQuery,
} from 'react-query';
import { ClientError } from '@sanity/client';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { getAgentsList } from 'Queries/agents/List';
import { AgentsQueryKeys } from 'Utils/query/keys';

interface ContexValues {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  //
  selectedFiltersObj: SearchFilters;
  setSelectedFiltersObj: Dispatch<SetStateAction<SearchFilters>>;
  //
  // filteredList: FilterdList;
  //
  filteredMaraAgentRange: FilteredMaraAgentRange;
  setFilterMaraAgentRange: Dispatch<SetStateAction<FilteredMaraAgentRange>>;
  //
  resetFilters: () => void;
  //
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<MaraAgent[], ClientError>>;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  agents: InfiniteData<MaraAgent[]> | undefined;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<InfiniteData<MaraAgent[]>, ClientError>>;
  remove: () => void;
}
type Props = {
  children: React.ReactNode;
};

const SearchFilterContext = createContext({} as ContexValues);
function FiltersContextProvider({ children }: Props) {
  const [filteredMaraAgentRange, setFilterMaraAgentRange] =
    useState<FilteredMaraAgentRange>({
      lowerNumber: '0',
      highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
    });

  const [selectedFiltersObj, setSelectedFiltersObj] = useState<SearchFilters>(
    {} as SearchFilters
  );
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    isFetching,
    isRefetching,
    data: agents,
    refetch,
    remove,
  } = useInfiniteQuery<MaraAgent[], ClientError>(
    AgentsQueryKeys.list({ search: searchValue }),
    ({ pageParam: lastMaraNumber = 1 }) => {
      return getAgentsList({
        lastMaraNumber,
        search: searchValue,
        filteredMaraAgentRange,
        selectedFiltersObj,
      });
    },
    {
      getNextPageParam: (lastPage: MaraAgent[]) => {
        return lastPage?.[lastPage.length - 1]?.mara_number || '0';
      },
    }
  );

  ////////////////////////////////////////
  //////////////handlers////////////////
  ///////////////////////////////////////
  function resetFilters() {
    setSelectedFiltersObj({} as SearchFilters);
    setFilterMaraAgentRange({
      lowerNumber: '0',
      highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
    });
    // setFilteredList({} as FilterdList);
  }

  return (
    <SearchFilterContext.Provider
      value={{
        searchValue,
        setSearchValue,
        //
        selectedFiltersObj,
        setSelectedFiltersObj,
        //
        filteredMaraAgentRange,
        setFilterMaraAgentRange,
        //
        resetFilters,
        //
        hasNextPage,
        fetchNextPage,
        isLoading,
        isError,
        isFetching,
        isRefetching,
        agents,
        refetch,
        remove,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}
export { FiltersContextProvider, SearchFilterContext };
