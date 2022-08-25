import { ColorInput, TinyColor, TinyColorOptions } from '@ctrl/tinycolor'
import {
  COLOR_FALLBACK,
  DEFAULT_FORMAT_FALLBACK
} from '@shared/constants/formats'
import { matchIsString } from '@shared/helpers/string'

import type { ColorFormat } from '../../index.types'

export function getInitialDefaultFormat(
  defaultFormat?: ColorFormat,
  visibleFormats?: ColorFormat[]
): ColorFormat {
  if (!defaultFormat || !visibleFormats || visibleFormats.length === 0) {
    return visibleFormats && visibleFormats.length > 0
      ? visibleFormats[0]
      : DEFAULT_FORMAT_FALLBACK
  }

  return visibleFormats.includes(defaultFormat)
    ? defaultFormat
    : visibleFormats[0]
}

export function buildValueFromTinyColor(
  tinyColor: TinyColor,
  format: ColorFormat
): string {
  return tinyColor.toString(format)
}

export function getSafeTinyColor(
  color?: ColorInput,
  options?: Partial<TinyColorOptions>
): TinyColor {
  return new TinyColor(
    color === 'transparent' ? COLOR_FALLBACK : color,
    options
  )
}

export function stringifyInputValue(inputValue: ColorInput): string {
  if (matchIsString(inputValue)) {
    return inputValue
  }
  const tinyColor = new TinyColor(inputValue)
  return tinyColor.toString()
}
