import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../lib/components/Button'
import { ButtonType } from '../../lib/components/Button/button.types'

const meta: Meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: ButtonType.PRIMARY,
    text: 'Save',
    disabled: false,
    extraClassNames: '',
  },
}

export const Accent: Story = {
  args: {
    ...Primary.args,
    type: ButtonType.ACCENT,
    text: 'Cancel',
  },
}

export const Default: Story = {
  args: {
    ...Primary.args,
    type: ButtonType.DEFAULT,
    text: 'Close',
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    type: ButtonType.PRIMARY,
    text: 'Save',
    disabled: true,
  },
}
