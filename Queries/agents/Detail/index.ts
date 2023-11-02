import { sanityClient } from 'Utils/sanity';

import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { ClientError } from '@sanity/client';

/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getAgentDetailQuery = (): string => {
  const query = `*[_type=='agent' && !(_id in path('drafts.**')) && slug.current == $slug] [0]
   {
    ...
   }`;
  return query;
};

/////////////////
//////////////
const getAllAgentsSlugs = async (): Promise<MaraAgent[] | []> => {
  const query = `*[_type=='agent' && !(_id in path('drafts.**'))]{
  slug{
    current
  },
}`;
  try {
    const agents = await sanityClient.fetch(query);
    return agents as MaraAgent[];
  } catch (error) {
    return [];
  }
};
///////////////
const getAllPersianAgentsSlugs = async (): Promise<MaraAgent[] | []> => {
  const query = `*[_type=='agent' && !(_id in path('drafts.**')) && agencies[].state match "Iran"]{
  slug{
    current
  },
}`;
  try {
    const agents = await sanityClient.fetch(query);
    return agents as MaraAgent[];
  } catch (error) {
    return [];
  }
};
/////////////////

/**
 * درخواست به سنیتی برای گرفتن اطلاعات یک ایجنت بر اساس اسلاگ
 * @param  {string} slug
 * @returns {Occupation}
 */
const getAgentDetail = async ({
  slug,
}: {
  slug: string | undefined;
}): Promise<MaraAgent> => {
  const params = { slug };

  if (!slug) throw 'This is no Slug';
  try {
    const data = await sanityClient.fetch<MaraAgent | ClientError>(
      getAgentDetailQuery(),
      params
    );
    console.log('***navid params=', params);
    return data as MaraAgent;
  } catch (error) {
    throw error;
  }
};
export { getAllAgentsSlugs, getAllPersianAgentsSlugs, getAgentDetail };
