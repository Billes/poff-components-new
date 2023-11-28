import '../../index.css'

import classNames from '../../utils/classNames'
import { ButtonType } from './button.types'

interface ButtonProps {
  /**
   * What type of button is this? Default is DEFAULT
   */
  type?: ButtonType
  /**
   * Optional button type. Default button
   */
  buttonType?: 'button' | 'submit' | 'reset' | undefined
  /**
   * Button contents
   */
  text: string
  /**
   * Optional extra class names
   */
  extraClassNames?: string
  /**
   * Optional disabled. Default false
   */
  disabled?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Button = ({
  onClick,
  text,
  type = ButtonType.DEFAULT,
  buttonType = 'button',
  disabled = false,
  extraClassNames = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className={classNames(
        type === ButtonType.PRIMARY
          ? 'bg-sky-600 !text-white focus:ring-sky-600 dark:bg-sky-400 dark:focus:ring-sky-400 dark:!text-slate-900'
          : '',
        type === ButtonType.DANGER
          ? 'bg-red-700 !text-white focus:ring-red-700 dark:bg-red-500 dark:focus:ring-red-500'
          : '',
        type === ButtonType.DEFAULT
          ? 'bg-black !text-white focus:ring-black dark:bg-slate-700 dark:focus:ring-slate-700'
          : '',
        type === ButtonType.ACCENT
          ? 'bg-fuchsia-300 !text-black focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:focus:ring-fuchsia-700 dark:!text-white'
          : '',
        'inline-flex justify-center rounded-md border border-transparent py-2 px-4 font-roboto text-sm font-bold shadow-md disabled:cursor-not-allowed disabled:opacity-50',
        'hover:ring-4 hover:ring-white',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'dark:hover:ring-0 dark:focus:ring-offset-2 dark:focus:ring-offset-slate-900 dark:focus:ring-2 dark:shadow-none',
        extraClassNames,
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  )
}
