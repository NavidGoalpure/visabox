import { sanityClient } from 'Utils/sanity';

import { Occupation } from 'Interfaces/Occupation/occupation';
import { OCCUPATION_PER_PAGE } from 'PagesComponents/Occupations/List/const';
import { FilteredOccupationRange } from 'PagesComponents/Occupations/List/interfaces';
import { SearchFilterContext } from 'PagesComponents/Occupations/List/Context/SearchFilter';
import { useContext } from 'react';

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
 * برای وقتیه که کاربر از سرچ پیشرفته استفاده میکنه و یک رنج خاصی از کدها رو نشون میدیم. این پارامتر عدد پایین رنج رو نشون میده
 * @param FilteredOccupationRange_lowerNumber
 *  * برای وقتیه که کاربر از سرچ پیشرفته استفاده میکنه و یک رنج خاصی از کدها رو نشون میدیم. این پارامتر عدد بالای رنج رو نشون میده
 * @param FilteredOccupationRange_highestNumber
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getListQuery = ({
  lastCode = 0,
  searchCondition,
  filteredOccupationRange,
}: {
  lastCode?: number;
  searchCondition: string;
  filteredOccupationRange: FilteredOccupationRange;
}): string => {
  const query = `*[_type=='occupation' && code>${lastCode} && code<${filteredOccupationRange.highestNumber} && code>${filteredOccupationRange.lowerNumber} ${searchCondition} ]| order(code) [0...${OCCUPATION_PER_PAGE}] {
    _id,
    slug,
    code,
    title,
    anzsco_section{
      description,
     unit_group->{
      tasks,
     },
    }
}`;
  return query;
};
/////////////////
/**
 * درخواست به سنیتی برای گرفتن لیست آکیوپیشن ها  با فیلترهای تعیین شده از سمت کاربر به صورت صفحه به صحفه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns آرایه ای از آکیوپیشن ها
 */
type QueryParams = {
  lastCode?: number;
  search: string;
  filteredOccupationRange: FilteredOccupationRange;
};
const getOccupationsList = async ({
  lastCode = 0,
  search,
  filteredOccupationRange,
}: QueryParams): Promise<Occupation[]> => {
  const searchCondition = getSearchConditions(search);
  const data = await sanityClient.fetch(
    getListQuery({
      lastCode,
      searchCondition,
      filteredOccupationRange,
    })
  );
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
  const data = await sanityClient.fetch(lastOccupationCodeQuery);
  return data;
};

export { getListQuery, getOccupationsList, getlastOccupationCode };
