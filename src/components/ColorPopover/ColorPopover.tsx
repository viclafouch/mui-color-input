import React from 'react'
import Box from '@mui/material/Box'
import Popover, { PopoverProps } from '@mui/material/Popover'
import AlphaSlider from '@components/AlphaSlider/AlphaSlider'
import ColorSpace from '@components/ColorSpace/ColorSpace'
import HueSlider from '@components/HueSlider/HueSlider'
import ValueField from '@components/ValueField/ValueField'
import { TinyColor } from '@ctrl/tinycolor'
import { matchIsNumber } from '@shared/helpers/number'
import { Colors } from 'index.types'

import { Styled } from './ColorPopover.styled'

type ColorPopoverProps = PopoverProps & {
  onHexChange: (value: Colors['hex']) => void
}

const initialTinyColor = new TinyColor('#ffffff')

const ColorPopover = (props: ColorPopoverProps) => {
  const { onHexChange, ...restPopoverProps } = props
  const [currentColor, setCurrentColor] =
    React.useState<TinyColor>(initialTinyColor)

  const hsla = currentColor.toHsl()
  const alpha = currentColor.getAlpha()
  const hsv = currentColor.toHsv()

  const handleChangeHue = (event: Event, hue: number | number[]) => {
    if (!matchIsNumber(hue)) {
      return
    }
    setCurrentColor(
      new TinyColor({
        ...hsv,
        h: hue / 360
      })
    )
  }

  const handleChangeAlpha = (event: Event, value: number | number[]) => {
    if (!matchIsNumber(value)) {
      return
    }
    setCurrentColor((prevColor) => {
      const clonedColor = prevColor.clone()
      clonedColor.setAlpha(value)
      return clonedColor
    })
  }

  const handleChangeSpace = (
    sat: Colors['hsl'][1],
    light: Colors['hsl'][2]
  ) => {
    const newColor = new TinyColor({ h: 0, s: sat, l: light })
    setCurrentColor(newColor)
  }

  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      {...restPopoverProps}
    >
      <Styled.Container>
        <ColorSpace hsla={hsla} onChange={handleChangeSpace} />
        <Box mt="10px">
          <HueSlider
            min={0}
            max={360}
            step={1}
            onChange={handleChangeHue}
            value={hsv.h * 360}
          />
        </Box>
        <Box mt="10px">
          <AlphaSlider
            min={0}
            max={1}
            step={0.1}
            onChange={handleChangeAlpha}
            value={alpha}
          />
        </Box>
        <Box mt="10px">
          <ValueField color={currentColor} />
        </Box>
      </Styled.Container>
    </Popover>
  )
}

export default ColorPopover
