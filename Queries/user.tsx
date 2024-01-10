import { isAgencyLogedIn, isClientLogedIn } from 'Utils/user';
import { getAgencyId } from './agency';
import { getClientId } from './client';

// به صورت نرمال هروقت یوزر توسط سایت ساخته میشه آیدی اون برابر با هش ام دی فایو ایمیل هست
// اما چون شاید یک زمانی این قاعده عوض شه یا یوزری با پنل ساخته بشه، این تابع روش بهتری برای پیدا کردن یوزر کلاینت هست
//
export async function getUserId(
  email: string | undefined | null
): Promise<Promise<string | undefined> | undefined> {
  if (!email) return undefined;

  // Determine if the user is a client or an agency based on their logged-in status
  const isUserClient = isClientLogedIn();
  const isUserAgency = isAgencyLogedIn();

  if (isUserClient) {
    // If the user is a client, fetch the client ID based on the email
    const clientId = await getClientId(email);
    if (clientId) {
      return clientId;
    }
  } else if (isUserAgency) {
    // If the user is an agency, fetch the agency ID based on the email
    const agencyId = await getAgencyId(email);
    if (agencyId) {
      return agencyId;
    }
  }

  // Return undefined if the user role and ID cannot be determined
  return undefined;
}
