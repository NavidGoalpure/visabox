import {
  AnszcoGroup,
  MAJOR_GROUP,
  Minor_GROUP,
  SUB_MAJOR_GROUP,
} from 'Consts/Occupations/anszco';
import { Languages } from 'Interfaces';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FilterdList, SearchFilter } from '../interfaces';

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
  selectedFiltersObj: SearchFilter;
  setSelectedFiltersObj: Dispatch<SetStateAction<SearchFilter>>;
  //
  filteredList: FilterdList;
}

const useFilters = (): ReturnData => {
  const [selectedFiltersObj, setSelectedFiltersObj] = useState<SearchFilter>(
    {} as SearchFilter
  );

  const [filteredList, setFilteredList] = useState<FilterdList>({});
  //////////////////////////////////////////////////////////
  ///////////update Sub Magor group/////////////////////////////
  //////////////////////////////////////////////////////////
  // هروقت فیلتر ماژور گروب عوض شد،لیست سابماژور ها رو آپدیت کن
  useEffect(() => {
    const newSubMajorList = SUB_MAJOR_GROUP.filter(
      (item: AnszcoGroup) =>
        Math.trunc(item.code / 10) ===
        selectedFiltersObj?.anzcoGropup?.majorGroup?.code
    );
    setFilteredList({ subMajorGroup: newSubMajorList });
  }, [selectedFiltersObj?.anzcoGropup?.majorGroup]);
  //////////////////////////////////////////////////////////
  ///////////update Minor group/////////////////////////////
  //////////////////////////////////////////////////////////
  // هروقت فیلتر ماژور گروب عوض شد،لیست سابماژور ها رو آپدیت کن
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
  ///////////////////////////////////////////
  /**
   *این فانکشن یک مقدار برای ماژور گروپ رو میگیره و فیلتر رنج معادل اون رو برمیگردونه
   * اگه مقداری پیدا نشه عدد -۱ رو برمیگردونه
   * همچنین به عنوان یک استیت جدید ماژور گروپ رو به روز میکنه
   *
   * @param {{
   *   value: string;
   *   locale: Languages;
   * }}
   * @return {*}  FilterRange
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
        if (newFilter_MojorGroup)
          // بزارش توی استیت فیلترها
          setSelectedFiltersObj({
            anzcoGropup: { majorGroup: newFilter_MojorGroup },
          });
        break;

      // اگه فیلتری برای ساب ماژور گروپ ها انتخاب شده بود
      case 'SUB_MAJOR_GROUP':
        // ببین آبجکتی پیدا میکنی که با این فیلتر همخونی داشته باشه
        const newFilter_SubMojorGroup = SUB_MAJOR_GROUP.find(
          (item) => item.title[locale] === filterValue
        );

        // اگه پیدا کردی
        if (newFilter_SubMojorGroup)
          // بزارش توی استیت فیلترها
          setSelectedFiltersObj({
            anzcoGropup: {
              majorGroup: selectedFiltersObj.anzcoGropup.majorGroup,
              subMajorGroup: newFilter_SubMojorGroup,
            },
          });
        break;

      default:
        break;
    }
  }

  // function selectMajorGroupAndGiveNewFilterRange({
  //   value,
  //   locale,
  // }: {
  //   value: string;
  //   locale: Languages;
  // }): FilteredRang {
  //   const selectedNumber =
  //     MAJOR_GROUP.find((item) => item.title[locale] === value)?.code || 0;
  //   setMajorGroup(selectedNumber);
  //   // چون کدهامون ۶ رقمی هستن در عدد صدهزار ضرب میکنیم
  //   const lowerNumber = selectedNumber * 100000 - 1;
  //   const highestNumber = selectedNumber * 100000 + 100000;
  //   return { lowerNumber, highestNumber };
  // }
  return {
    setFiltersByValue,
    //
    selectedFiltersObj,
    setSelectedFiltersObj,
    //
    filteredList,
  };
};
export default useFilters;
