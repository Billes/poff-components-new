import { CountryCode } from 'libphonenumber-js'
import { CountryOption } from '../phoneInput.types'
import { iso2Lookup } from './iso2Lookup'

/**
 *
 * @param {CountryCode} countryCode
 * @returns {CountryOption} An object having shape `{ value: CountryCode, label: string }`.
 */
export const parseCountryCode = (countryCode: CountryCode): CountryOption => {
  return {
    value: countryCode,
    // The label will be generated from:
    // 2. the country name
    // 3. the country code
    label: iso2Lookup(countryCode) || (countryCode as string),
  }
}
