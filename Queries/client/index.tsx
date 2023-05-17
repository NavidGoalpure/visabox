import { sanityClient } from 'Utils/sanity';
import { ClientData_Sanity } from './interface';

interface GetClientDetail {
  reqParams: string;
  resParams: string;
}
export const getClientDetail = async ({
  reqParams,
  resParams,
}: GetClientDetail): Promise<{
  clientData: ClientData_Sanity[];
}> => {
  const clientreqParams = reqParams;
  const queryParams = `*[_type=='client' && ${clientreqParams} ]{
${resParams}
  }`;
  try {
    const data = await sanityClient.fetch(queryParams);

    return { clientData: data };
  } catch (error) {
    throw error;
  }
};
