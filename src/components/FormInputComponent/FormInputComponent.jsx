import { TextField } from '@mui/material'

export default function FormInputComponent ({
  setFunc,
  value,
  select = false,
  helperText = '',
  placeholder='',
  children
}) {
  return (
    <TextField
      helperText={helperText}
      select={select}
      className='form__input'
      value={value}
      onChange={e => {
        setFunc(e.target.value)
      }}
      placeholder={placeholder}
    >
      {children ? children : null}
    </TextField>
  )
}
