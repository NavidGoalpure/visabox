import { SupportedCountry } from 'Interfaces/Database';
import { getCountrySymbolBaseOnNameOrAlias } from 'Utils/country-state-city';
import { ICountry, Country } from 'country-state-city';

// اگه از کشور به وسیلیه یوآرآل پارامز مشخص شده بود آبجکتش رو برمیگردونه
// اگه نشده بود، نگاه میکنه کشور زندگی کاربر مشخص هست یا نه، اون رو برمیگردونه
// اگه هیچکدوم نبود آندیفایند برمیگردونه یعنی دیفالت کانتری نداریم
//navid چک کن این فانکشن تکراری نباشه
export function getDefaultCountry({
  countryInUrlParam,
  userCountry,
}: {
  countryInUrlParam: string | undefined;
  userCountry: string | undefined;
}): ICountry | undefined {
  if (countryInUrlParam) return Country.getCountryByCode(countryInUrlParam);
  if (userCountry)
    return Country.getCountryByCode(
      // AU is defensive
      getCountrySymbolBaseOnNameOrAlias(userCountry) || 'AU'
    );
  return undefined;
}
