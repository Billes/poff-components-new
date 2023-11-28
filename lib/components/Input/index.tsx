import { ChangeEvent, ChangeEventHandler, ReactNode, Ref, useEffect, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { InputType } from './input.types'
import classNames from '../../utils/classNames'

interface InputProps {
  id: string
  type?: InputType
  disabled?: boolean
  placeholder?: string
  error?: string
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  icon?: ReactNode
  value: string | number
  required?: boolean
  ref?: Ref<HTMLInputElement>
  step?: string
  maxLength?: number
  description?: string
  autoComplete?: string
  readonly?: boolean
}

export const Input = ({
  id,
  type = InputType.TEXT,
  disabled = false,
  required = false,
  readonly = false,
  autoComplete = 'off',
  placeholder,
  error,
  onChange,
  icon,
  name,
  value,
  ref,
  step,
  maxLength,
  description,
  ...props
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string>('')
  const [inputType, setInputType] = useState<InputType>(InputType.TEXT)

  const toggleInputType = () => {
    if (inputType === InputType.PASSWORD) {
      setInputType(InputType.TEXT)
    } else {
      setInputType(InputType.PASSWORD)
    }
  }

  useEffect(() => {
    setInputType(type)
  }, [type])

  const internalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setInternalValue(target.value)
    onChange && onChange(e)
  }

  return (
    <>
      <div className='relative rounded-md shadow-sm'>
        {icon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
            {icon}
          </div>
        )}

        <input
          id={id}
          ref={ref}
          className={classNames(
            'block w-full rounded-md',
            'border',
            'font-roboto font-light text-gray-900 sm:text-sm',
            'focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-75',
            'focus:ring-1',
            'dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400',
            icon ? 'pl-9' : '',
            error
              ? 'border-red-700 text-red-700 focus:ring-red-700'
              : 'border-gray-300 focus:border-sky-600 focus:ring-sky-600',
          )}
          type={inputType}
          disabled={disabled}
          required={required}
          readOnly={readonly}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={internalChange}
          autoComplete={autoComplete}
          step={step}
          maxLength={maxLength}
          {...props}
        />
        {type === InputType.PASSWORD && (
          <div
            className='cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3'
            onClick={toggleInputType}
          >
            {inputType === InputType.PASSWORD ? (
              <EyeIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            ) : (
              <EyeSlashIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            )}
          </div>
        )}
      </div>
      <div className='mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400'>
        <div className='grow'>
          {!!error && <span className='text-red-500'>{error}</span>}
          {description && !error && <span>{description}</span>}
        </div>
        {maxLength && (
          <div>
            {internalValue.toString().length | 0}/{maxLength}
          </div>
        )}
      </div>
    </>
  )
}
