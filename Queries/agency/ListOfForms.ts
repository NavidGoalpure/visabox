import { sanityClient } from 'Utils/sanity';
import { ClientCompletedForms, Client } from 'Interfaces/Database/Client';

export const Forms_PER_PAGE = 9;

//////////////////////////
////////////////////////////
/**
 * گروک کوئری مورد نیاز برای لیست بیسیک فرم ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getlistOfBasicFormQuery = ({
  lastFormDate,
  resParams,
}: {
  lastFormDate: string;
  resParams: string;
}): string => {
  const query = `*[_type=='client' &&
   _updatedAt < "${lastFormDate}" &&
   "${ClientCompletedForms.BasicForm}" in completed_forms[].forms &&
   !(_id in path('drafts.**')) &&
    is_sharable == true ]
   | order(_updatedAt desc) [0...${Forms_PER_PAGE}] {
 ${resParams}
}`;
  return query;
};
/////////////////
/**
 * درخواست به سنیتی برای گرفتن لیست بیسیک-فرم ها  به صورت صفحه به صحفه
 * @param  lastCode تاریخ ساخت آخرین فرمی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @returns آرایه ای از بیسیک-فرم ها
 */
type QueryParams = {
  lastFormDate: string;
  resParams: string;
};
const getlistOfBasicForm = async ({
  lastFormDate = '',
  resParams,
}: QueryParams): Promise<Client[]> => {
  const data = await sanityClient.fetch(
    getlistOfBasicFormQuery({
      lastFormDate,
      resParams,
    })
  );
  return data;
};

export { getlistOfBasicForm };
