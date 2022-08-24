import { TinyColor } from '@ctrl/tinycolor'
import { DEFAULT_FORMAT_FALLBACK } from '@shared/constants/formats'
import { ColorFormat } from 'index.types'

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

export function buildValueFromTinyColor(tinyColor: TinyColor): string {
  return tinyColor.toRgbString()
}
