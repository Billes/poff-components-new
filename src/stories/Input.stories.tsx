import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Input } from '../../lib/components/Input'
import { InputType } from '../../lib/components/Input/input.types'

const meta: Meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'standard',
    name: 'InputStandard',
  },
}

export const Placeholder: Story = {
  args: {
    ...Default.args,
    id: 'placeholder',
    name: 'InputPlaceholder',
    placeholder: 'Exempel med placeholder',
  },
}

export const Readonly: Story = {
  args: {
    ...Default.args,
    id: 'readonly',
    name: 'InputReadonly',
    description: 'This field is readonly',
    value: 'Readonly value',
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    id: 'error',
    name: 'InputError',
    description: 'En kort beskrivning av fältet',
    error: 'Värdet saknas',
  },
}

export const Password: Story = {
  args: {
    ...Default.args,
    id: 'password',
    name: 'InputPassword',
    placeholder: 'Enter a password',
    type: InputType.PASSWORD,
  },
}

export const Icon: Story = {
  args: {
    ...Default.args,
    id: 'icon',
    name: 'InputIcon',
    placeholder: 'Search ...',
    type: InputType.SEARCH,
    icon: <MagnifyingGlassIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />,
  },
}

export const MaxLength: Story = {
  args: {
    ...Default.args,
    id: 'maxLength',
    name: 'InputMaxLength',
    description: 'Max 35 tecken',
    maxLength: 35,
  },
}
