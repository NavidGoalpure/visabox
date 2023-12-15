import { sanityClient } from 'Utils/sanity';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';

//////////////////////////
////////////////////////////
/**
 * گروک کوئری مورد نیاز برای گرفتن یک لیست از همه آکوپیشن-کد ها رو تولید میکنه
 * @returns
 */
const getAllOccupationSlugsQuery = (): string => {
  const query = `*[_type=='occupation'] {
 slug,
 }`;
  return query;
};
/////////////////
/**
 * درخواست به سنیتی برای گرفتن لیست همه آکیوپیشن-کد ها
 * @returns آرایه ای از آکیوپیشن ها
 */
const getAllOccupationSlugs = async (): Promise<Occupation[]> => {
  const occupations = getAllOccupationSlugsQuery();
  const data = await sanityClient.fetch(occupations);
  return data;
};
export { getAllOccupationSlugs };
