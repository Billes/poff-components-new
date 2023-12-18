import { CountryCode } from 'libphonenumber-js';
import { CountryOption } from '../phoneInput.types';
/**
 * Generates a sorted list of country `<select/>` options.
 *
 * @param {CountryCode[]?} countries
 * @param {CountryCode[]?} preferredCountries
 *
 * @return {CountryOption[]} A list of objects having shape `{ value : string, label : string }`.
 */
export declare const getCountrySelectOptions: (countries?: CountryCode[], preferredCountries?: CountryCode[]) => CountryOption[];
