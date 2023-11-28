import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button } from '../Button'
import { ButtonType } from '../Button/button.types'

interface ConfirmDialogProps {
  /**
   * Is the dialog open?
   */
  open: boolean
  /**
   * Close handler
   */
  onClose: () => void
  /**
   * Confirm handler
   */
  onConfirm: () => void
  /**
   * Title of the dialog
   */
  title: string
  /**
   * Dialog contents
   */
  message: string | JSX.Element
  /**
   * Optional confirm label. Default OK
   */
  confirmLabel?: string
  /**
   * Optional cancel label. Default Avbryt
   */
  cancelLabel?: string
}

export const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'OK',
  cancelLabel = 'Avbryt',
}: ConfirmDialogProps) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={onClose}>
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-slate-800'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-red-600'>
                    <ExclamationTriangleIcon
                      className='h-6 w-6 text-red-600 dark:text-red-100'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:!text-left'>
                    <Dialog.Title
                      as='h3'
                      className='font-roboto text-lg font-medium leading-6 text-gray-900 dark:text-slate-200'
                    >
                      {title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='font-roboto text-sm text-gray-500 dark:text-slate-300'>
                        {message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <Button
                    type={ButtonType.DANGER}
                    onClick={onConfirm}
                    extraClassNames='w-full sm:ml-3 sm:!w-auto'
                    text={confirmLabel}
                  />
                  <Button
                    type={ButtonType.ACCENT}
                    onClick={onClose}
                    extraClassNames='mt-3 w-full sm:mt-0 sm:!w-auto'
                    text={cancelLabel}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
