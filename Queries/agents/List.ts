import { sanityClient } from 'Utils/sanity';

import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { AGENTS_PER_PAGE } from 'PagesComponents/Agents/List/const';
import { FilteredMaraAgentRange } from 'PagesComponents/Agents/List/interfaces';

//////////////////////////
/**
 * این متد عبارتی که کاربر سرچ کرده رو به عنوان ورودی میگیره و فیلتر مناسب سنیتی رو تولید میکنه
 * این عبارت در اسم و فامیل وکیل که یک فیلد هست سرچ میشه
 * فعلا سرج نام غیر انگلیسی ساپورت نمیشه اما بعدا میتونه اضافه بشه
 * @param {string} searchValue عبارت سرچ شده
 * @returns {string} فیلتر مورد نیاز گروک برای سنیتی
 */
const getSearchConditions = (searchValue: string): string => {
  if (searchValue === '') return '';
  return `&& name.en match "*${searchValue}*"`;
};
////////////////////////////
/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * برای وقتیه که کاربر از سرچ پیشرفته استفاده میکنه و یک رنج خاصی از کدها رو نشون میدیم. این پارامتر عدد پایین رنج رو نشون میده
 * @param FilteredAgentRange_lowerNumber
 *  * برای وقتیه که کاربر از سرچ پیشرفته استفاده میکنه و یک رنج خاصی از کدها رو نشون میدیم. این پارامتر عدد بالای رنج رو نشون میده
 * @param FilteredAgentRange_highestNumber
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getListQuery = ({
  lastMaraNumber = '0',
  searchCondition,
  filteredMaraAgentRange,
}: {
  lastMaraNumber?: string;
  searchCondition: string;
  filteredMaraAgentRange: FilteredMaraAgentRange;
}): string => {
  const query = `*[_type=='agent' && mara_number>'${lastMaraNumber}' && mara_number<'${filteredMaraAgentRange.highestNumber}' ${searchCondition} ]| order(mara_number) [0...${AGENTS_PER_PAGE}] {
    _id,
    slug,
    name,
    website,
    contact,
    mara_number
}`;
  return query;
};
/////////////////
/**
 * درخواست به سنیتی برای گرفتن لیست آکیوپیشن ها  با فیلترهای تعیین شده از سمت کاربر به صورت صفحه به صحفه
 * @param  mara_number کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns آرایه ای از آکیوپیشن ها
 */
type QueryParams = {
  lastMaraNumber?: string;
  search: string;
  filteredMaraAgentRange: FilteredMaraAgentRange;
};
const getAgentsList = async ({
  lastMaraNumber = '0',
  search,
  filteredMaraAgentRange,
}: QueryParams): Promise<MaraAgent[]> => {
  const searchCondition = getSearchConditions(search);
  const data = await sanityClient.fetch(
    getListQuery({
      lastMaraNumber,
      searchCondition,
      filteredMaraAgentRange,
    })
  );
  return data;
};
////////////////////////////////
//////lastAgentCode////////
///////////////////////////////

/**
 * یک رکوئست به سنیتی زده میشه تا بفهمیم اگه همه آکیوپیشن ها بر اساس کد مرتبط شده باشن، آخرین آکوپیشن حاوی چه اطلاعاتی هست
 * این کار به این صورت انجام میشه که کدها رو برعکس مرتب میکنیم و اولین عضو آرایه رو میفرستیم
 * @param عبارت سرچ شده
 * @returns
 */
const getlastAgentCode = async (): Promise<MaraAgent> => {
  const lastAgentCodeQuery = `*[_type=='agent']| order(mara_number desc)[0] {
  mara_number,
}`;
  const data = await sanityClient.fetch(lastAgentCodeQuery);
  return data;
};

export { getListQuery, getAgentsList, getlastAgentCode };
