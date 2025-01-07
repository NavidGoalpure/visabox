const getBlogDetailQuery = (): string => {
  const query = `*[_type=='blog' && status=='active' && !(_id in path('drafts.**')) && slug.current == $slug] [0]
   {
  _id,
hashtag,
language,
body,
title,
_updatedAt,
slug,
mainImage,
otherArticles[]-> {
  title,
  slug,
  mainImage
  }
   }`;
  return query;
};
import { ClientError } from '@sanity/client';
import { IBlog } from 'Interfaces/Database/blog';
////////////////////////////
import { sanityClient } from 'Utils/sanity';

const getAllBlogsSlugs = async (): Promise<IBlog[] | []> => {
  const query = `*[_type=='blog' && status=='active' && !(_id in path('drafts.**'))]{
  slug{
    current
  },
}`;
  try {
    const blogs = await sanityClient.fetch(query);
    return blogs as IBlog[];
  } catch (error) {
    return [];
  }
};
//////////////////
/**
 * درخواست به سنیتی برای گرفتن اطلاعات یک ایجنت بر اساس اسلاگ
 * @param  {string} slug
 * @returns {IBlog}
 */
const getBlogDetail = async ({
  slug,
}: {
  slug: string | undefined;
}): Promise<IBlog> => {
  const params = { slug };

  if (!slug) throw 'This is no Slug';
  try {
    const data = await sanityClient.fetch<IBlog | ClientError>(
      getBlogDetailQuery(),
      params
    );
    return data as IBlog;
  } catch (error) {
    throw error;
  }
};
const getAllBlogsSlugsAndLang = async (): Promise<IBlog[] | []> => {
  const query = `*[_type=='blog' && status=='active' && !(_id in path('drafts.**'))]{
  slug,
  language
}`;
  try {
    const blogs = await sanityClient.fetch(query);
    return blogs as IBlog[];
  } catch (error) {
    return [];
  }
};
export { getAllBlogsSlugs, getBlogDetail, getAllBlogsSlugsAndLang };
