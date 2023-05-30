import { ColorInput, TinyColor, TinyColorOptions } from '@ctrl/tinycolor'
import { matchIsString } from '@shared/helpers/string'
import type { MuiColorInputFormat, MuiColorInputValue } from '../../index.types'

export function buildValueFromTinyColor(
  tinyColor: TinyColor,
  format: MuiColorInputFormat
): string {
  return tinyColor.toString(format)
}

export function getSafeTinyColor(
  color?: MuiColorInputValue,
  fallbackColor?: MuiColorInputValue,
  options?: Partial<TinyColorOptions>
): TinyColor {
  return new TinyColor(color, options)
}

export function stringifyInputValue(inputValue: ColorInput): string {
  if (matchIsString(inputValue)) {
    return inputValue
  }
  const tinyColor = new TinyColor(inputValue)
  return tinyColor.toString()
}
