import { CountryCode, PhoneNumber } from 'libphonenumber-js';
import { CountryOption } from '../phoneInput.types';
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
export declare const guessSelectedCountry: ({ value, phoneNumber, selectedCountry, countries, }: {
    value: string;
    phoneNumber?: PhoneNumber | undefined;
    selectedCountry?: CountryCode | undefined;
    countries: CountryCode[];
}) => CountryOption;
