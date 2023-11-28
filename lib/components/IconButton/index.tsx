import '../../index.css'

import { ReactNode } from 'react'
import { IconButtonType } from './iconButton.types'
import classNames from '../../utils/classNames'

interface IconButtonProps {
  /**
   * What type of icon button is this? Default is DEFAULT
   */
  type?: IconButtonType
  /**
   * Icon
   */
  icon: ReactNode
  /**
   * Optional title
   */
  title?: string
  /**
   * Optional disabled. Default false
   */
  disabled?: boolean
  /**
   * Click handler
   */
  onClick: () => void
}

export const IconButton = ({
  onClick,
  icon,
  title,
  type = IconButtonType.DEFAULT,
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type='button'
      className={classNames(
        type === IconButtonType.PRIMARY
          ? 'bg-sky-600 !text-white focus:ring-sky-600 dark:bg-sky-400 dark:focus:ring-sky-400 dark:!text-slate-900'
          : '',
        type === IconButtonType.DANGER
          ? 'bg-red-700 !text-white focus:ring-red-700 dark:bg-red-500 dark:focus:ring-red-500'
          : '',
        type === IconButtonType.DEFAULT
          ? 'bg-black !text-white focus:ring-black dark:bg-slate-700 dark:focus:ring-slate-700'
          : '',
        type === IconButtonType.ACCENT
          ? 'bg-fuchsia-300 !text-black focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:focus:ring-fuchsia-700 dark:!text-white'
          : '',
        'inline-flex items-center rounded-full border border-transparent p-2 shadow-md disabled:cursor-not-allowed disabled:opacity-50',
        'hover:ring-4 hover:ring-white',
        'focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2',
        'dark:hover:ring-0 dark:focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:focus:ring-2 dark:shadow-none',
      )}
      title={title}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  )
}
