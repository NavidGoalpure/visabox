import { sanityClient } from 'Utils/sanity';
import { Occupation } from 'Interfaces/Documents/occupation';

//////////////////////////
////////////////////////////
/**
 * گروک کوئری مورد نیاز برای گرفتن یک لیست از همه آکوپیشن-کد ها رو تولید میکنه
 * @returns
 */
const getAllOccupationCodesQuery = (): string => {
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
const getAllOccupationCodes = async (): Promise<Occupation[]> => {
  const occupations = getAllOccupationCodesQuery();
  const data = await sanityClient.fetch(occupations);
  return data;
};
export { getAllOccupationCodes };
