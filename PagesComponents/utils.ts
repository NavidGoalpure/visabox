import { sanityClient } from '../sanity';

import { Occupation } from 'interfaces/Documents/Occupation';
import { OCCUPATION_PER_PAGE } from './Occupations/const';

const getListQuery = ({ lastCode = 0 }: { lastCode?: number }): string => {
  const query = `*[_type=='occupation' && code>${lastCode} ]| order(code) [0...${OCCUPATION_PER_PAGE}] {
  _id,
  slug,
  code,
  title,
  anzsco_section,
}`;
  return query;
};

const getOccupationsList = async ({
  lastCode = 0,
}: {
  lastCode?: number;
}): Promise<Occupation[]> => {
  console.log('navid lastCode1=', lastCode);
  const data = sanityClient.fetch(getListQuery({ lastCode }));
  return data;
};

export { getListQuery, getOccupationsList };
