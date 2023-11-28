interface SimpleSelectProps {
  name: string
  options: any[]
  selected: any
  keyIdentifier: string
  valueIdentifier: string
  separator?: string
  disabled?: boolean
  onChange?: (value: any) => void
}

export const SimpleSelect = ({
  name,
  options,
  selected,
  keyIdentifier,
  valueIdentifier,
  separator,
  disabled = false,
  onChange,
}: SimpleSelectProps) => {
  const valueIdentifiers = valueIdentifier.split(',')

  return (
    <div className='relative'>
      <select
        name={name}
        className='block appearance-none border-0 border-b-2 border-dashed border-sky-300 bg-transparent bg-none px-0 py-0 font-roboto text-sm text-gray-500 focus:border-sky-700 focus:outline-none focus:ring-0 dark:text-slate-200 dark:border-sky-400 dark:focus:border-sky-400'
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((o) => {
          const value = valueIdentifiers.map((identifier) => o[identifier])
          let selectedObject = false
          if (selected) {
            selectedObject = selected[keyIdentifier] === o[keyIdentifier]
          }

          return (
            <option
              key={o[keyIdentifier]}
              value={o}
              disabled={o['unavailable']}
              selected={selectedObject}
            >
              {value.join(separator)}
            </option>
          )
        })}
      </select>
    </div>
  )
}
