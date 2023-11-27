import { CountryCode } from 'libphonenumber-js'
import sv from './locales/sv'

/**
 * Get the country name from a country code
 *
 * @param {CountryCode} countryCode
 *
 * @returns {string}
 */
export const iso2Lookup = (countryCode: CountryCode): string => {
  const country = sv[countryCode] || countryCode

  return country
}
