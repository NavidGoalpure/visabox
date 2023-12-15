import { Client } from 'Interfaces/Database/Client';
import { Session } from 'next-auth';
import { ClientQueryKeys } from 'Utils/query/keys';
import { sanityClient, sanityClient_WithoutCDN } from 'Utils/sanity';
import { useQuery } from 'react-query';

interface GetClientDetail {
  reqParams: string;
  resParams: string;
  hasCache?: boolean;
  useCDN?: boolean;
}
export const getClientDetail = async ({
  reqParams,
  resParams,
  hasCache = true,
  useCDN = true,
}: GetClientDetail): Promise<{
  client: Client[];
}> => {
  const clientreqParams = reqParams;
  const queryParams = hasCache
    ? `*[_type=='client' && ${clientreqParams} ]{
${resParams}
  }`
    : `*[_type=='client' && ${clientreqParams} ]?cacheBust=${Date.now()}{
${resParams}
  }`;

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
export const getUserCountry = (session: Session | null): string | undefined => {
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
