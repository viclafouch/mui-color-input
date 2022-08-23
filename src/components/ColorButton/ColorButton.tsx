import React from 'react'
import { ButtonProps } from '@mui/material/Button'

import { Styled } from './ColorButton.styled'

type ColorButtonProps = Omit<ButtonProps, 'children'>

const ColorButton = (props: ColorButtonProps) => {
  return <Styled.Button {...props} disableTouchRipple />
}

export default ColorButton
