import { Agency, AgencySanity } from 'Interfaces/Database/Lists/agency';
import { sanityClient } from 'Utils/sanity';

interface GetAgencyDetail {
  reqParams: string;
  resParams: string;
}
export const getAgencyDetail = async ({
  reqParams,
  resParams,
}: GetAgencyDetail): Promise<{
  agency: AgencySanity[];
}> => {
  const agencyreqParams = reqParams;
  const queryParams = `*[_type=='agency' && ${agencyreqParams} ]{
${resParams}
  }`;
  try {
    const data = await sanityClient.fetch(queryParams);

    return { agency: data };
  } catch (error) {
    throw error;
  }
};
