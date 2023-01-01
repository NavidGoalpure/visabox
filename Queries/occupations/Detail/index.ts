import { sanityClient } from 'Utils/sanity';
import { Occupation } from 'Interfaces/Documents/occupation';
import { ClientError } from '@sanity/client';
import { OccupationDetailRes } from './interface';

/**
 * گروک کوئری مورد نیاز برای لیست آکیوپیشن ها رو تولید میکنه
 * @param  lastCode کد آخرین آکیوپیشنی که در پیج قبلی گرفته شده. این کد برای پیجینیشن مورد نیازه تا در پیج های بعدی کدهای تکراری نیاد
 * @param  searchCondition عبارتی که یوزر در باکس سرچ تایپ کرده
 * @returns
 */
const getDetailQuery = (): string => {
  const query = `*[_type=='occupation' && slug.current == $slug] [0]
   {
 _id,
 code,
   title,
   backlog_section {
     invited_189,
     submited_189,
     invited_190,
     submited_190,
     invited_491,
     submited_491,
     invited_491f,
     submited_491f,
     submited_by_state_190[]{
       eoi_count,
       territory->{
         abv
       },
     },
     invited_by_state_190,
     submited_by_state_491[]{
       eoi_count,
       territory->{
         abv
       },
     },
     invited_by_state_491,
     
   },
   anzsco_section {...,
    major_group,
    submajor_group,
    minor_group,
    unit_group  ->{
      skill_level,
      code,
      description,
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
     unit_group->{
      tasks,
      description
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
const getOccupationDetail = async (
  slug: string
): Promise<OccupationDetailRes> => {
  const params = { slug };
  try {
    const data = await sanityClient.fetch<OccupationDetailRes | ClientError>(
      getDetailQuery(),
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
export { getOccupationDetail, getAllOccupationSlugs };
