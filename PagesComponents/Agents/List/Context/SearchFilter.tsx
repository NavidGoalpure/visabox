// این هوک هندلرهای دکمه های سرچ پیشرفته را مهیا می‌کند

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { SearchFilters } from '../interfaces';
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
import { convertSupportedCountryToCountryObj } from 'Utils/country-state-city';
import { getLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';

interface ContexValues {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  //
  selectedFiltersObj: SearchFilters;
  setSelectedFiltersObj: Dispatch<SetStateAction<SearchFilters>>;
  //
  // filteredList: FilterdList;
  resetFilters: () => void;
  //
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Partial<MaraAgent>[], ClientError>>;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  agents: InfiniteData<Partial<MaraAgent>[]> | undefined;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<InfiniteData<Partial<MaraAgent>[]>, ClientError>
  >;
  remove: () => void;
}
type Props = {
  children: React.ReactNode;
};

const SearchFilterContext = createContext({} as ContexValues);
//navid check this page
function FiltersContextProvider({ children }: Props) {
  const [selectedFiltersObj, setSelectedFiltersObj] = useState<SearchFilters>({
    location: {
      country: convertSupportedCountryToCountryObj(
        getLocalStorage(LocalStorageKeys.Country)
      ),
    },
  } as SearchFilters);
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
  } = useInfiniteQuery<Partial<MaraAgent>[], ClientError>(
    AgentsQueryKeys.list({ search: searchValue }),
    ({ pageParam: lastMaraNumber = 0 }) => {
      return getAgentsList({
        lastMaraNumber,
        search: searchValue,
        selectedFiltersObj,
      });
    },
    {
      getNextPageParam: (lastPage: Partial<MaraAgent>[]) => {
        return lastPage?.[lastPage.length - 1]?.mara_number || '0';
      },
    }
  );

  ////////////////////////////////////////
  //////////////handlers////////////////
  ///////////////////////////////////////
  function resetFilters() {
    setSelectedFiltersObj({} as SearchFilters);
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
