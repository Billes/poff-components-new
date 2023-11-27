import { CountryCode } from 'libphonenumber-js'

export interface CountryOption {
  value?: CountryCode
  label: string
  disabled?: boolean
}

export interface PhoneFormatterProps {
  /** Changes will not affect the component after the first render */
  readonly defaultCountry?: CountryCode

  /** The phone number as E164 */
  readonly value: string | undefined

  /** Called with the E164 version of the phone number. */
  onChange(v: string | undefined, required?: boolean): void

  children(data: {
    /** The formatted input value */
    inputValue: string
    onInputChange(newValue: string, required?: boolean): void

    /** The detected country of the number */
    country?: string
    /**
     * Result of a plausibility check: Is the phone number impossible?
     *
     * Prone to false negatives, but not false positives:
     * it may report an invalid phone number as possible
     */
    impossible?: boolean | null
    errorMessage?: string | undefined

    onBlur(): void
  }): React.ReactNode
}
