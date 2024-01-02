import { Meta, StoryObj } from '@storybook/react'
import { Headline } from '../../lib/components/Headline'

const meta: Meta = {
  title: 'Text/Headline',
  component: Headline,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Headline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is a headline',
  },
}
