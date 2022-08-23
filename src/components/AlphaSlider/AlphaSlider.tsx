import React from 'react'
import { SliderProps } from '@mui/material/Slider'

import { Styled } from './AlphaSlider.styled'

type AlphaSliderProps = SliderProps

const AlphaSlider = (props: AlphaSliderProps) => {
  return <Styled.Slider {...props} />
}

export default AlphaSlider
