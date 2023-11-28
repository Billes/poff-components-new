import { CountryCode, getCountryCallingCode } from 'libphonenumber-js'

/**
 *
 * @param {CountryCode} countryCode
 *
 * @returns {string}
 */
export const getInternationalPhoneNumberPrefix = (countryCode: CountryCode): string => {
  const prefix = '+' + getCountryCallingCode(countryCode)

  return prefix
}
