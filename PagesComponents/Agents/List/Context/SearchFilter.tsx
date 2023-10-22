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
import {
  FilterdList,
  FilteredMaraAgentRange,
  SearchFilters,
} from '../interfaces';

import {
  AnszcoGroup,
  MAJOR_GROUP,
  Minor_GROUP,
  SUB_MAJOR_GROUP,
} from 'Consts/Occupations/anszco';

interface ContexValues {
  setFiltersByValue: ({
    filterKey,
    filterValue,
    locale,
  }: {
    filterKey: 'MAJOR_GROUP' | 'SUB_MAJOR_GROUP' | 'MINOR_GROUP' | 'UNIT_GROUP';
    filterValue: string;
    locale: Languages;
  }) => void;
  //
  selectedFiltersObj: SearchFilters;
  setSelectedFiltersObj: Dispatch<SetStateAction<SearchFilters>>;
  //
  filteredList: FilterdList;
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
  //////////////States//////////////
  const [filteredMaraAgentRange, setFilterMaraAgentRange] =
    useState<FilteredMaraAgentRange>({
      lowerNumber: 0,
      highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
    });

  const [selectedFiltersObj, setSelectedFiltersObj] = useState<SearchFilters>(
    {} as SearchFilters
  );
  const [filteredList, setFilteredList] = useState<FilterdList>({});

  // هروقت فیلتر ماژور گروب عوض شد،لیست سابماژور ها رو آپدیت کن
  useEffect(() => {
    const newSubMajorList = SUB_MAJOR_GROUP.filter(
      (item: AnszcoGroup) =>
        Math.trunc(item.code / 10) ===
        selectedFiltersObj?.anzcoGropup?.majorGroup?.code
    );
    setFilteredList({ subMajorGroup: newSubMajorList });
  }, [selectedFiltersObj?.anzcoGropup?.majorGroup]);

  // هروقت فیلتر ساب ماژور گروپ عوض شد،لیست مینور گروپ ها رو آپدیت کن
  useEffect(() => {
    const newMinorList = Minor_GROUP.filter(
      (item: AnszcoGroup) =>
        Math.trunc(item.code / 10) ===
        selectedFiltersObj?.anzcoGropup?.subMajorGroup?.code
    );
    setFilteredList((prev: FilterdList) => ({
      subMajorGroup: prev.subMajorGroup,
      minorGroup: newMinorList,
    }));
  }, [selectedFiltersObj?.anzcoGropup?.subMajorGroup]);
  ////////////////////////////////////////
  //////////////handlers////////////////
  ///////////////////////////////////////
  function resetFilters() {
    setSelectedFiltersObj({} as SearchFilters);
    setFilterMaraAgentRange({
      lowerNumber: 0,
      highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
    });
    setFilteredList({} as FilterdList);
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
  function setFiltersByValue({
    filterKey,
    filterValue,
    locale,
  }: {
    filterKey: 'MAJOR_GROUP' | 'SUB_MAJOR_GROUP' | 'MINOR_GROUP' | 'UNIT_GROUP';
    filterValue: string;
    locale: Languages;
  }) {
    //
    switch (filterKey) {
      // اگه فیلتری برای ماژور گروپ ها انتخاب شده بود
      case 'MAJOR_GROUP':
        // ببین آبجکتی پیدا میکنی که با این فیلتر همخونی داشته باشه
        const newFilter_MojorGroup = MAJOR_GROUP.find(
          (item) => item.title[locale] === filterValue
        );

        break;

      // اگه فیلتری برای ساب ماژور گروپ ها انتخاب شده بود
      case 'SUB_MAJOR_GROUP':
        // ببین آبجکتی پیدا میکنی که با این فیلتر همخونی داشته باشه
        const newFilter_SubMojorGroup = SUB_MAJOR_GROUP.find(
          (item) => item.title[locale] === filterValue
        );

        // اگه پیدا کردی
        if (newFilter_SubMojorGroup) {
          // بزارش توی استیت فیلترها
          setSelectedFiltersObj({
            anzcoGropup: {
              majorGroup: selectedFiltersObj.anzcoGropup.majorGroup,
              subMajorGroup: newFilter_SubMojorGroup,
            },
          });
        }
        break;
      case 'MINOR_GROUP':
        // ببین آبجکتی پیدا میکنی که با این فیلتر همخونی داشته باشه
        const newFilter_MinorGroup = Minor_GROUP.find(
          (item) => item.title[locale] === filterValue
        );

        // اگه پیدا کردی
        if (newFilter_MinorGroup) {
          // بزارش توی استیت فیلترها
          setSelectedFiltersObj({
            anzcoGropup: {
              majorGroup: selectedFiltersObj.anzcoGropup.majorGroup,
              subMajorGroup: selectedFiltersObj.anzcoGropup.subMajorGroup,
              minorGroup: newFilter_MinorGroup,
            },
          });
        }
        break;
    }
  }

  return (
    <SearchFilterContext.Provider
      value={{
        setFiltersByValue,
        //
        selectedFiltersObj,
        setSelectedFiltersObj,
        //
        filteredList,
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
