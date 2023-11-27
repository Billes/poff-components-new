import { AsYouType, CountryCode } from 'libphonenumber-js'

/**
 * If the phone number being input is an international one
 * then tries to derive the country from the phone number.
 * (regardless of whether there's any country currently selected)
 *
 * @param {string} partialE164Number - A possibly incomplete E.164 phone number.
 * @param {CountryCode?} countryCode - Currently selected country.
 * @param {CountryCode[]?} countries - A list of available countries. If not passed then "all countries" are assumed.
 *
 * @returns {CountryCode}
 */
export const getCountryForPartialE164Number = (
  partialE164Number: string,
  { countryCode, countries }: { countryCode: CountryCode; countries?: CountryCode[] },
): CountryCode => {
  if (partialE164Number === '+') {
    // Don't change the currently selected country yet.
    return countryCode
  }

  const derivedCountry = getCountryFromPossiblyIncompleteInternationalPhoneNumber(partialE164Number)
  console.log('derivedCountry', derivedCountry)
  // If a phone number is being input in international form
  // and the country can already be derived from it,
  // then select that country.
  if (derivedCountry && (!countries || countries.indexOf(derivedCountry) >= 0)) {
    return derivedCountry
  }

  // Don't change the currently selected country.
  return countryCode
}

/**
 * Determines the country for a given (possibly incomplete) E.164 phone number.
 *
 * @param {string} number
 *
 * @returns {CountryCode|undefined}
 */
export const getCountryFromPossiblyIncompleteInternationalPhoneNumber = (
  number: string,
): CountryCode | undefined => {
  const formatter = new AsYouType()
  formatter.input(number)
  console.log('formatter', formatter)
  return formatter.getCountry()
}
