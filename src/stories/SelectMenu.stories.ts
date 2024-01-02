import { Meta, StoryObj } from '@storybook/react'
import { SelectMenu } from '../../lib/poff-components'

const meta: Meta = {
  title: 'Form/SelectMenu',
  component: SelectMenu,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectMenu>

export default meta
type Story = StoryObj<typeof meta>

const people = [
  {
    id: '1',
    name: 'Durward Reynolds',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '2',
    name: 'Kenton Towne',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '3',
    name: 'Therese Wunsch',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '4',
    name: 'Benedict Kessler',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '5',
    name: 'Katelyn Rohan',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
]

const people2 = [
  {
    id: '1',
    name: 'Durward Reynolds',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '2',
    name: 'Kenton Towne',
    mobile: '0123456789',
    mail: 'test@example.com',
    unavailable: true,
  },
  {
    id: '3',
    name: 'Therese Wunsch',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
  {
    id: '4',
    name: 'Benedict Kessler',
    mobile: '0123456789',
    mail: 'test@example.com',
    unavailable: true,
  },
  {
    id: '5',
    name: 'Katelyn Rohan',
    mobile: '0123456789',
    mail: 'test@example.com',
  },
]

export const Default: Story = {
  args: {
    name: 'people',
    options: people,
    selected: null,
    keyIdentifier: 'id',
    valueIdentifier: 'name',
    disabled: false,
  },
}

export const Selected: Story = {
  args: {
    ...Default.args,
    selected: people[2],
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const DisabledOptions: Story = {
  args: {
    ...Default.args,
    options: people2,
  },
}

export const Empty: Story = {
  args: {
    ...Default.args,
    options: [],
  },
}

export const Descriptions: Story = {
  args: {
    ...Default.args,
    description: 'This is a description',
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    required: true,
    description: 'This is a description',
    error: 'This field is mandatory',
  },
}
