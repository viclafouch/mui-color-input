import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import type {
  ColorFormats,
  ColorInput as ColorInputValue,
  HSL,
  HSV,
  RGB
} from '@ctrl/tinycolor'

export type ColorFormat = Extract<'hex' | 'rgb', ColorFormats>

export type { ColorInputValue }

type PopoverProps = Omit<MuiPopoverProps, 'anchorEl' | 'open' | 'children'>

type TextFieldProps = Omit<
  MuiTextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

export type Colors = {
  hex: string
  hsl: HSL
  hsv: HSV
  rgb: RGB
}

export interface MuiColorInputProps extends TextFieldProps {
  value: ColorInputValue
  format?: ColorFormat
  isAlphaHidden?: boolean
  onChange?: (value: string, colors: Colors) => void
  PopoverProps?: PopoverProps
}
