import { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { IconButton } from '../../lib/components/IconButton/index'
import { IconButtonType } from '../../lib/components/IconButton/iconButton.types'

const meta: Meta = {
  title: 'Form/IconButton',
  component: IconButton,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: IconButtonType.PRIMARY,
    icon: <PlusIcon className='h-6 w-6' aria-hidden='true' />,
    disabled: false,
    title: 'Example of title',
  },
}

export const Danger: Story = {
  args: {
    ...Primary.args,
    type: IconButtonType.DANGER,
    icon: <MinusIcon className='h-6 w-6' aria-hidden='true' />,
  },
}

export const Accent: Story = {
  args: {
    ...Primary.args,
    type: IconButtonType.ACCENT,
    icon: <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />,
  },
}

export const Default: Story = {
  args: {
    ...Primary.args,
    type: IconButtonType.DEFAULT,
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
}

export const Extra: Story = {
  args: {
    ...Primary.args,
    icon: <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />,
    type: IconButtonType.PRIMARY,
    disabled: false,
    title: 'Example of title',
  },
}
