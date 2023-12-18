import { CountryCode } from 'libphonenumber-js';
interface PhoneInputProps {
    id: string;
    name: string;
    value?: string;
    initialValue?: string;
    error?: string;
    onChange: (inputNumber: string | undefined) => void;
    autoFormat?: boolean;
    onlyCountries?: CountryCode[];
    defaultCountry: CountryCode;
    preferredCountries?: CountryCode[];
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    updatedCountry?: CountryCode;
}
export declare const PhoneInput: ({ id, name, value, onlyCountries, defaultCountry, updatedCountry, preferredCountries, disabled, placeholder, required, onChange, error, ...props }: PhoneInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
