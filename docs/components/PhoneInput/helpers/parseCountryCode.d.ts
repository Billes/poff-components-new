import { CountryCode } from 'libphonenumber-js';
import { CountryOption } from '../phoneInput.types';
/**
 *
 * @param {CountryCode} countryCode
 * @returns {CountryOption} An object having shape `{ value: CountryCode, label: string }`.
 */
export declare const parseCountryCode: (countryCode: CountryCode) => CountryOption;
