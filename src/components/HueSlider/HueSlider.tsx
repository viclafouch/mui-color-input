import React from 'react'
import { SliderProps } from '@mui/material/Slider'

import { Styled } from './HueSlider.styled'

type HueSliderProps = SliderProps

const HueSlider = (props: HueSliderProps) => {
  return <Styled.Slider {...props} />
}

export default HueSlider
