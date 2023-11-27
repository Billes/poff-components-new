import { CountryCode, isSupportedCountry } from 'libphonenumber-js'

/**
 * We need to filter all country codes if user has added anycountry codes not supported by liphonenumber-js
 *
 * @param {CountryCode[]?} countryCodes
 *
 * @returns {CountryCode[]|undefined} A list of supported country codes.
 */
export const getSupportedCountries = (countryCodes?: CountryCode[]): CountryCode[] | undefined => {
  let supportedCountryCodes: CountryCode[] | undefined = undefined

  if (countryCodes) {
    supportedCountryCodes = countryCodes.filter((countryCode) => isSupportedCountry(countryCode))
    if (supportedCountryCodes.length === 0) {
      supportedCountryCodes = undefined
    }
  }

  return supportedCountryCodes
}
