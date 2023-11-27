import { ChangeEventHandler, FormEvent, useState } from 'react'
import classNames from '../../utils/classNames'

interface TextareaProps {
  id: string
  disabled?: boolean
  required?: boolean
  error?: string
  placeholder?: string
  rows?: number
  name: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  value: string
}

export const Textarea = ({
  id,
  disabled = false,
  required = false,
  placeholder,
  rows = 5,
  error,
  name,
  onChange,
  ...props
}: TextareaProps) => {
  const [validationMessage, setValidationMessage] = useState<string>('')

  const onInvalid = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setValidationMessage(target.validationMessage)
  }

  const onBlur = (e: FormEvent) => {
    const target = e.target as HTMLInputElement

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!validationMessage) {
      setValidationMessage(target.validationMessage)
    }
  }

  return (
    <div>
      <textarea
        id={id}
        className={classNames(
          'block w-full rounded-md py-1 px-2 shadow-sm',
          'border border-gray-300',
          'font-roboto font-light text-gray-900 sm:text-sm',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-75',
          'invalid:border-red-700 invalid:text-red-700 invalid:focus:ring-1 invalid:focus:ring-red-700',
          'focus:border-sky-600 focus:ring-1 focus:ring-sky-600',
          'dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400',
        )}
        rows={rows}
        wrap='hard'
        disabled={disabled}
        required={required}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        onInvalid={onInvalid}
        {...props}
      ></textarea>
      {!!validationMessage && <span className='ml-2 text-xs text-red-500'>{error}</span>}
    </div>
  )
}
