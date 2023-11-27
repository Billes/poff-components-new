import { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { DatePicker } from '../../lib/poff-components-new'

const meta: Meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Basic = ({ ...args }: Story) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }

  return <DatePicker {...args} setShow={handleOpen} show={isOpen} onChange={handleChange} />
}

export const Formatted = ({ ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }
  const dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  const options = {
    inputDateFormatProp: dateFormat,
  }

  return (
    <DatePicker
      {...args}
      setShow={handleOpen}
      show={isOpen}
      options={options}
      onChange={handleChange}
    />
  )
}

export const ISODate = ({ ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }

  const options = {
    defaultDate: new Date('2023-07-31T22:00:00.000+0000'),
  }

  return (
    <DatePicker
      {...args}
      setShow={handleOpen}
      show={isOpen}
      options={options}
      onChange={handleChange}
    />
  )
}

export const DateObject = ({ ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }

  const options = {
    defaultDate: new Date('2023-07-31T22:00:00.00Z'),
  }

  return (
    <DatePicker
      {...args}
      setShow={handleOpen}
      show={isOpen}
      options={options}
      onChange={handleChange}
    />
  )
}

export const FilterDate = ({ ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }

  const options = {
    defaultDate: new Date(),
  }

  return (
    <DatePicker
      {...args}
      setShow={handleOpen}
      show={isOpen}
      options={options}
      onChange={handleChange}
      selectedDateState={[new Date('0001-01-01T00:00:00Z'), () => {}]}
    />
  )
}

export const Advanced = ({ ...args }) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleOpen = () => updateArgs({ isOpen: !isOpen })
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate)
  }

  const options = {
    title: 'Demo Title',
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date('2030-01-01'),
    minDate: new Date('1950-01-01'),
    theme: {
      background: 'bg-gray-200 dark:bg-gray-800',
      todayBtn: '',
      clearBtn: '',
      icons: '',
      text: '',
      disabledText: 'bg-red-500',
      input: '',
      inputIcon: '',
      selected: '',
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: 'top-12',
    defaultDate: new Date('2022-01-01'),
    language: 'en',
    inputNameProp: 'date',
  }

  return (
    <DatePicker
      {...args}
      setShow={handleOpen}
      show={isOpen}
      options={options}
      onChange={handleChange}
    />
  )
}
