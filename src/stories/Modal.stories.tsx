import { Meta, StoryObj } from '@storybook/react'
import { Modal } from '../../lib/components/Modal'
import { Headline, Input, Label } from '../../lib/poff-components-new'

const meta: Meta = {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {
      console.log('closing')
    },
    children: (
      <>
        <h3 className='font-roboto text-3xl font-black'>Basic html</h3>
        <p className='font-roboto text-sm text-gray-700'>
          Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
          proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
          tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt
          sit. Et mollit proident ullamco deserunt amet proident labore nostrud.
          <br />
          Incididunt irure dolore deserunt do labore mollit fugiat nulla exercitation non sit in
          nostrud ad.
        </p>
      </>
    ),
  },
}

export const Components: Story = {
  args: {
    ...Default.args,
    children: (
      <div className='font-roboto text-sm text-gray-500'>
        <Headline label='Use components' />
        <dl className='mt-2'>
          <div className='grid grid-cols-3 gap-4 py-1'>
            <dt className='mt-2 flex items-start'>
              <Label text='Name' htmlFor='name' />
            </dt>
            <dd className='col-span-2 mt-0 text-sm'>
              <Input id='name' name='name' placeholder='Write your name' value='' />
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 py-1'>
            <dt className='mt-2 flex items-start'>
              <Label text='E-mail address' htmlFor='email' />
            </dt>
            <dd className='col-span-2 mt-0 text-sm'>
              <Input id='email' name='email' value='' placeholder='E-mail address' />
            </dd>
          </div>
        </dl>
      </div>
    ),
  },
}

export const Overflow: Story = {
  args: {
    ...Default.args,
    overflowHidden: false,
  },
}

export const DynamicWidth: Story = {
  args: {
    ...Default.args,
    width: '2xl',
  },
}
