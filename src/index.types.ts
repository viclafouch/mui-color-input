// import type { TextFieldProps } from '@mui/material/TextField'

import type {
  ColorFormats,
  ColorInput as ColorInputValue
} from '@ctrl/tinycolor'

// type BaseTextFieldProps = Omit<
//   TextFieldProps,
//   'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
// >

export type ColorFormat = Extract<'hex' | 'rgb', ColorFormats>

export type { ColorInputValue }

export interface MuiColorInputProps {
  value: ColorInputValue
  visibleFormats?: ColorFormat[]
  defaultFormat?: ColorFormat
  onChange?: (value: ColorInputValue) => void
}
