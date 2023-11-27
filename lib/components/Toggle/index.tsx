import { Switch } from '@headlessui/react'
import classNames from '../../utils/classNames'

interface ToggleProps {
  enabled: boolean
  label?: string
  description?: string
  disabled?: boolean
  onChange: (value: boolean) => void
  onClick?: () => void
}

export const Toggle = ({
  enabled,
  label,
  description,
  disabled = false,
  onChange,
  onClick,
}: ToggleProps) => {
  return (
    <Switch.Group as='div' className='flex items-center justify-between font-roboto'>
      <Switch
        checked={enabled}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          enabled ? 'bg-sky-600 dark:bg-sky-400' : 'bg-gray-200 dark:bg-slate-500',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          'relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 dark:ring-offset-slate-900 focus:ring-offset-2 dark:focus:ring-sky-400',
        )}
      >
        <span className='sr-only'>Use setting</span>
        <span
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-slate-200',
          )}
        >
          <span
            className={classNames(
              enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            )}
            aria-hidden='true'
          >
            <svg className='h-3 w-3 text-gray-400' fill='none' viewBox='0 0 12 12'>
              <path
                d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            )}
            aria-hidden='true'
          >
            <svg className='h-3 w-3 text-sky-600' fill='currentColor' viewBox='0 0 12 12'>
              <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
            </svg>
          </span>
        </span>
      </Switch>
      <span className='ml-2 flex flex-grow flex-col'>
        <Switch.Label
          as='span'
          className='font-roboto text-sm font-medium text-gray-900 dark:text-slate-200'
          passive
        >
          {label}
        </Switch.Label>
        <Switch.Description
          as='span'
          className='font-roboto text-xs text-gray-500 dark:text-slate-200'
        >
          {description}
        </Switch.Description>
      </span>
    </Switch.Group>
  )
}
