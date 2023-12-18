import { CountryCode } from 'libphonenumber-js';
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
export declare const getCountryForPartialE164Number: (partialE164Number: string, { countryCode, countries }: {
    countryCode: CountryCode;
    countries?: CountryCode[] | undefined;
}) => CountryCode;
/**
 * Determines the country for a given (possibly incomplete) E.164 phone number.
 *
 * @param {string} number
 *
 * @returns {CountryCode|undefined}
 */
export declare const getCountryFromPossiblyIncompleteInternationalPhoneNumber: (number: string) => CountryCode | undefined;
