// این هوک هندلرهای دکمه های سرچ پیشرفته را مهیا میکند
import {
  AnszcoGroup,
  MAJOR_GROUP,
  Minor_GROUP,
  SUB_MAJOR_GROUP,
} from 'Consts/Occupations/anszco';
import { Languages } from 'Interfaces';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  FilterdList,
  FilteredOccupationRange,
  SearchFilters,
} from '../interfaces';
import {
  getNewRangeBaseOnMajorGroup,
  getNewRangeBaseOnMinorGroup,
  getNewRangeBaseOnSubmajorGroup,
} from '../utils';

interface ReturnData {
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
}
interface Props {
  setFilterOccupationRange: Dispatch<SetStateAction<FilteredOccupationRange>>;
}
const useFilterSearch = ({ setFilterOccupationRange }: Props): ReturnData => {
  //////////////States//////////////
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

  // هروقت فیلتر ساب ماژور گروپ عوض شد،لیست سابماژور ها رو آپدیت کن
  useEffect(() => {
    const newMinorList = Minor_GROUP.filter(
      (item: AnszcoGroup) =>
        Math.trunc(item.code / 10) ===
        selectedFiltersObj?.anzcoGropup?.subMajorGroup?.code
    );
    setFilteredList({
      subMajorGroup: filteredList.subMajorGroup,
      minorGroup: newMinorList,
    });
  }, [selectedFiltersObj?.anzcoGropup?.subMajorGroup]);

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

        // اگه پیدا کردی
        if (newFilter_MojorGroup) {
          // بزارش توی استیت فیلترها
          setSelectedFiltersObj({
            anzcoGropup: { majorGroup: newFilter_MojorGroup },
          });
          // رنج آکیوپیشن هایی که باید سرچ بشن رو به روز کن
          const newRange: FilteredOccupationRange = getNewRangeBaseOnMajorGroup(
            newFilter_MojorGroup.code
          );
          setFilterOccupationRange({
            lowerNumber: newRange.lowerNumber,
            highestNumber: newRange.highestNumber,
          });
        }
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
          // رنج آکیوپیشن هایی که باید سرچ بشن رو به روز کن
          const newRange: FilteredOccupationRange =
            getNewRangeBaseOnSubmajorGroup(newFilter_SubMojorGroup.code);
          setFilterOccupationRange({
            lowerNumber: newRange.lowerNumber,
            highestNumber: newRange.highestNumber,
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
          // رنج آکیوپیشن هایی که باید سرچ بشن رو به روز کن
          const newRange: FilteredOccupationRange = getNewRangeBaseOnMinorGroup(
            newFilter_MinorGroup.code
          );
          setFilterOccupationRange({
            lowerNumber: newRange.lowerNumber,
            highestNumber: newRange.highestNumber,
          });
        }
        break;
    }
  }

  return {
    setFiltersByValue,
    //
    selectedFiltersObj,
    setSelectedFiltersObj,
    //
    filteredList,
  };
};
export default useFilterSearch;
