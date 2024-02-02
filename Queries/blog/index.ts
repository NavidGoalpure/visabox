import { Languages } from 'Interfaces';
import { IBlog } from 'Interfaces/Database/blog';
import { sanityClient } from 'Utils/sanity';

export const getBlogsWithExcerpts = async (
  locale: Languages
): Promise<IBlog[] | []> => {
  const query = `*[_type == "blog" && language=='${locale}' && !(_id in path('drafts.**'))] {
   "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
   mainImage,
   title,
   slug,
   _updatedAt,
   hashtag,
   
}`;
  try {
    const blogs = await sanityClient.fetch(query);
    return blogs as IBlog[];
  } catch (error) {
    return [];
  }
};
