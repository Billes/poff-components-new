import '../../index.css'

import { useEffect } from 'react'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import classNames from '../../utils/classNames'
import { AlertType } from './alert.types'

interface AlertProps {
  /**
   * What type of alert is this? Default is SUCCESS
   */
  type?: AlertType
  /**
   *
   */
  id?: string
  /**
   * Headline of the alert
   */
  headline: string
  /**
   *
   */
  body?: string
  /**
   * Optional show icon
   */
  icon?: boolean
  /**
   * Optional make alert closable. Default false
   */
  closable?: boolean
  /**
   * Optional duration in milliseconds. Default 0
   */
  duration?: number
  /**
   * Optional extra class names
   */
  extraClassNames?: string
  /**
   * Optional destroy handler
   */
  destroy?: () => void
}

export const Alert = ({
  closable = false,
  icon = false,
  type = AlertType.SUCCESS,
  headline,
  body,
  destroy,
  duration = 0,
  id = 'alert-id',
  extraClassNames = '',
}: AlertProps) => {
  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      if (duration !== 0) {
        if (destroy) {
          destroy()
        }
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [closable, destroy, duration])

  return (
    <div
      id={id}
      className={classNames(
        'pointer-events-auto relative w-96 rounded-md p-5 shadow-lg',
        'dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10',
        type === AlertType.ERROR ? 'bg-red-200 dark:bg-red-700' : '',
        type === AlertType.INFO ? 'bg-sky-200 dark:bg-sky-600' : '',
        type === AlertType.SUCCESS ? 'bg-emerald-100 dark:bg-emerald-700' : '',
        type === AlertType.WARNING ? 'bg-orange-100 dark:bg-orange-500' : '',
        extraClassNames,
      )}
    >
      <div className='flex items-start'>
        {icon && (
          <div className='flex-shrink-0'>
            {type === AlertType.ERROR && (
              <XCircleIcon className='h-5 w-5 text-red-700 dark:text-red-200' aria-hidden='true' />
            )}
            {type === AlertType.INFO && (
              <InformationCircleIcon
                className='h-5 w-5 text-sky-600 dark:text-sky-200'
                aria-hidden='true'
              />
            )}
            {type === AlertType.SUCCESS && (
              <CheckCircleIcon
                className='h-5 w-5 text-emerald-700 dark:text-emerald-100'
                aria-hidden='true'
              />
            )}
            {type === AlertType.WARNING && (
              <ExclamationTriangleIcon
                className='h-5 w-5 text-orange-500 dark:text-orange-100'
                aria-hidden='true'
              />
            )}
          </div>
        )}
        <div className={classNames('grow', icon ? 'ml-3' : '')}>
          <h3
            className={classNames(
              'font-roboto text-sm font-bold',
              icon ? 'text-left' : 'text-center',
              type === AlertType.ERROR ? 'text-red-700 dark:text-red-200' : '',
              type === AlertType.INFO ? 'text-sky-600 dark:text-sky-200' : '',
              type === AlertType.SUCCESS ? 'text-emerald-700 dark:text-emerald-100' : '',
              type === AlertType.WARNING ? 'text-orange-500 dark:text-orange-100' : '',
            )}
          >
            {headline}
          </h3>
          {body && (
            <div
              className={classNames(
                'mt-2 font-roboto text-sm',
                icon ? 'text-left' : 'text-center',
                type === AlertType.ERROR ? 'text-red-700 dark:text-red-200' : '',
                type === AlertType.INFO ? 'text-sky-600 dark:text-sky-200' : '',
                type === AlertType.SUCCESS ? 'text-emerald-700 dark:text-emerald-100' : '',
                type === AlertType.WARNING ? 'text-orange-500 dark:text-orange-100' : '',
              )}
            >
              <p dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          )}
        </div>
      </div>
      {closable && (
        <div className='absolute top-2 right-2 z-10 flex'>
          <button
            type='button'
            className={classNames(
              'inline-flex rounded-md focus:outline-none',
              type === AlertType.ERROR
                ? 'text-red-700 hover:text-red-900 dark:text-red-200 dark:hover:text-red-100'
                : '',
              type === AlertType.INFO
                ? 'text-sky-600 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100'
                : '',
              type === AlertType.SUCCESS
                ? 'text-emerald-700 hover:text-emerald-900 dark:text-emerald-100 dark:hover:text-emerald-50'
                : '',
              type === AlertType.WARNING
                ? 'text-orange-500 hover:text-orange-700 dark:text-orange-100 dark:hover:text-orange-50'
                : '',
            )}
            onClick={destroy}
          >
            <span className='sr-only'>Close</span>
            <XMarkIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      )}
    </div>
  )
}
