import { sanityClient } from 'Utils/sanity';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { ClientError } from '@sanity/client';
import { OccupationDetailRes } from './interface';
import { ParsedUrlQuery } from 'querystring';

/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getDetailQuery = (baseOn: 'SLUG' | 'CODE'): string => {
  const query = `*[_type=='occupation' && ${
    baseOn === 'SLUG' ? 'slug.current == $slug' : 'code == $code'
  }] [0]
   {
 _id,
 code,
 slug,
   title,
   backlog_section {
     submited_189,
     invited_189,
     lodged_189,
     total_submited_189,
     total_invited_189,
     total_lodged_189,
     submited_190,
     invited_190,
     lodged_190,
     submited_by_state_190[]{
       eoi_count,
       territory->{
         abv
       },
     },
     invited_by_state_190[]{
       eoi_count,
       territory->{
         abv
       },
     },
    lodged_by_state_190[]{
       eoi_count,
       territory->{
         abv
       },
     },
     invited_491,
     submited_491,
     lodged_491,
     invited_by_state_491[]{
       eoi_count,
       territory->{
         abv
       },
     },
     submited_by_state_491[]{
       eoi_count,
       territory->{
         abv
       },
     },
      lodged_by_state_491[]{
       eoi_count,
       territory->{
         abv
       },
     },
     invited_491_family,
     submited_491_family,
     lodged_491_family,
     total_invited_491_family,
     total_submited_491_family,
     total_lodged_491_family,

     
   },
   anzsco_section {...,
    description,
    major_group,
    submajor_group,
    minor_group,
    unit_group  ->{
      description,
      skill_level,
      code,
      title,
      tasks,
      }
    },
 assessing_authority,
 visa_option_section,
 territory_section[]{
   territory->{
      title,
      abv
    },
    html_desc
 },
 'similarOccupations': *[_type=='occupation' && anzsco_section.unit_group._ref == ^.anzsco_section.unit_group._ref]{
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
  }
 }`;
  return query;
};

/////////////////

/**
 * درخواست به سنیتی برای گرفتن اطلاعات یک آکیوپیشن بر اساس اسلاگ
 * @param  {string} slug
 * @returns {Occupation}
 */
const getOccupationDetail = async ({
  slug,
  code,
}: {
  slug?: string;
  code?: number;
}): Promise<OccupationDetailRes> => {
  const params = slug ? { slug } : { code };
  const baseOn: 'SLUG' | 'CODE' = slug ? 'SLUG' : 'CODE';
  try {
    const data = await sanityClient.fetch<OccupationDetailRes | ClientError>(
      getDetailQuery(baseOn),
      params
    );
    return data as OccupationDetailRes;
  } catch (error) {
    throw error;
  }
};

//////////////
const getAllOccupationSlugs = async (): Promise<Occupation[] | []> => {
  const query = `*[_type=='occupation' && !(_id in path('drafts.**'))]{
  slug{
    current
  },
}`;
  try {
    const Occupations = await sanityClient.fetch(query);
    return Occupations as Occupation[];
  } catch (error) {
    return [];
  }
};
///////////////
const getAllOccupationCodes = async (): Promise<Occupation[] | []> => {
  const query = `*[_type=='occupation' && !(_id in path('drafts.**'))]{
 code
}`;
  try {
    const Occupations = await sanityClient.fetch(query);
    return Occupations as Occupation[];
  } catch (error) {
    return [];
  }
};
export { getOccupationDetail, getAllOccupationSlugs, getAllOccupationCodes };
