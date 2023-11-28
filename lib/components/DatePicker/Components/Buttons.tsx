import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { goToPrevNext, startOfYearPeriod } from '../Utils/date'
import { DatePickerContext, Views } from './DatePickerProvider'

export const ButtonPrevMonth = () => {
  const { selectedDate, changeSelectedDate, view, options } = useContext(DatePickerContext)
  return (
    <button
      type='button'
      className={twMerge(
        'rounded-lg bg-white p-2.5 font-roboto text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white',
        options?.theme?.icons,
      )}
      onClick={() => changeSelectedDate('prev', new Date(goToPrevNext(view, selectedDate, -1)))}
    >
      {options?.icons?.prev ? (
        options?.icons?.prev()
      ) : (
        <svg
          className='h-4 w-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </button>
  )
}

export const ButtonSelectMonth = () => {
  const { selectedDate, view, setView, options, getFormattedDate } = useContext(DatePickerContext)

  const calculateView = (): Views => {
    if (view === 'days') return 'months'
    if (view === 'months') return 'years'
    if (view === 'years') return 'decades'
    return view
  }

  return (
    <button
      type='button'
      className={twMerge(
        'rounded-lg bg-white px-5 py-2.5 font-roboto text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        options?.theme?.icons,
      )}
      onClick={() => setView(calculateView())}
    >
      {view === 'days' && getFormattedDate(selectedDate, { month: 'long', year: 'numeric' })}
      {view === 'months' && getFormattedDate(selectedDate, { year: 'numeric' })}
      {view === 'years' &&
        `${startOfYearPeriod(selectedDate, 10)}-${startOfYearPeriod(selectedDate, 10) + 9}`}
      {view === 'decades' &&
        `${startOfYearPeriod(selectedDate, 100)}-${startOfYearPeriod(selectedDate, 100) + 90}`}
    </button>
  )
}

export const ButtonNextMonth = () => {
  const { selectedDate, changeSelectedDate, view, options } = useContext(DatePickerContext)
  return (
    <button
      type='button'
      className={twMerge(
        'rounded-lg bg-white p-2.5 font-roboto text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white',
        options?.theme?.icons,
      )}
      onClick={() => changeSelectedDate('next', new Date(goToPrevNext(view, selectedDate, 1)))}
    >
      {options?.icons?.next ? (
        options?.icons?.next()
      ) : (
        <svg
          className='h-4 w-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </button>
  )
}

export const ButtonToday = () => {
  const { changeSelectedDate, setView, options } = useContext(DatePickerContext)
  return (
    <button
      type='button'
      className={twMerge(
        'w-full rounded-lg bg-sky-600 px-5 py-2 text-center font-roboto text-sm font-medium text-white hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-400 dark:hover:bg-sky-500',
        options?.theme?.todayBtn,
      )}
      onClick={() => {
        changeSelectedDate('today', new Date())
        setView('days')
      }}
    >
      {options?.todayBtnText}
    </button>
  )
}

export const ButtonClear = () => {
  const { setShowSelectedDate, options } = useContext(DatePickerContext)
  return (
    <button
      type='button'
      className={twMerge(
        'w-full rounded-lg border border-gray-300 bg-white px-5 py-2 text-center font-roboto text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-sky-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600',
        options?.theme?.clearBtn,
      )}
      onClick={() => setShowSelectedDate(false)}
    >
      {options?.clearBtnText}
    </button>
  )
}
