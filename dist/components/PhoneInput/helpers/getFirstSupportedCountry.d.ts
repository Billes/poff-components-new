import { CountryCode } from 'libphonenumber-js';
import { CountryOption } from '../phoneInput.types';
export declare const getFirstSupportedCountry: ({ countries, }: {
    countries: CountryCode[];
}) => CountryOption;
