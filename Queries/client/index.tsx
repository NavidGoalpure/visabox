import { Client } from 'Interfaces/Database/Client';
import { sanityClient } from 'Utils/sanity';

interface GetClientDetail {
  reqParams: string;
  resParams: string;
}
export const getClientDetail = async ({
  reqParams,
  resParams,
}: GetClientDetail): Promise<{
  client: Client[];
}> => {
  const clientreqParams = reqParams;
  const queryParams = `*[_type=='client' && ${clientreqParams} ]{
${resParams}
  }`;
  try {
    const data = await sanityClient.fetch(queryParams);

    return { client: data };
  } catch (error) {
    throw error;
  }
};
