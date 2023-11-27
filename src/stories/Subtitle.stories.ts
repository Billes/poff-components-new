import { Meta, StoryObj } from '@storybook/react'
import { Subtitle } from '../../lib/components/Subtitle'

const meta: Meta = {
  title: 'Text/Subtitle',
  component: Subtitle,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Subtitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is a subtitle',
  },
}
