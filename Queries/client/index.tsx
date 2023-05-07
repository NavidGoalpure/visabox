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
  queryClient: QueryClient;
}> => {
  const clientEmail = email;
  const queryParams = `*[_type=='client' && email == "${clientEmail}" ]{
${resParams}
  }`;
  const queryClient = new QueryClient();
  try {
    const data = await queryClient.fetchQuery(
      UserQueryKeys.detail({ email: clientEmail, resParams }),
      () => sanityClient.fetch(queryParams)
    );
    return { queryClient, clientData: data };
  } catch (error) {
    throw error;
  }
};
