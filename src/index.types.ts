import type { TextFieldProps } from '@mui/material/TextField'
import type { HEX, HSL, HSV, RGB } from 'color-convert/conversions'

type BaseTextFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

export type Colors = {
  hex: HEX
  hsl: HSL
  hsv: HSV
  rgb: RGB
}

export type Alpha = number

export interface MuiColorInputProps extends BaseTextFieldProps {
  value: string
}
