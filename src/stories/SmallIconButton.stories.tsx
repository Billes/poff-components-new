import { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon, PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { SmallIconButton } from '../../lib/components/SmallIconButton'
import { SmallIconButtonType } from '../../lib/components/SmallIconButton/SmalliconButton.types'

const meta: Meta = {
  title: 'Form/SmallIconButton',
  component: SmallIconButton,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof SmallIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: SmallIconButtonType.PRIMARY,
    icon: <PlusIcon className='h-4 w-4' aria-hidden='true' />,
    disabled: false,
    title: 'Example of title',
  },
}

export const Danger: Story = {
  args: {
    ...Primary.args,
    type: SmallIconButtonType.DANGER,
    icon: <MinusIcon className='h-4 w-4' aria-hidden='true' />,
  },
}

export const Accent: Story = {
  args: {
    ...Primary.args,
    type: SmallIconButtonType.ACCENT,
    icon: <MagnifyingGlassIcon className='h-4 w-4' aria-hidden='true' />,
  },
}

export const Default: Story = {
  args: {
    ...Primary.args,
    type: SmallIconButtonType.DEFAULT,
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
    type: SmallIconButtonType.PRIMARY,
    disabled: false,
    title: 'Example of title',
  },
}
