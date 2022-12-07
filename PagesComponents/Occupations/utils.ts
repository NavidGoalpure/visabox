import { sanityClient } from '../../sanity';

import { Occupation } from 'interfaces/Documents/Occupation';
import { OCCUPATION_PER_PAGE } from './const';
import { InfiniteData } from 'react-query';

const getListQuery = ({
  lastCode = 0,
  searchCondition,
}: {
  lastCode?: number;
  searchCondition: string;
}): string => {
  const query = `*[_type=='occupation' && code>${lastCode} ${searchCondition} ]| order(code) [0...${OCCUPATION_PER_PAGE}] {
    _id,
    slug,
    code,
    title,
    anzsco_section,
}`;
  return query;
};
/////////
type QueryParams = {
  lastCode?: number;
  search: string;
};
const getOccupationsList = async ({
  lastCode = 0,
  search,
}: QueryParams): Promise<Occupation[]> => {
  const searchCondition = search ? `&& title.en match "*${search}*"` : '';
  const data = sanityClient.fetch(getListQuery({ lastCode, searchCondition }));
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
///////////////////////////////////
const getHasNextPage = ({
  lastOccupation,
  lastFechedOccupation,
}: {
  lastOccupation: Occupation | undefined;
  lastFechedOccupation: Occupation | undefined;
}): boolean => {
  if (lastOccupation?.code === undefined) return false;
  if (lastFechedOccupation?.code === undefined) return false;
  if (lastOccupation?.code <= lastFechedOccupation?.code) return false;
  return true;
};
/////////////////////////
const getLastFechedOccupation = (
  occupations: InfiniteData<Occupation[]> | undefined
) => {
  return occupations?.pages?.[occupations?.pages.length - 1][
    occupations?.pages?.[occupations?.pages.length - 1].length - 1
  ];
};
//////////
export {
  getListQuery,
  getOccupationsList,
  getlastOccupationCode,
  getHasNextPage,
  getLastFechedOccupation,
};
