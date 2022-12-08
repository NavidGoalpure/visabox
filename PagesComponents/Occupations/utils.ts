import { sanityClient } from '../../sanity';

import { Occupation } from 'interfaces/Documents/occupation';
import { OCCUPATION_PER_PAGE } from './const';
import { InfiniteData } from 'react-query';

/**
 * این متد عبارتی که کاربر سرچ کرده رو به عنوان ورودی میگیره و فیلتر مناسب سنیتی رو تولید میکنه
 * اگه عبارت یک عدد بوده باشه، فیلتر برای فیلد کد، و اگه تکست باشه، برای فیلد تایتل - انگلیسی- تولید میشه
 * فعلا سرچ فارسی ساپورت نمیشه اما بعدا میتونه اضافه بشه
 * @param {string} searchValue عبارت سرچ شده
 * @returns {string} فیلتر مورد نیاز گروک برای سنیتی
 */
const getSearchConditions = (searchValue: string): string => {
  if (searchValue === '') return '';
  //  اگه یک چیز استرینگ سرچ شده بود و کاربر براساس تایتل به دنبال نتیجه بود
  if (isNaN(Number(searchValue))) return `&& title.en match "*${searchValue}*"`;

  //  اگه یک چیز عددی سرچ شده بود و کاربر براساس کد به دنبال نتیجه بود
  if (isNaN(Number(searchValue)) === false)
    return `&& string(code) match "*${searchValue}*"`;

  //defensive
  return '';
};
//////////////////////////
////////////////////////////
/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getListQuery = ({
  lastCode = 0,
  searchCondition,
}: {
  lastCode?: number;
  searchCondition: string;
}): string => {
  const query = `*[_type=='occupation' && code>${lastCode} ${searchCondition} ]| order(code) [0...${OCCUPATION_PER_PAGE}] {
    _id,
    slug,
    code,
    title,
    anzsco_section{
     unit_group->{
      tasks,
      description
     },
    }
}`;
  return query;
};
/////////////////
type QueryParams = {
  lastCode?: number;
  search: string;
};
/**
 * درخواست به سنیتی برای گرفتن لیست آکیوپیشن ها  با فیلترهای تعیین شده از سمت کاربر به صورت صفحه به صحفه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns آرایه ای از آکیوپیشن ها
 */
const getOccupationsList = async ({
  lastCode = 0,
  search,
}: QueryParams): Promise<Occupation[]> => {
  const searchCondition = getSearchConditions(search);
  const data = sanityClient.fetch(getListQuery({ lastCode, searchCondition }));
  return data;
};
////////////////////////////////
//////lastOccupationCode////////
///////////////////////////////

/**
 * یک رکوئست به سنیتی زده میشه تا بفهمیم اگه همه آکیوپیشن ها بر اساس کد مرتبط شده باشن، آخرین آکوپیشن حاوی چه اطلاعاتی هست
 * این کار به این صورت انجام میشه که کدها رو برعکس مرتب میکنیم و اولین عضو آرایه رو میفرستیم
 * @param عبارت سرچ شده
 * @returns
 */
const getlastOccupationCode = async (
  searchValue: string
): Promise<Occupation> => {
  const searchCondition = getSearchConditions(searchValue);
  const lastOccupationCodeQuery = `*[_type=='occupation' ${searchCondition}]| order(code desc)[0] {
  code,
}`;
  const data = sanityClient.fetch(lastOccupationCodeQuery);
  return data;
};
///////////////////////////////////
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
export {
  getListQuery,
  getOccupationsList,
  getlastOccupationCode,
  getLastFechedOccupation,
  getHasNextPage,
};
