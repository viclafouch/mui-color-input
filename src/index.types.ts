import type { TextFieldProps } from '@mui/material/TextField'

type BaseTextFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

export interface MuiColorInputProps extends BaseTextFieldProps {
  value: string
}
