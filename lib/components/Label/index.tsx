import '../../index.css'
import classNames from '../../utils/classNames'

interface LabelProps {
  /**
   * Label text
   */
  text: string
  /**
   * Reference to id of input
   */
  htmlFor: string
  /**
   * Optionsl if is required
   */
  required?: boolean
  /**
   * Optional extra classes
   */
  extraClass?: string
}

export const Label = ({
  text,
  htmlFor,
  required = false,
  extraClass = '',
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        'block font-roboto text-sm font-normal text-black dark:text-slate-200',
        extraClass,
      )}
      {...props}
    >
      {text}
      {required && <span>*</span>}
    </label>
  )
}
