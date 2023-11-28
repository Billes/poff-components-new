/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import { IOptions } from '../DatePicker.types'
import defaultOptions from '../Options'
import { getFormattedDate as formatDate } from '../Utils/date'

interface IDatePickerContext {
  options: IOptions
  view: Views
  setView: Dispatch<SetStateAction<Views>>
  show: boolean
  setShow: (show: boolean) => void
  selectedDate: Date
  changeSelectedDate: (action: 'prev' | 'next' | 'date' | 'today', date: Date) => void
  showSelectedDate: boolean
  setShowSelectedDate: Dispatch<SetStateAction<boolean>>
  selectedMonth: number
  selectedYear: number
  getFormattedDate: (
    date: Date | number,
    formatOptions?: Intl.DateTimeFormatOptions | null | undefined,
  ) => string
}

export type Views = 'days' | 'months' | 'years' | 'decades'

export const DatePickerContext = createContext<IDatePickerContext>({
  options: defaultOptions,
  view: 'days',
  setView: () => {},
  show: false,
  setShow: () => {},
  selectedDate: new Date(),
  changeSelectedDate: () => {},
  showSelectedDate: true,
  setShowSelectedDate: () => {},
  selectedMonth: 0,
  selectedYear: 0,
  getFormattedDate: () => '',
})

interface IDatePickerProviderProps {
  children: ReactElement
  options?: IOptions
  onChange?: (date: Date) => void
  show: boolean
  setShow: (show: boolean) => void
  selectedDateState?: [Date, (date: Date) => void]
}

const DatePickerProvider = ({
  children,
  options: customOptions,
  onChange,
  show,
  setShow,
  selectedDateState,
}: IDatePickerProviderProps) => {
  const options = { ...defaultOptions, ...customOptions }
  const [view, setView] = useState<Views>('days')
  const [selectedDate, setSelectedDate] =
    selectedDateState || useState<Date>(options?.defaultDate || new Date())
  const [showSelectedDate, setShowSelectedDate] = useState<boolean>(options?.defaultDate !== null)

  useEffect(() => {
    // Special function to remove GO null value
    setShowSelectedDate(selectedDate.toISOString() !== '0001-01-01T00:00:00.000Z')
  }, [selectedDate])

  const selectedMonth = selectedDate.getMonth()
  const selectedYear = selectedDate.getFullYear()

  const changeSelectedDate = (action: 'prev' | 'next' | 'date' | 'today', date: Date) => {
    if (options?.maxDate && date > options.maxDate) return
    if (options?.minDate && date < options.minDate) return
    if (options?.disabledDates && options.disabledDates.indexOf(date) >= 0) return
    setSelectedDate(date)
    setShowSelectedDate(true)
    if (options?.autoHide && view === 'days' && action === 'date') setShow(false)
    if (onChange) onChange(date)
  }

  const getFormattedDate = (
    date: Date | number,
    formatOptions?: Intl.DateTimeFormatOptions | undefined | null,
  ) => formatDate(options?.language ? options?.language : 'sv', date, formatOptions)

  return (
    <DatePickerContext.Provider
      value={{
        options,
        view,
        setView,
        show,
        setShow,
        selectedDate,
        changeSelectedDate,
        showSelectedDate,
        setShowSelectedDate,
        selectedMonth,
        selectedYear,
        getFormattedDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  )
}

export default DatePickerProvider
