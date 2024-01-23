import { sanityClient } from 'Utils/sanity';

import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { ClientError } from '@sanity/client';

const getAgentDetailQuery = (): string => {
  const query = `*[_type=='agent' && status=='active' && !(_id in path('drafts.**')) && slug.current == $slug] [0]
   {
    _id,
    mara_number,
    slug,
    agencies,
    website,
    name,
    email,
    "hasAvatar": select(avatar==''=>false,true)

   }`;
  return query;
};
//////////////
const getAgentAvatarQuery = (): string => {
  const query = `*[_type=='agent' && status=='active' && !(_id in path('drafts.**')) && slug.current == $slug] [0]
   {
    avatar
   }`;
  return query;
};
/////////////////
//////////////
const getAllAgentsSlugs = async (): Promise<MaraAgent[] | []> => {
  const query = `*[_type=='agent' && status=='active' && !(_id in path('drafts.**'))]{
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
    return data as MaraAgent;
  } catch (error) {
    throw error;
  }
};
/**
 * درخواست به سنیتی برای گرفتن آواتار یک ایجنت بر اساس اسلاگ
 * چون حجم آواتار وکیلها در بعضی مواقع خیلی زیاده، رکوئست درخواست آوارتار رو جدا کردیم که دیتای اصلی رو کند نکنه
 * @param  {string} slug
 * @returns {Occupation}
 */
const getAgentAvatar = async ({
  slug,
}: {
  slug: string | undefined;
}): Promise<string | null> => {
  if (!slug) {
    console.error('No slug provided for getAgentAvatar');
    return null;
  }

  try {
    const params = { slug };
    const data = await sanityClient.fetch<MaraAgent | ClientError>(
      getAgentAvatarQuery(),
      params
    );

    if ('avatar' in data) {
      return (data as MaraAgent).avatar || null;
    } else {
      console.warn('No avatar data found for the given slug');
      return null;
    }
  } catch (error: any) {
    console.error('Error fetching agent avatar:', error.message);
    throw error; // Rethrow the error if needed elsewhere
  }
};
export { getAllAgentsSlugs, getAgentDetail, getAgentAvatar };
