import React from 'react'
import ColorButton from '@components/ColorButton/ColorButton'
import ColorPopover from '@components/ColorPopover/ColorPopover'
import ColorPopoverBody from '@components/ColorPopoverBody/ColorPopoverBody'
import { TinyColor } from '@ctrl/tinycolor'
import type {
  ColorFormat,
  ColorInputValue,
  MuiColorInputProps
} from 'index.types'

export type { ColorFormat, MuiColorInputProps, ColorInputValue }

const MuiColorInput = (props: MuiColorInputProps) => {
  const { value, defaultFormat, visibleFormats, onChange } = props
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const currentTinyColor = new TinyColor(value)

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isOpen = Boolean(anchorEl)
  const id = isOpen ? 'color-popover' : undefined

  return (
    <>
      <ColorButton
        aria-describedby={id}
        sx={{ backgroundColor: '' }}
        onClick={handleClick}
      />
      <ColorPopover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <ColorPopoverBody
          onChange={onChange}
          currentColor={currentTinyColor}
          visibleFormats={visibleFormats}
          defaultFormat={defaultFormat}
        />
      </ColorPopover>
    </>
  )
}

export { MuiColorInput }
