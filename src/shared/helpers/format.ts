import { matchIsString } from '@shared/helpers/string'
import { ColorInput, TinyColor, TinyColorOptions } from '@ctrl/tinycolor'
import type { MuiColorInputFormat, MuiColorInputValue } from '../../index.types'

export function buildValueFromTinyColor(
  tinyColor: TinyColor,
  format: MuiColorInputFormat
): string {
  return tinyColor.isValid
    ? tinyColor.toString(format)
    : tinyColor.originalInput.toString()
}

export function getSafeTinyColor(
  color?: MuiColorInputValue,
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
