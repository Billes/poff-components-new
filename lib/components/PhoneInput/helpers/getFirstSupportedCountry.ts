import { CountryCode } from 'libphonenumber-js'
import { CountryOption } from '../phoneInput.types'
import { getCountrySelectOptions } from './getCountrySelectOptions'

export const getFirstSupportedCountry = ({
  countries,
}: {
  countries: CountryCode[]
}): CountryOption => {
  const countryOptions = getCountrySelectOptions(countries)

  return countryOptions[0]
}
