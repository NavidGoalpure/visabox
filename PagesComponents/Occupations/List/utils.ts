import { Occupation } from 'Interfaces/Documents/occupation';
import { InfiniteData } from 'react-query';

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
export { getLastFechedOccupation, getHasNextPage };
