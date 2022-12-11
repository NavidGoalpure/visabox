import { sanityClient } from '../../sanity';
import { Occupation } from 'interfaces/Documents/occupation';

/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getDetailQuery = (slug: string): string => {
  const query = `*[_type=='occupation' && slug.current == $slug] [0]
   {
 _id,
 code,
   title,
   anzsco_section {...,
    major_group,
    submajor_group,
    minor_group,
    unit_group  ->{
   skill_level,
   code
 }
    },
 assessing_authority,
 visa_option_section
 }`;
  return query;
};

/////////////////

/**
 * درخواست به سنیتی برای گرفتن اطلاعات یک آکیوپیشن بر اساس اسلاگ
 * @param  {string} slug
 * @returns {Occupation}
 */
const getOccupationDetail = async (slug: string): Promise<Occupation> => {
  const params = { slug };
  const data = await sanityClient.fetch(getDetailQuery(slug), params);
  return data;
};

export { getOccupationDetail };
