import { Country, ICountry } from 'country-state-city';
import { LocalStorageKeys } from 'Interfaces';
import { SupportedCountry } from 'Interfaces/Database';
import { getLocalStorage } from 'Utils';

/**
 * Retrieves the flag of a country based on either the exact country name or a possible country name found in an address.
 *
 * @param {Object} options - The options object.
 * @param {string | undefined} options.countryName - The exact country name.
 * @param {string} [options.countryInAddress] - The country name found in an address.
 * @returns {string | null} - The flag of the country, or null if not found.
 *
 * @example
 * const flag = getCountryFlag({
 *   countryName: 'Canada',
 *   countryInAddress: '123 Main St, Toronto, Canada',
 * });
 * // Returns the flag of Canada or null if not found.
 */
export function getCountryFlag({
  countryName,
  countryInAddress,
}: {
  countryName: string | undefined;
  countryInAddress?: string;
}): string | null {
  const definiteCountryFlag = Country.getAllCountries().find(
    (myCountry) => myCountry?.name?.toLowerCase() === countryName?.toLowerCase()
  )?.flag;

  if (countryName && definiteCountryFlag) {
    return definiteCountryFlag;
  }

  if (countryInAddress) {
    // Extract the last word in the address as a possible country name
    const possibleCountry = countryInAddress.split(' ').pop();

    const possibleFlag = Country.getAllCountries().find(
      (myCountry) =>
        myCountry?.name?.toLowerCase() === possibleCountry?.toLowerCase()
    )?.flag;

    if (possibleFlag) return possibleFlag;
  }

  return null;
}
/**
 * Gets the actual country name or its alias.
 *
 * @param {string} country - The country name or alias.
 * @returns {string} - The actual country name.
 *
 * @example
 * const actualCountry = getCountryOrAlias('Iran, Islamic Republic of');
 * // Returns 'Iran' for the provided alias.
 */
export const getCountryOrAlias = (
  country: string | undefined
): string | undefined => {
  if (!country) return undefined;
  const COUNTRY_ALIASES: { [key: string]: string } = {
    'Iran, Islamic Republic of': 'Iran',
    // Add more aliases as needed
  };

  return COUNTRY_ALIASES?.[country] || country;
};
/**
 * Gets the symbol of country base on country name or its alias.
 *
 * @param {string} country - The country name or alias.
 * @returns {string} - The country Symbol.
 *
 * @example
 * const actualCountry = getCountryOrAlias('Iran, Islamic Republic of');
 * // Returns 'Iran' for the provided alias.
 */
export const getCountrySymbolBaseOnNameOrAlias = (
  country: string | undefined
): string | undefined => {
  if (!country) return undefined;
  const COUNTRY_ALIASES: { [key: string]: string } = {
    iran: 'IR',
    chinese: 'CN',
    india: 'IN',
    // Add more aliases as needed
  };

  return COUNTRY_ALIASES?.[country] || country;
};

//
export const getSpecificCountryBasedOnSymbol = (
  countrySymbol: string | undefined
): string | undefined => {
  if (!countrySymbol) { 
    return undefined;
  }

  if (countrySymbol === 'IN') return 'India';
  if (countrySymbol === 'FA') return 'Iran';
  if (countrySymbol === 'CN') return 'China';
  return undefined;
};
//////////////////
export const convertSupportedCountryToCountryObj = (
  supportedCountry: string | null | undefined
): ICountry | undefined => {
  if (!supportedCountry) return undefined;
  const allCountries = Country.getAllCountries();

  if (supportedCountry === SupportedCountry.Australia)
    return allCountries.find((country) => country.isoCode === 'AU');
  if (supportedCountry === SupportedCountry.China)
    return allCountries.find((country) => country.isoCode === 'CN');
  if (supportedCountry === SupportedCountry.India)
    return allCountries.find((country) => country.isoCode === 'IN');
  if (supportedCountry === SupportedCountry.Iran)
    return allCountries.find((country) => country.isoCode === 'IR');
  //
  return undefined;
};
////////////////////
// only work on csr
export const getUserCountry = (): SupportedCountry => {
  const country = getLocalStorage(LocalStorageKeys.Country as LocalStorageKeys);
  const typeCountry = country as SupportedCountry;
  return typeCountry;
};

////////آیا محل زندگی کاربر ایرانه؟//////
export function isUserLiveInIran(): boolean {
  const country = getLocalStorage(LocalStorageKeys.Country as LocalStorageKeys);
  return country === SupportedCountry.Iran;
}
/////////////////////////////////////////////
// اگه از کشور به وسیلیه یوآرآل پارامز مشخص شده بود آبجکتش رو برمیگردونه
// اگه نشده بود، نگاه میکنه کشور زندگی کاربر مشخص هست یا نه، اون رو برمیگردونه
// اگه هیچکدوم نبود آندیفایند برمیگردونه یعنی دیفالت کانتری نداریم
export function getDefaultCountry({
  countryInUrlParam,
  userCountry,
}: {
  countryInUrlParam?: string | undefined;
  userCountry?: string | undefined;
}): ICountry | undefined {
  if (countryInUrlParam) return Country.getCountryByCode(countryInUrlParam);
  if (userCountry)
    return Country.getCountryByCode(
      // AU is defensive
      getCountrySymbolBaseOnNameOrAlias(userCountry) || 'AU'
    );
  return undefined;
}
