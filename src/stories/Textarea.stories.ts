import { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../../lib/components/Textarea'

const meta: Meta = {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Testar med text',
    name: 'Textarea',
    disabled: false,
  },
}

export const Disable: Story = {
  args: {
    ...Default.args,
    name: 'TextareaDisabled',
    disabled: true,
  },
}

export const Rows: Story = {
  args: {
    ...Default.args,
    name: 'TextareaRows',
    rows: 10,
    placeholder: 'Testar med text',
  },
}
