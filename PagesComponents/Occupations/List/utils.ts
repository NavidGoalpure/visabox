import { MAJOR_GROUP } from 'Consts/Occupations/anszco';
import { Languages } from 'Interfaces';
import { Occupation } from 'Interfaces/Documents/occupation';
import { InfiniteData } from 'react-query';
import { FilteredRang } from './interfaces';

/**
 * به ما میگه که آیا صفحه دیگه ای هم برای پینجینیشن وجود داره یا خیر
 * @param lastOccupation  آخرین آکوپیشن
 * @param  lastFechedOccupation آخرین آکوپیشنی که فچ کردیم
 * @returns boolean
 */
const getHasNextPage = ({
  lastOccupation,
  lastFechedOccupation,
}: {
  lastOccupation: Occupation | undefined;
  lastFechedOccupation: Occupation | undefined;
}): boolean => {
  if (lastOccupation?.code === undefined) return false;
  if (lastFechedOccupation?.code === undefined) return false;
  if (lastOccupation?.code <= lastFechedOccupation?.code) return false;
  return true;
};
/////////////////////////
/**
 * از توی لیست آکیوپیشن های فچ شده، آخریش رو برمیگردونه
 * @param {InfiniteData<Occupation[]>|undefined} occupations همه آکوپیشن های فچ شده
 * @returns {Occupation | undefined } آخرین آکوپیشن فچ شده، اگه هیچ آکیوپیشنی فچ نشده باشه، آندیفایند برمیگردونه
 */
const getLastFechedOccupation = (
  occupations: InfiniteData<Occupation[]> | undefined
): Occupation | undefined => {
  return occupations?.pages?.[occupations?.pages.length - 1][
    occupations?.pages?.[occupations?.pages.length - 1].length - 1
  ];
};
//////////
/**
 *این فاینکشن یک مقدار برای ماژور گروپ رو میگیره و کد معادل اون رو برمیگردونه
 * اگه مقداری پیدا نشه عدد -۱ رو برمیگردونه
 *
 * @param {{
 *   value: string;
 *   locale: Languages;
 * }}
 * @return {*}  {number}
 */
function findFilterRangeForMajorGroup({
  value,
  locale,
}: {
  value: string;
  locale: Languages;
}): FilteredRang {
  const selectedNumber =
    MAJOR_GROUP.find((item) => item.title[locale] === value)?.code || 0;
  // چون کدهامون ۶ رقمی هستن در عدد صدهزار ضرب میکنیم
  const lowerNumber = selectedNumber * 100000 - 1;
  const highestNumber = selectedNumber * 100000 + 100000;
  return { lowerNumber, highestNumber };
}
//////////////////////////////
//////////
/**
 *این فاینکشن یک مقدار برای ماژور گروپ رو میگیره و کد معادل اون رو برمیگردونه
 * اگه مقداری پیدا نشه عدد -۱ رو برمیگردونه
 *
 * @param {{
 *   value: string;
 *   locale: Languages;
 * }}
 * @return {*}  {number}
 */

export {
  getLastFechedOccupation,
  getHasNextPage,
  findFilterRangeForMajorGroup,
};
