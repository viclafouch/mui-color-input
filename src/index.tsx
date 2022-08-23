import React from 'react'
import ColorButton from '@components/ColorButton/ColorButton'
import ColorPopover from '@components/ColorPopover/ColorPopover'
import { Colors } from 'index.types'

const MuiColorInput = () => {
  const [isPopoverOpened, setIsPopoverOpened] = React.useState<boolean>(false)
  const [currentHex, setCurrentHex] = React.useState<Colors['hex']>('')

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setIsPopoverOpened(true)
  }

  const handleClose = () => {
    setIsPopoverOpened(false)
  }

  const handleChange = (hexValue: Colors['hex']) => {
    setCurrentHex(hexValue)
    console.log({ hexValue })
  }

  return (
    <>
      <ColorButton
        sx={{ backgroundColor: currentHex ? `#${currentHex}` : '' }}
        onClick={handleClick}
      />
      <ColorPopover
        open={isPopoverOpened}
        onHexChange={handleChange}
        onClose={handleClose}
      />
    </>
  )
}

export { MuiColorInput }
