import { useContext } from 'react'
import { addDays } from '../../Utils/date'
import { DatePickerContext } from '../DatePickerProvider'
import { twMerge } from 'tailwind-merge'

interface IDaysProps {
  start: number
}

const Days = ({ start }: IDaysProps) => {
  const { selectedDate, changeSelectedDate, showSelectedDate, getFormattedDate, options } =
    useContext(DatePickerContext)

  const startOfWeek = (new Date(start).getDay() + 6) % 7
  const weekDays = options.weekDays || []
  const sortedWeekDays = weekDays.slice(startOfWeek).concat(weekDays.slice(0, startOfWeek))

  return (
    <>
      <div className='mb-1 grid grid-cols-7'>
        {sortedWeekDays.map((day, index) => (
          <span
            key={index}
            className='dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-slate-400'
          >
            {day}
          </span>
        ))}
      </div>
      <div className='grid w-64 grid-cols-7'>
        {[...Array(42)].map((_date, index) => {
          const current = addDays(start, index)
          const day = getFormattedDate(current, { day: 'numeric' })
          const month = getFormattedDate(current, { month: 'long' })
          const year = getFormattedDate(current, { year: 'numeric' })
          return (
            <span
              key={index}
              className={`block flex-1 cursor-pointer rounded-lg border-0 text-center font-roboto text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600 ${
                showSelectedDate &&
                selectedDate.getTime() > 0 &&
                getFormattedDate(selectedDate) === getFormattedDate(current)
                  ? twMerge(
                      'bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-600',
                      options?.theme?.selected,
                    )
                  : ''
              } ${
                month == getFormattedDate(selectedDate, { month: 'long' }) &&
                year == getFormattedDate(selectedDate, { year: 'numeric' })
                  ? twMerge('text-gray-900', options?.theme?.text)
                  : twMerge('text-gray-500', options?.theme?.disabledText)
              } ${
                (options?.minDate && new Date(current) < options?.minDate) ||
                (options?.disabledDates && options.disabledDates.indexOf(new Date(current)) >= 0)
                  ? twMerge('text-gray-500', options?.theme?.disabledText)
                  : ''
              } ${
                (options?.maxDate && new Date(current) > options?.maxDate) ||
                (options?.disabledDates && options.disabledDates.indexOf(new Date(current)) >= 0)
                  ? twMerge('text-gray-500', options?.theme?.disabledText)
                  : ''
              }
                            `}
              onClick={() => {
                changeSelectedDate('date', new Date(current))
              }}
            >
              {day}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Days
