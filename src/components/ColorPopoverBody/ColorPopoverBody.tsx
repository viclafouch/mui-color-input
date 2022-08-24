import React from 'react'
import Box from '@mui/material/Box'
import AlphaSlider from '@components/AlphaSlider/AlphaSlider'
import ColorSpace from '@components/ColorSpace/ColorSpace'
import HueSlider from '@components/HueSlider/HueSlider'
import ValueField from '@components/ValueField/ValueField'
import { TinyColor } from '@ctrl/tinycolor'
import { VISIBLE_FORMATS_FALLBACK } from '@shared/constants/formats'
import {
  buildValueFromTinyColor,
  getInitialDefaultFormat
} from '@shared/helpers/format'
import { clamp, matchIsNumber } from '@shared/helpers/number'
import type { ColorFormat, MuiColorInputProps } from 'index.types'

type ColorPopoverBodyProps = Pick<
  MuiColorInputProps,
  'defaultFormat' | 'visibleFormats' | 'onChange'
> & {
  currentColor: TinyColor
}

const ColorPopoverBody = (props: ColorPopoverBodyProps) => {
  const { currentColor, defaultFormat, visibleFormats, onChange } = props
  const [currentFormat, setCurrentFormat] = React.useState<ColorFormat>(() => {
    return getInitialDefaultFormat(defaultFormat, visibleFormats)
  })
  const [currentHue, setCurrentHue] = React.useState(currentColor.toHsl().h)

  const handleChangeHue = (event: Event, hue: number | number[]) => {
    if (!matchIsNumber(hue)) {
      return
    }
    const newHue = clamp((360 * hue) / 100, 0, 359)
    setCurrentHue(newHue)
    const tinyColor = new TinyColor({
      ...currentColor.toHsl(),
      h: newHue
    })
    onChange?.(buildValueFromTinyColor(tinyColor))
  }

  const handleFormatChange = () => {
    setCurrentFormat((prevState) => {
      return prevState === 'hex' ? 'rgb' : 'hex'
    })
  }

  const handleChangeAlpha = (event: Event, alphaValue: number | number[]) => {
    if (!matchIsNumber(alphaValue)) {
      return
    }
    const tinyColor = currentColor.clone().setAlpha(alphaValue)
    onChange?.(buildValueFromTinyColor(tinyColor))
    setCurrentFormat('rgb')
  }

  const handleChangeSpace = (saturation: number, bright: number) => {
    const tinyColor = new TinyColor({
      ...currentColor.toHsv(),
      s: saturation,
      v: bright
    })
    onChange?.(buildValueFromTinyColor(tinyColor))
  }

  return (
    <Box>
      <Box
        width={100}
        height={100}
        sx={{ backgroundColor: currentColor.toHexString() }}
      />
      <ColorSpace
        currentHue={currentHue}
        hsv={currentColor.toHsv()}
        onChange={handleChangeSpace}
      />
      <Box mt="10px">
        <HueSlider
          min={0}
          max={100}
          step={1}
          onChange={handleChangeHue}
          value={(currentHue * 100) / 360}
        />
      </Box>
      <Box mt="10px">
        <AlphaSlider
          min={0}
          max={1}
          step={0.01}
          rgbColor={currentColor.toRgb()}
          onChange={handleChangeAlpha}
          value={currentColor.getAlpha()}
        />
      </Box>
      <Box mt="10px">
        <ValueField
          format={currentFormat}
          onFormatChange={handleFormatChange}
          color={currentColor}
          visibleFormats={visibleFormats || VISIBLE_FORMATS_FALLBACK}
        />
      </Box>
    </Box>
  )
}

export default ColorPopoverBody
