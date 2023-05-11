import { QueryClient, useQueryClient } from 'react-query';
import { UserQueryKeys } from 'Utils/query/keys';
import { sanityClient } from 'Utils/sanity';
import { ClientData_Sanity } from './interface';

interface GetClientDetail {
  email: string;
  resParams: string;
}
export const getClientDetail = async ({
  email,
  resParams,
}: GetClientDetail): Promise<{
  clientData: ClientData_Sanity[];
}> => {
  const clientEmail = email;
  const queryParams = `*[_type=='client' && email == "${clientEmail}" ]{
${resParams}
  }`;
  try {
    const data = await sanityClient.fetch(queryParams);

    return { clientData: data };
  } catch (error) {
    throw error;
  }
};
