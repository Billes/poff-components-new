import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from '../../utils/classNames'
import { Fragment } from 'react'

interface SelectMenuProps {
  name: string
  options: any[]
  selected: any
  keyIdentifier: string
  valueIdentifier: string
  description?: string
  error?: string
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  separator?: string
  onChange?: (value: any) => void
}

export const SelectMenu = ({
  name,
  options,
  selected,
  valueIdentifier,
  keyIdentifier,
  disabled = false,
  onChange,
  description,
  separator = ', ',
  error,
}: SelectMenuProps) => {
  const valueIdentifiers = valueIdentifier.split(',')

  return (
    <>
      <div className='relative'>
        <Listbox value={selected} name={name} onChange={onChange} disabled={disabled}>
          {({ open }) => {
            const selectedValue = selected
              ? valueIdentifiers.map((identifier) => selected[identifier])
              : null

            return (
              <>
                <Listbox.Button
                  className={classNames(
                    'relative w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm',
                    'focus:border-sky-600 focus:outline-none focus:ring-1',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    'dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400',
                    error
                      ? 'border-red-700 text-red-700 focus:ring-red-700'
                      : 'border-gray-300 focus:ring-sky-600',
                  )}
                >
                  <span className='block truncate font-roboto font-light w-full'>
                    {selectedValue ? selectedValue.join(separator) : 'Välj...'}
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronUpDownIcon
                      className='h-5 w-5 text-gray-400 dark:text-white'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-900 dark:ring-slate-200'>
                    {options.map((option) => {
                      const value = valueIdentifiers.map((identifier) => option[identifier])

                      return (
                        <Listbox.Option
                          key={option[keyIdentifier]}
                          className={classNames(
                            'relative flex cursor-default select-none items-center py-2 pl-8 pr-4 ui-active:bg-sky-600 ui-active:text-white ui-not-active:text-gray-900 dark:ui-active:bg-sky-400 dark:ui-active:text-slate-900 dark:ui-not-active:text-white',
                            option['unavailable'] ? 'cursor-not-allowed opacity-50' : '',
                          )}
                          value={option}
                          disabled={option['unavailable']}
                        >
                          {selected && option[keyIdentifier] === selected[keyIdentifier] ? (
                            <span className='absolute left-0 items-center pl-1.5'>
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                          <span
                            className={classNames(
                              selected && option[keyIdentifier] === selected[keyIdentifier]
                                ? 'font-semibold'
                                : 'font-light',
                              'block truncate font-roboto',
                            )}
                          >
                            {value.join(separator)}
                          </span>
                        </Listbox.Option>
                      )
                    })}
                  </Listbox.Options>
                </Transition>
              </>
            )
          }}
        </Listbox>
      </div>
      <div className='mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400'>
        <div className='grow'>
          {!!error && <span className='text-red-500'>{error}</span>}
          {description && !error && <span>{description}</span>}
        </div>
      </div>
    </>
  )
}
