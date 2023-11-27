import { CountryCode, PhoneNumber } from 'libphonenumber-js'
import { CountryOption } from '../phoneInput.types'
import { couldNumberBelongToCountry } from './couldNumberBelongToCountry'
import { getFirstSupportedCountry } from './getFirstSupportedCountry'
import { parseCountryCode } from './parseCountryCode'

/**
 * Decides which country should be selected
 * when the phone number input changes.
 *
 * @param  {string} value - phone number as string.
 * @param  {PhoneNumber?} phoneNumber - The raw phone number from libphonenumber-js.
 * @param  {CountryCode?} selectedCountry - The selected country (two-letter code).
 * @param  {CountryCode[]?} countries - A list of countries available.
 *
 * @returns {CountryOption}
 */
export const guessSelectedCountry = ({
  value,
  phoneNumber,
  selectedCountry,
  countries,
}: {
  value: string
  phoneNumber?: PhoneNumber
  selectedCountry?: CountryCode
  countries: CountryCode[]
}): CountryOption => {
  let countryOption = parseCountryCode('SE')
  let hasCountry = true

  if (phoneNumber && phoneNumber.country) {
    // `countryOption` will be left `undefined` in case of non-detection.
    countryOption = parseCountryCode(phoneNumber.country)
  } else if (selectedCountry) {
    if (!value || couldNumberBelongToCountry(value, selectedCountry)) {
      countryOption = parseCountryCode(selectedCountry)
    }
  }

  // Only pre-select a country if it's in the available `countries` list.
  if (countries && countryOption.value && countries.indexOf(countryOption.value) < 0) {
    hasCountry = false
  }

  // If the checks above has failed then some `country` must be selected.
  // It will be the wrong country though.
  // But still country `<select/>` can't be left in a broken state.
  if (!hasCountry && countries && countries.length > 0) {
    countryOption = getFirstSupportedCountry({ countries })
  }

  return countryOption
}
