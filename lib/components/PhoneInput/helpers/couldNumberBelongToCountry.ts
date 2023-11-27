import { CountryCode } from 'libphonenumber-js'
import { getInternationalPhoneNumberPrefix } from './getInternationalPhoneNumberPrefix'

export const couldNumberBelongToCountry = (number: string, countryCode: CountryCode): boolean => {
  const intlPhoneNumberPrefix = getInternationalPhoneNumberPrefix(countryCode)

  let i = 0
  while (i < number.length && i < intlPhoneNumberPrefix.length) {
    if (number[i] !== intlPhoneNumberPrefix[i]) {
      return false
    }
    i++
  }

  return true
}
