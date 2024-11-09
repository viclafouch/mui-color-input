import type {
  ColorButtonElement,
  ColorButtonProps
} from '@components/ColorButton/ColorButton'
import type {
  ColorFormats,
  ColorInput as MuiColorInputValue
} from '@ctrl/tinycolor'
import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

export type MuiColorInputFormat = Extract<
  'hex' | 'rgb' | 'hex8' | 'hsl' | 'hsv',
  ColorFormats
>

export type { ColorButtonProps as MuiColorButtonProps, MuiColorInputValue }

type PopoverProps = Omit<MuiPopoverProps, 'anchorEl' | 'open' | 'children'>

type TextFieldProps = Omit<
  MuiTextFieldProps,
  | 'onChange'
  | 'select'
  | 'type'
  | 'multiline'
  | 'defaultValue'
  | 'InputProps'
  | 'inputProps'
  | 'InputLabelProps'
>

export type MuiColorInputColors = {
  hex: string
  hsl: string
  hsv: string
  rgb: string
  hex8: string
}

export interface MuiColorInputProps extends TextFieldProps {
  value: MuiColorInputValue
  adornmentPosition?: 'start' | 'end'
  Adornment?: ColorButtonElement
  fallbackValue?: MuiColorInputValue
  format?: MuiColorInputFormat
  disablePopover?: boolean
  isAlphaHidden?: boolean
  onChange?: (value: string, colors: MuiColorInputColors) => void
  PopoverProps?: PopoverProps
}
