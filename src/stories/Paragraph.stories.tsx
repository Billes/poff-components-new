import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '../../lib/components/Paragraph'

const meta: Meta = {
  title: 'Text/Paragraph',
  component: Paragraph,
  parameters: {
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p>
        Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
        proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
        tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt sit.
        Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure dolore
        deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
      </p>
    ),
  },
}

export const MultipleParagraphs: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <h1 className='text-2xl font-bold uppercase text-gray-500'>Headline</h1>
        <p>
          Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
          proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
          tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt
          sit. Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure
          dolore deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
        </p>
        <p>
          Consequat aliquip tempor proident culpa adipisicing laboris enim adipisicing. Elit enim
          proident eu duis irure consequat mollit eu consectetur labore. Id nulla voluptate velit
          tempor aute Lorem ullamco minim esse. Veniam laboris sit nisi id qui officia incididunt
          sit. Et mollit proident ullamco deserunt amet proident labore nostrud. Incididunt irure
          dolore deserunt do labore mollit fugiat nulla exercitation non sit in nostrud ad.
        </p>
      </>
    ),
  },
}
