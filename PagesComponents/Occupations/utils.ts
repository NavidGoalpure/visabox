import { sanityClient } from '../../sanity';

import { Occupation } from 'interfaces/Documents/Occupation';
import { OCCUPATION_PER_PAGE } from './const';

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
  const data = sanityClient.fetch(getListQuery({ lastCode }));
  return data;
};
////////////////////////////////
//////lastOccupationCode////////
///////////////////////////////
const lastOccupationCodeQuery = `*[_type=='occupation']| order(code desc)[0] {
  code,
}`;
const getlastOccupationCode = async (): Promise<Occupation> => {
  const data = sanityClient.fetch(lastOccupationCodeQuery);
  return data;
};
export { getListQuery, getOccupationsList, getlastOccupationCode };