interface SubtitleProps {
  label: string
}

export const Subtitle = ({ label, ...props }: SubtitleProps) => {
  return (
    <h3
      className='font-roboto text-2xl font-medium leading-6 text-black dark:text-slate-200'
      {...props}
    >
      {label}
    </h3>
  )
}
