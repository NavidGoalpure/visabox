import { Client } from "Interfaces/Database/Client";
import { useSession } from "next-auth/react";
import { sanityClient } from "Utils/sanity";

interface GetClientDetail {
  reqParams: string;
  resParams: string;
  hasCache?: boolean;
}
export const getClientDetail = async ({
  reqParams,
  resParams,
  hasCache = true,
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
    const data = await sanityClient.fetch(queryParams);

    return { client: data };
  } catch (error) {
    throw error;
  }
};
