import { Meta, StoryObj } from '@storybook/react'
import { Label } from '../../lib/components/Label'

const meta: Meta = {
  title: 'Form/Label',
  component: Label,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'This is a label',
    htmlFor: 'input-label',
  },
}
