import { Meta, StoryObj } from '@storybook/react'
import { PhoneInput } from '../../lib/components/PhoneInput'

const meta: Meta = {
  title: 'Form/PhoneInput',
  component: PhoneInput,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PhoneInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'phoneInputStandard',
    name: 'phoneInputStandard',
    defaultCountry: 'SE',
    value: '+4631242727',
    onChange: (inputNumber: string | undefined) => {
      console.log(inputNumber)
    },
  },
}

export const Default2: Story = {
  args: {
    ...Default.args,
    value: '+2312345612',
  },
}

export const PreferredCountries: Story = {
  args: {
    ...Default.args,
    preferredCountries: ['DK', 'FI', 'NO', 'SE'],
    value: '+46730123456',
  },
}

export const OnlyCountries: Story = {
  args: {
    ...Default.args,
    onlyCountries: ['DK', 'FI', 'NO', 'SE'],
    value: '+46 73 012 34 56',
  },
}

export const EmptyValue: Story = {
  args: {
    ...Default.args,
  },
}

export const InvalidPhoneNumber: Story = {
  args: {
    ...Default.args,
    value: '+12345',
  },
}

export const ErrorMessagePhoneNumber: Story = {
  args: {
    ...Default.args,
    value: '',
    error: 'This field is required',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const updatedCountry: Story = {
  args: {
    ...Default.args,
    updatedCountry: 'AL',
  },
}
