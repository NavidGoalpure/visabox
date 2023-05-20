import { sanityClient } from 'Utils/sanity';
import { Client_Sanity } from './interface';

interface GetClientDetail {
  reqParams: string;
  resParams: string;
}
export const getClientDetail = async ({
  reqParams,
  resParams,
}: GetClientDetail): Promise<{
  Client: Client_Sanity[];
}> => {
  const clientreqParams = reqParams;
  const queryParams = `*[_type=='client' && ${clientreqParams} ]{
${resParams}
  }`;
  try {
    const data = await sanityClient.fetch(queryParams);

    return { Client: data };
  } catch (error) {
    throw error;
  }
};
