import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../../lib/components/Toggle'

const meta: Meta = {
  title: 'Form/Toggle',
  component: Toggle,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    enabled: false,
    disabled: false,
    label: 'Toggle Switch',
    description: 'A small description',
    onClick: () => {
      console.log('toggle')
    },
  },
}
