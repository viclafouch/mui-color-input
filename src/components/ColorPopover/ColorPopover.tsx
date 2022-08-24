import React from 'react'
import Popover, { PopoverProps } from '@mui/material/Popover'

import { Styled } from './ColorPopover.styled'

type ColorPopoverProps = PopoverProps & {
  children: React.ReactNode
}

const ColorPopover = (props: ColorPopoverProps) => {
  const { children, ...restPopoverProps } = props

  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      {...restPopoverProps}
    >
      <Styled.Container>{children}</Styled.Container>
    </Popover>
  )
}

export default ColorPopover
