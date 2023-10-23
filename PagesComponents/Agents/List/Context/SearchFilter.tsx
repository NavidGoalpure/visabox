// این هوک هندلرهای دکمه های سرچ پیشرفته را مهیا می‌کند

import { Languages } from 'Interfaces';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { FILTERD_Codes__HIGHEST_NUMBER__DEFAULT } from '../const';
import { FilteredMaraAgentRange, SearchFilters } from '../interfaces';

interface ContexValues {
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
  /**
   * این فانکشن یک ذخیره کردن فیلتر آکیوپیشن نوشته شده. روش کارش به این صورته که اسم فیلتر و مقداری که انتخاب شده رو میگیره
   * با اون مقدار آبجکت مورد نظر رو پیدا میکنه و این آبجکت رو در استیت مورد نیاز ذخیره میکنه
   *
   * @param {({
   *     filterKey: 'MAJOR_GROUP' | 'SUB_MAJOR_GROUP' | 'MINOR_GROUP' | 'UNIT_GROUP';
   *     filterValue: string;
   *     locale: Languages;
   *   })}
   */

  return (
    <SearchFilterContext.Provider
      value={{
        //
        selectedFiltersObj,
        setSelectedFiltersObj,
        //
        filteredMaraAgentRange,
        setFilterMaraAgentRange,
        //
        resetFilters,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}
export { FiltersContextProvider, SearchFilterContext };
