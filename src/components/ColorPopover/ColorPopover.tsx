import React from 'react'
import Popover, { PopoverProps } from '@mui/material/Popover'

import { Styled } from './ColorPopover.styled'

type ColorPopoverProps = PopoverProps & {
  position: 'start' | 'end'
  children: React.ReactNode
}

const ColorPopover = (props: ColorPopoverProps) => {
  const { children, className, position, ...restPopoverProps } = props

  return (
    <Popover
      className={`MuiColorInput-Popover ${className || ''}`}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: position === 'start' ? 'left' : 'right'
      }}
      {...restPopoverProps}
    >
      <Styled.Container>{children}</Styled.Container>
    </Popover>
  )
}

export default ColorPopover
