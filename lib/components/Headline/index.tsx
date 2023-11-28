import '../../index.css'

interface HeadlineProps {
  /**
   * Headline text
   */
  label: string
}

export const Headline = ({ label, ...props }: HeadlineProps) => {
  return (
    <h3
      className='font-roboto text-2xl font-black leading-6 text-black dark:text-slate-200'
      {...props}
    >
      {label}
    </h3>
  )
}
