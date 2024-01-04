import { Client } from 'Interfaces/Database/Client';
import { Session } from 'next-auth';
import { ClientQueryKeys } from 'Utils/query/keys';
import { sanityClient, sanityClient_WithoutCDN } from 'Utils/sanity';
import { useQuery } from 'react-query';

interface GetClientDetail {
  reqParams: string;
  resParams: string;
  useCDN?: boolean;
}

export const getClientDetail = async ({
  reqParams,
  resParams,
  useCDN = true,
}: GetClientDetail): Promise<{
  client: Client[];
}> => {
  const clientReqParams = reqParams;
  const queryParams = `*[_type=='client' && ${clientReqParams} ]{${resParams}  }
   `;

  try {
    if (!useCDN) {
      const data = await sanityClient_WithoutCDN.fetch(queryParams);

      return { client: data };
    } else {
      const data = await sanityClient.fetch(queryParams);
      return { client: data };
    }
  } catch (error) {
    throw error;
  }
};
export const getUserCountry = async (
  session: Session | null
): Promise<string | undefined> => {
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `country`;

  const { data } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email,
    }
  );

  return data?.client?.[0]?.country;
};
///////////////////
export async function getCredit(
  email: string | undefined
): Promise<Client | null> {
  if (!email) return null;
  const reqParams = `email == "${email}"`;
  const resParams = `credit,_id`;
  try {
    const clientData = await getClientDetail({
      reqParams,
      resParams,
      useCDN: false,
    });
    return clientData?.client?.[0];
  } catch (error) {
    return null;
  }
}
