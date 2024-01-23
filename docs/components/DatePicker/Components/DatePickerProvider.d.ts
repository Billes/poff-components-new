import { Dispatch, ReactElement, SetStateAction } from 'react';
import { IOptions } from '../DatePicker.types';
interface IDatePickerContext {
    options: IOptions;
    view: Views;
    setView: Dispatch<SetStateAction<Views>>;
    show: boolean;
    setShow: (show: boolean) => void;
    selectedDate: Date;
    changeSelectedDate: (action: 'prev' | 'next' | 'date' | 'today', date: Date) => void;
    showSelectedDate: boolean;
    setShowSelectedDate: Dispatch<SetStateAction<boolean>>;
    selectedMonth: number;
    selectedYear: number;
    getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions | null | undefined) => string;
}
export type Views = 'days' | 'months' | 'years' | 'decades';
export declare const DatePickerContext: import("react").Context<IDatePickerContext>;
interface IDatePickerProviderProps {
    children: ReactElement;
    options?: IOptions;
    onChange?: (date: Date) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    selectedDateState?: [Date, (date: Date) => void];
}
declare const DatePickerProvider: ({ children, options: customOptions, onChange, show, setShow, selectedDateState, }: IDatePickerProviderProps) => import("react/jsx-runtime").JSX.Element;
export default DatePickerProvider;