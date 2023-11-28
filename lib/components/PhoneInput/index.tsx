import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { getCountries, isSupportedCountry, CountryCode } from 'libphonenumber-js'
import { parseCountryCode } from './helpers/parseCountryCode'
import { CountryOption } from './phoneInput.types'
import { parsePhoneNumber } from './helpers/parsePhoneNumber'
import { guessSelectedCountry } from './helpers/guessSelectedCountry'
import { getSupportedCountries } from './helpers/getSupportedCountries'
import { getCountrySelectOptions } from './helpers/getCountrySelectOptions'
import { getInternationalPhoneNumberPrefix } from './helpers/getInternationalPhoneNumberPrefix'
import PhoneFormatter from './helpers/phoneFormatter'
import classNames from '../../utils/classNames'

interface PhoneInputProps {
  id: string
  name: string
  value?: string
  initialValue?: string
  error?: string
  onChange: (inputNumber: string | undefined) => void
  autoFormat?: boolean
  onlyCountries?: CountryCode[]
  defaultCountry: CountryCode
  preferredCountries?: CountryCode[]
  disabled?: boolean
  placeholder?: string
  required?: boolean
  updatedCountry?: CountryCode
}

export const PhoneInput = ({
  id,
  name,
  value = '',
  onlyCountries,
  defaultCountry = 'SE',
  updatedCountry,
  preferredCountries = [],
  disabled = false,
  placeholder,
  required = false,
  onChange,
  error,
  ...props
}: PhoneInputProps) => {
  const phoneNumberInputRef = useRef<HTMLInputElement>(null)
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(value)
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    parseCountryCode(defaultCountry),
  )

  if (!isSupportedCountry(defaultCountry)) {
    // if the default country is not supported by libphonenumber-js we change it to SE
    setSelectedCountry(parseCountryCode('SE'))
  }

  useEffect(() => {
    const rawPhoneNumber = parsePhoneNumber(phoneNumber)

    setSelectedCountry(
      guessSelectedCountry({
        value: phoneNumber ? phoneNumber : '',
        phoneNumber: rawPhoneNumber,
        selectedCountry: selectedCountry.value,
        countries: getSupportedCountries(onlyCountries) || getCountries(),
      }),
    )
  }, [onlyCountries, phoneNumber])

  const handleChange = (value: string | undefined) => {
    const rawPhoneNumber = parsePhoneNumber(value)
    setPhoneNumber(value)

    // this onChange is coming from parent
    onChange(rawPhoneNumber?.formatInternational())
  }

  /**
   * Memoize the country option list
   * If onlyCountries is provided, we use onlyCountries as the list of countries otherwise we use all countries
   * If preferredCountries is provided, these countries will come first in the option list
   */
  const countryOptions = useMemo(() => {
    return getCountrySelectOptions(
      getSupportedCountries(onlyCountries) || getCountries(),
      preferredCountries,
    )
  }, [onlyCountries, preferredCountries])

  /**
   * When the user changes the country in the option list
   *
   * @param {CountryOption} newCountry
   */
  const handleCountrySelect = (newCountry: CountryOption) => {
    if (newCountry.value && selectedCountry.value && selectedCountry.value !== newCountry.value) {
      if (!phoneNumber) {
        setPhoneNumber(getInternationalPhoneNumberPrefix(newCountry.value))
        phoneNumberInputRef.current?.focus()
      } else {
        // Replace country dial code and reformat the phone number
        const oldPrefix = getInternationalPhoneNumberPrefix(selectedCountry.value)
        const newPrefix = getInternationalPhoneNumberPrefix(newCountry.value)
        setPhoneNumber(phoneNumber.replace(oldPrefix, newPrefix))
      }

      setSelectedCountry(newCountry)
    }
  }

  useEffect(() => {
    const newCountryOption = countryOptions.find((country) => country.value === updatedCountry)
    if (newCountryOption && !phoneNumber) {
      handleCountrySelect(newCountryOption)
    }
  }, [updatedCountry])
  const getDropDownList = () => {
    return (
      <Listbox value={selectedCountry} by='value' onChange={handleCountrySelect}>
        <div>
          <Listbox.Button className='relative w-full cursor-default bg-transparent py-2 pl-3 pr-8 text-left focus:outline-none sm:text-sm'>
            <div className='flex items-center'>
              <img
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.value}.svg`}
                alt={selectedCountry.label}
                title={selectedCountry.label}
                className='h-6 w-6 flex-shrink-0'
              />
            </div>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400 dark:text-slate-200'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-900'>
              {countryOptions.map((country, countryIdx) => (
                <Listbox.Option
                  key={countryIdx}
                  value={country}
                  disabled={country.disabled}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 pl-3 pr-9 ${
                      active
                        ? 'bg-sky-100 text-sky-900 dark:bg-slate-800 dark:text-slate-200'
                        : 'text-gray-900 dark:text-slate-300'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <div className='flex items-center'>
                        {country.value ? (
                          <>
                            <img
                              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.value}.svg`}
                              alt={country.label}
                              className='mr-2 h-6 w-6 flex-shrink-0'
                            />

                            <span
                              className={classNames(
                                selected ? 'font-bold' : 'font-normal',
                                'truncate',
                              )}
                            >
                              {country.label}
                            </span>
                            <span
                              className={classNames(
                                active ? 'text-sky-900' : 'text-gray-500',
                                'ml-2 truncate',
                              )}
                            ></span>
                          </>
                        ) : (
                          <hr className='my-1 -mr-9 h-px w-full bg-gray-600' />
                        )}
                        {selected ? (
                          <span
                            className={classNames(
                              active
                                ? 'text-sky-900 dark:text-slate-200'
                                : 'text-sky-600 dark:text-slate-300',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    )
  }

  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='absolute inset-y-0 left-0 flex items-center'>{getDropDownList()}</div>
      <PhoneFormatter
        defaultCountry={selectedCountry.value}
        value={phoneNumber}
        onChange={handleChange}
      >
        {({ impossible, onBlur, onInputChange, inputValue, errorMessage }) => {
          return (
            <>
              <input
                id={id}
                ref={phoneNumberInputRef}
                className={classNames(
                  'block w-full rounded-md pl-16',
                  'border',
                  'font-roboto font-light text-gray-900 sm:text-sm',
                  'focus:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-75',
                  'focus:ring-1',
                  'dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400',
                  error
                    ? 'border-red-700 text-red-700 focus:ring-red-700'
                    : 'border-gray-300 focus:border-sky-600 focus:ring-sky-600',
                )}
                type='tel'
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                name={name}
                value={inputValue}
                onBlur={onBlur}
                onChange={(e) => onInputChange(e.target.value, required)}
                {...props}
              />
              {(impossible || errorMessage || error) && (
                <span className='absolute ml-2 mt-1 text-xs text-red-500'>
                  {errorMessage || error || 'Felaktigt telefonnummer'}
                </span>
              )}
            </>
          )
        }}
      </PhoneFormatter>
    </div>
  )
}
