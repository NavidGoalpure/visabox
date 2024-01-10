import { Agency, AgencySanity } from 'Interfaces/Database/Lists/agency';
import { MaraAgency } from 'Interfaces/Database/Lists/agents';
import { sanityClient, sanityClient_WithoutCDN } from 'Utils/sanity';

interface GetAgencyDetail {
  reqParams: string;
  resParams: string;
  useCDN?: boolean;
}
export const getAgencyDetail = async ({
  reqParams,
  resParams,
  useCDN = true,
}: GetAgencyDetail): Promise<{
  agency: AgencySanity[];
}> => {
  const agencyreqParams = reqParams;
  const queryParams = `*[_type=='agency' && ${agencyreqParams} ]{
${resParams}
  }`;
  try {
    if (!useCDN) {
      const data = await sanityClient_WithoutCDN.fetch(queryParams);
      return { agency: data };
      //
    } else {
      const data = await sanityClient.fetch(queryParams);
      return { agency: data };
      //
    }
  } catch (error) {
    throw error;
  }
};
export async function getAgencyCredit(
  email: string | undefined | null
): Promise<AgencySanity | null> {
  if (!email) return null;
  const reqParams = `email == "${email}"`;
  const resParams = `credit,_id`;
  try {
    const clientData = await getAgencyDetail({
      reqParams,
      resParams,
      useCDN: false,
    });
    return clientData?.agency?.[0];
  } catch (error) {
    return null;
  }
}
///////////////////
// به صورت نرمال هروقت یوزر توسط سایت ساخته میشه آیدی اون برابر با هش ام دی فایو ایمیل هست
// اما چون شاید یک زمانی این قاعده عوض شه یا یوزری با پنل ساخته بشه، این تابع روش بهتری برای پیدا کردن یوزر کلاینت هست
export async function getAgencyId(
  email: string | undefined
): Promise<string | undefined> {
  if (!email) return undefined;
  const reqParams = `email == "${email}"`;
  const resParams = `_id`;
  try {
    const clientData = await getAgencyDetail({
      reqParams,
      resParams,
    });
    return clientData?.agency?.[0]?._id;
  } catch (error) {
    return undefined;
  }
}
