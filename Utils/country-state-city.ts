import { Country, ICountry } from 'country-state-city';

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
    // Add more aliases as needed
  };

  return COUNTRY_ALIASES?.[country] || country;
};

//
export const getCountryBasedOnSymbol = (
  countrySymbol: string | undefined
): ICountry | undefined => {
  if (!countrySymbol) {
    return undefined;
  }

  const allCountries = Country.getAllCountries();
  const foundCountry = allCountries.find(
    (country) => country.isoCode === countrySymbol
  );

  return foundCountry;
};
