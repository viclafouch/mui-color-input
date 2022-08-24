import React from 'react'
import { SliderProps } from '@mui/material/Slider'
import { RGB } from '@ctrl/tinycolor'

import { Styled } from './AlphaSlider.styled'

type AlphaSliderProps = SliderProps & {
  rgbColor: RGB
}

const AlphaSlider = (props: AlphaSliderProps) => {
  const { rgbColor, ...restSliderProps } = props

  return (
    <Styled.Slider
      $rgbaFrom={`rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0)`}
      $rgbaTo={`rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 1)`}
      {...restSliderProps}
    />
  )
}

export default AlphaSlider
