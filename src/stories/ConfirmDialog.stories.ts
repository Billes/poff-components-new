import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmDialog } from '../../lib/components/ConfirmDialog'

const meta: Meta = {
  title: 'Overlay/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    title: 'Är du säker?',
    message: 'Om du trycker på OK kommer allt att explodera',
    onClose: () => {
      console.log('closing')
    },
    onOpen: () => {
      console.log('opening')
    },
  },
}

export const AlternativeButtons: Story = {
  args: {
    ...Default.args,
    cancelLabel: 'Stäng den här',
    confirmLabel: 'Klart jag godkänner',
  },
}
