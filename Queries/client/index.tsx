import { Client } from 'Interfaces/Database/Client';
import { Session } from 'next-auth';
import { ClientQueryKeys } from 'Utils/query/keys';
import { sanityClient, sanityClient_WithoutCDN } from 'Utils/sanity';
import { useQuery } from 'react-query';
import { getLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';
import { SupportedCountry } from 'Interfaces/Database';

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

///////////////////
export async function getClientCredit(
  email: string | undefined | null
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
////////////////////
///////////////////
// به صورت نرمال هروقت یوزر توسط سایت ساخته میشه آیدی اون برابر با هش ام دی فایو ایمیل هست
// اما چون شاید یک زمانی این قاعده عوض شه یا یوزری با پنل ساخته بشه، این تابع روش بهتری برای پیدا کردن یوزر کلاینت هست
export async function getClientId(
  email: string | undefined
): Promise<string | undefined> {
  if (!email) return undefined;
  const reqParams = `email == "${email}"`;
  const resParams = `_id`;
  try {
    const clientData = await getClientDetail({
      reqParams,
      resParams,
    });
    return clientData?.client?.[0]?._id;
  } catch (error) {
    return undefined;
  }
}
