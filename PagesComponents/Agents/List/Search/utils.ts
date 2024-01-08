import { SupportedCountry } from 'Interfaces/Database';
import { getCountrySymbolBaseOnNameOrAlias } from 'Utils/country-state-city';
import { ICountry, Country } from 'country-state-city';

// اگه از کشور به وسیلیه یوآرآل پارامز مشخص شده بود آبجکتش رو برمیگردونه
// اگه هیچکدوم نبود آندیفایند برمیگردونه یعنی دیفالت کانتری نداریم
export function getDefaultCountry({
  countryInUrlParam,
}: {
  countryInUrlParam: string | undefined;
}): ICountry | undefined {
  if (countryInUrlParam) return Country.getCountryByCode(countryInUrlParam);

  return undefined;
}
