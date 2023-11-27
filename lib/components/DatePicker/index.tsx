import '../../index.css'

import { forwardRef, ReactElement, useContext, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { IDatePickerProps, IOptions } from './DatePicker.types'
import defaultOptions from './Options'
import DatePickerPopup from './Components/DatePickerPopup'
import DatePickerProvider, { DatePickerContext } from './Components/DatePickerProvider'

export const DatePicker = ({
  children,
  options,
  onChange,
  classNames,
  show,
  setShow,
  selectedDateState,
}: IDatePickerProps) => {
  return (
    <div className={twMerge('w-full', classNames)}>
      <DatePickerProvider
        options={options}
        onChange={onChange}
        show={show}
        setShow={setShow}
        selectedDateState={selectedDateState}
      >
        <DatePickerMain options={options}>{children}</DatePickerMain>
      </DatePickerProvider>
    </div>
  )
}

const DatePickerMain = ({
  options: customOptions,
  children,
}: {
  options?: IOptions
  children?: ReactElement
}) => {
  const options = { ...defaultOptions, ...customOptions }
  const { setShow, show } = useContext(DatePickerContext)
  const InputRef = useRef<HTMLInputElement>(null)
  const DatePickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(InputRef?.current && DatePickerRef?.current)) return
      if (
        !InputRef.current.contains(event.target as Node) &&
        !DatePickerRef.current.contains(event.target as Node)
      ) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', (event) => handleClickOutside(event))

    return () => {
      document.removeEventListener('mousedown', (event) => handleClickOutside(event))
    }
  }, [DatePickerRef, InputRef, setShow])

  return (
    <>
      {children ? (
        children
      ) : (
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <CalendarIcon />
          </div>
          <Input
            ref={InputRef}
            idProp={options?.inputIdProp}
            nameProp={options?.inputNameProp}
            placeholderProp={options?.inputPlaceholderProp}
            dateFormat={options?.inputDateFormatProp}
          />
        </div>
      )}
      {show && <DatePickerPopup ref={DatePickerRef} />}
    </>
  )
}

const Input = forwardRef<
  HTMLInputElement,
  {
    idProp?: string
    nameProp?: string
    placeholderProp?: string
    dateFormat?: Intl.DateTimeFormatOptions
  }
>((props, ref) => {
  const { setShow, selectedDate, showSelectedDate, options, getFormattedDate } =
    useContext(DatePickerContext)

  const nameProp = props.nameProp || 'date'
  const idProp = props.idProp || nameProp
  const placeholderProp = props.placeholderProp || 'Select Date'

  const format = props.dateFormat || null

  return (
    <input
      ref={ref}
      type='text'
      name={nameProp}
      id={idProp}
      className={twMerge(
        'block w-full rounded-md',
        'border',
        'font-roboto font-light text-gray-900 sm:text-sm',
        'focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-75',
        'focus:ring-1',
        'dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400',
        'border-gray-300 focus:border-sky-600 focus:ring-sky-600 py-2.5 pl-9 pr-2.5 ',
        options?.theme?.input,
      )}
      placeholder={placeholderProp}
      value={selectedDate && showSelectedDate ? getFormattedDate(selectedDate, format) : ''}
      onFocus={() => setShow(true)}
      readOnly
    />
  )
})
Input.displayName = 'Input'

const CalendarIcon = () => {
  const { options } = useContext(DatePickerContext)
  return (
    <svg
      aria-hidden='true'
      className={twMerge('h-5 w-5 text-gray-500 dark:text-white', options?.theme?.inputIcon)}
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z' />
      <path
        fillRule='evenodd'
        d='M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z'
        clipRule='evenodd'
      />
    </svg>
  )
}
