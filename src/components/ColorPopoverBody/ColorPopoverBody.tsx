import React from 'react'
import Box from '@mui/material/Box'
import AlphaSlider from '@components/AlphaSlider/AlphaSlider'
import ColorSpace from '@components/ColorSpace/ColorSpace'
import HueSlider from '@components/HueSlider/HueSlider'
import { TinyColor } from '@ctrl/tinycolor'
import { buildValueFromTinyColor } from '@shared/helpers/format'
import { clamp, matchIsNumber } from '@shared/helpers/number'

import type { ColorFormat, MuiColorInputProps } from '../../index.types'

type ColorPopoverBodyProps = {
  currentColor: TinyColor
  format: ColorFormat
  isAlphaHidden: MuiColorInputProps['isAlphaHidden']
  onChange: (value: string) => void
}

const ColorPopoverBody = (props: ColorPopoverBodyProps) => {
  const { currentColor, format, onChange, isAlphaHidden } = props
  const [currentHue, setCurrentHue] = React.useState<number>(
    currentColor.toHsl().h
  )

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
    onChange?.(buildValueFromTinyColor(tinyColor, format))
  }

  const handleChangeAlpha = (event: Event, alphaValue: number | number[]) => {
    if (!matchIsNumber(alphaValue)) {
      return
    }
    const tinyColor = currentColor.clone().setAlpha(alphaValue)
    onChange?.(buildValueFromTinyColor(tinyColor, format))
  }

  const handleChangeSpace = (saturation: number, bright: number) => {
    const tinyColor = new TinyColor({
      ...currentColor.toHsv(),
      s: saturation,
      v: bright
    })
    onChange?.(buildValueFromTinyColor(tinyColor, format))
  }

  return (
    <Box>
      <ColorSpace
        currentHue={currentHue}
        hsv={currentColor.toHsv()}
        onChange={handleChangeSpace}
      />
      <Box mt="10px" px="3px">
        <HueSlider
          min={0}
          max={100}
          step={1}
          onChange={handleChangeHue}
          value={(currentHue * 100) / 360}
        />
      </Box>
      {!isAlphaHidden ? (
        <Box mt="10px" px="3px">
          <AlphaSlider
            min={0}
            max={1}
            step={0.01}
            rgbColor={currentColor.toRgb()}
            onChange={handleChangeAlpha}
            value={currentColor.getAlpha()}
          />
        </Box>
      ) : null}
    </Box>
  )
}

export default ColorPopoverBody
