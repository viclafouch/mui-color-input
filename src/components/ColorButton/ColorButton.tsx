import React from 'react'
import { ButtonProps } from '@mui/material/Button'
import { BG_IMAGE_FALLBACK } from '@shared/constants/styles'

import { Styled } from './ColorButton.styled'

type ColorButtonProps = Omit<ButtonProps, 'children'> & {
  bgColor: string
  isBgColorValid: boolean
}

const ColorButton = (props: ColorButtonProps) => {
  const { bgColor, isBgColorValid, ...restButtonProps } = props

  return (
    <Styled.Button
      disableTouchRipple
      style={{
        backgroundColor: isBgColorValid ? bgColor : undefined,
        backgroundImage: isBgColorValid ? undefined : BG_IMAGE_FALLBACK
      }}
      {...restButtonProps}
    />
  )
}

export default ColorButton
