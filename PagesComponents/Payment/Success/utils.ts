import { ClientQueryKeys, AgencyQueryKeys } from 'Utils/query/keys';
import { isClientLogedIn } from 'Utils/user';

export function getQueryKeyForUserId(
  email: string | undefined | null
): string[] | undefined {
  if (!email) return undefined;
  const reqParams = `email == "${email}"`;
  const resParams = `_id,`;
  const isClient = isClientLogedIn();
  if (isClient)
    return ClientQueryKeys.detail({
      reqParams,
      resParams,
    }) as unknown as string[];
  ///////////////////////
  return AgencyQueryKeys.detail({
    reqParams,
    resParams,
  }) as unknown as string[];
}
