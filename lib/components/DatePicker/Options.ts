import { IOptions } from './DatePicker.types'

const options: IOptions = {
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  todayBtnText: 'Idag',
  clearBtnText: 'Rensa',
  theme: {
    background: '',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    disabledText: '',
    input: '',
    inputIcon: '',
    selected: '',
  },
  datepickerClassNames: '',
  defaultDate: new Date(),
  language: 'sv',
  weekDays: ['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Välj datum',
  inputDateFormatProp: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  },
}

export default options
