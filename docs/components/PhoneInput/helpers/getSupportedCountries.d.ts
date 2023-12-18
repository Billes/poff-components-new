import { CountryCode } from 'libphonenumber-js';
/**
 * We need to filter all country codes if user has added anycountry codes not supported by liphonenumber-js
 *
 * @param {CountryCode[]?} countryCodes
 *
 * @returns {CountryCode[]|undefined} A list of supported country codes.
 */
export declare const getSupportedCountries: (countryCodes?: CountryCode[]) => CountryCode[] | undefined;
