import { CountryCode } from 'libphonenumber-js'
import { CountryOption } from '../phoneInput.types'
import { parseCountryCode } from './parseCountryCode'

/**
 * Generates a sorted list of country `<select/>` options.
 *
 * @param {CountryCode[]?} countries
 * @param {CountryCode[]?} preferredCountries
 *
 * @return {CountryOption[]} A list of objects having shape `{ value : string, label : string }`.
 */
export const getCountrySelectOptions = (
  countries?: CountryCode[],
  preferredCountries?: CountryCode[],
): CountryOption[] => {
  let preferredCountryOptions: CountryOption[] = []
  let standardCountrySelectOptions: CountryOption[] = []

  // remove preferredCountries from the standard list
  // and sort the preferred countries
  if (countries && preferredCountries && preferredCountries.length) {
    countries = countries.filter((c) => !preferredCountries.includes(c))

    preferredCountryOptions = preferredCountries.map((country) => parseCountryCode(country))
    preferredCountryOptions.sort((a, b) => a.label.localeCompare(b.label))
  }

  // Generates a `<Select/>` option for each country.
  if (countries) {
    standardCountrySelectOptions = countries.map((country) => parseCountryCode(country))
  }

  // Sort the list of standard countries alphabetically.
  standardCountrySelectOptions.sort((a, b) => a.label.localeCompare(b.label))

  // combind the 2 arrays with the preferrd countries first
  if (preferredCountryOptions.length > 0) {
    preferredCountryOptions.push({ label: '----', disabled: true })
    return preferredCountryOptions.concat(standardCountrySelectOptions)
  } else {
    return standardCountrySelectOptions
  }
}
