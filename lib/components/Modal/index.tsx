import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import classNames from '../../utils/classNames'

interface ModalProps {
  /**
   * Modal content
   */
  children?: ReactNode
  /**
   * Is modal open
   */
  open: boolean
  /**
   * Optional if modal should have overflow hidden. Default is true
   */
  overflowHidden?: boolean
  /**
   * onClose function
   */
  onClose: () => void
  /**
   * Optional width of modal. Default is lg
   */
  width?: string
}

export const Modal = ({ children, width = 'lg', overflowHidden = true, ...props }: ModalProps) => {
  const getWidthForStyle = (width: string) => {
    switch (width) {
      case 'xs':
        return '20rem'
      case 'sm':
        return '24rem'
      case 'md':
        return '28rem'
      case 'lg':
        return '32rem'
      case 'xl':
        return '36rem'
      case '2xl':
        return '42rem'
      case '3xl':
        return '48rem'
      case '4xl':
        return '56rem'
      case '5xl':
        return '64rem'
      case '6xl':
        return '72rem'
      case '7xl':
        return '80rem'
      case 'w-full':
        return '100%'
      case 'w-min':
        return 'min-content'
      case 'w-max':
        return 'max-content'
      case 'w-fit':
        return 'fit-content'
      default:
        return '32rem'
    }
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-slate-700/75' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel
                style={{ maxWidth: getWidthForStyle(width) }}
                className={classNames(
                  overflowHidden ? 'overflow-hidden' : '',
                  'relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 dark:bg-slate-800 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:text-slate-200',
                )}
              >
                <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:!block'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 dark:bg-slate-800 dark:text-slate-200'
                    onClick={props.onClose}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
