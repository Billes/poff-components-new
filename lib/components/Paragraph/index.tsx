import '../../index.css'
import { ReactNode } from 'react'
import classNames from '../../utils/classNames'

interface ParagraphProps {
  /**
   * Paragraph contents
   */
  children: ReactNode
  /**
   * Optional extra classes
   */
  extraClass?: string
}

export const Paragraph = ({ children, extraClass = '', ...props }: ParagraphProps) => {
  return (
    <div
      className={classNames(
        'mb-2 space-y-2 font-roboto text-sm font-medium text-black dark:text-slate-200',
        extraClass,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
