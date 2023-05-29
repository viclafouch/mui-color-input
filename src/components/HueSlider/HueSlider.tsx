import React from 'react'
import type { SliderProps } from '@mui/material/Slider'
import { Styled } from './HueSlider.styled'

type HueSliderProps = SliderProps

const HueSlider = (props: HueSliderProps) => {
  const { className, ...restSliderProps } = props

  return (
    <Styled.Slider
      className={`MuiColorInput-HueSlider ${className || ''}`}
      {...restSliderProps}
    />
  )
}

export default HueSlider
