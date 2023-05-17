import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { InfiniteData } from 'react-query';
import { FilteredOccupationRange } from './interfaces';

/**
 * به ما میگه که آیا صفحه دیگه ای هم برای پینجینیشن وجود داره یا خیر
 * @param lastOccupation  آخرین آکوپیشن
 * @param  lastFetchedOccupation آخرین آکوپیشنی که فچ کردیم
 * @returns boolean
 */
const getHasNextPage = ({
  lastOccupation,
  lastFetchedOccupation,
}: {
  lastOccupation: Occupation | undefined;
  lastFetchedOccupation: Occupation | undefined;
}): boolean => {
  if (lastOccupation?.code === undefined) return false;
  if (lastFetchedOccupation?.code === undefined) return false;
  if (lastOccupation?.code <= lastFetchedOccupation?.code) return false;
  return true;
};
/////////////////////////
/**
 * از توی لیست آکیوپیشن های فچ شده، آخریش رو برمیگردونه
 * @param {InfiniteData<Occupation[]>|undefined} occupations همه آکوپیشن های فچ شده
 * @returns {Occupation | undefined } آخرین آکوپیشن فچ شده، اگه هیچ آکیوپیشنی فچ نشده باشه، آندیفایند برمیگردونه
 */
const getLastFetchedOccupation = (
  occupations: InfiniteData<Occupation[]> | undefined
): Occupation | undefined => {
  return occupations?.pages?.[occupations?.pages.length - 1][
    occupations?.pages?.[occupations?.pages.length - 1].length - 1
  ];
};
//////////

/**
 *کد ماژور گروپی که انتخاب شده رو میگیره و بر اساس اون میگه سرچ ما باید روی چه بازه از آکیوپیشن کدها باشه
 *
 * @param {number} code
 * @return {*}  {FilteredOccupationRange}
 */
function getNewRangeBaseOnMajorGroup(code: number): FilteredOccupationRange {
  const lowerNumber = code * 100000 - 1;
  const highestNumber = code * 100000 + 100000;
  return { lowerNumber, highestNumber };
}

/**
 *کد ساب ماژور گروپی که انتخاب شده رو میگیره و بر اساس اون میگه سرچ ما باید روی چه بازه از آکیوپیشن کدها باشه
 *
 * @param {number} code
 * @return {*}  {FilteredOccupationRange}
 */
function getNewRangeBaseOnSubmajorGroup(code: number): FilteredOccupationRange {
  const lowerNumber = code * 10000 - 1;
  const highestNumber = code * 10000 + 10000;
  return { lowerNumber, highestNumber };
}
/**
 *کد مینور گروپی که انتخاب شده رو میگیره و بر اساس اون میگه سرچ ما باید روی چه بازه از آکیوپیشن کدها باشه
 *
 * @param {number} code
 * @return {*}  {FilteredOccupationRange}
 */
function getNewRangeBaseOnMinorGroup(code: number): FilteredOccupationRange {
  const lowerNumber = code * 1000 - 1;
  const highestNumber = code * 1000 + 1000;
  return { lowerNumber, highestNumber };
}

export {
  getLastFetchedOccupation,
  getHasNextPage,
  getNewRangeBaseOnMajorGroup,
  getNewRangeBaseOnSubmajorGroup,
  getNewRangeBaseOnMinorGroup,
};
