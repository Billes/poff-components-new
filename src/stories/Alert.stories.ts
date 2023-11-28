import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../../lib/components/Alert'
import { AlertType } from '../../lib/components/Alert/alert.types'

const meta: Meta = {
  title: 'Elements/Alert',
  component: Alert,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    closable: { control: 'boolean' },
    icon: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    closable: true,
    type: AlertType.SUCCESS,
    headline: 'Success!',
    body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
    icon: false,
  },
}

export const Info: Story = {
  args: {
    ...Success.args,
    type: AlertType.INFO,
    headline: 'Information',
    icon: true,
  },
}

export const Warning: Story = {
  args: {
    ...Success.args,
    type: AlertType.WARNING,
    headline: 'Warning!',
    closable: true,
  },
}

export const Error: Story = {
  args: {
    ...Success.args,
    type: AlertType.ERROR,
    headline: 'Error!',
    closable: true,
  },
}

export const OnlyHeadline: Story = {
  args: {
    ...Success.args,
    type: AlertType.SUCCESS,
    headline: 'Error!',
    closable: true,
    icon: true,
    body: undefined,
  },
}

export const SelfDestroying: Story = {
  args: {
    ...Success.args,
    type: AlertType.SUCCESS,
    headline: 'Self destroying!',
    closable: true,
    body: 'This alert will self destroy after 3 seconds. (set duration in ms)',
    duration: 3000,
  },
}
