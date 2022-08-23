import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import { TinyColor } from '@ctrl/tinycolor'

import HexField from './HexField/HexField'
import RgbaField from './RgbaField/RgbaField'

type ColorFormat = 'rgba' | 'hex'

type ValueFieldProps = {
  color: TinyColor
  initialFormat?: ColorFormat
}

const ValueField = (props: ValueFieldProps) => {
  const { color, initialFormat } = props
  const [colorFormat, setColorFormat] = React.useState<ColorFormat>(
    initialFormat || 'hex'
  )

  const handleChangeColorFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setColorFormat((prevState) => {
      return prevState === 'hex' ? 'rgba' : 'hex'
    })
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap="10px"
      justifyContent="space-between"
    >
      {colorFormat === 'hex' ? (
        <HexField value={color.toHex()} />
      ) : (
        <RgbaField value={color.toRgb()} />
      )}
      <IconButton size="small" onClick={handleChangeColorFormat}>
        <UnfoldMoreIcon />
      </IconButton>
    </Box>
  )
}

ValueField.defaultProps = {
  initialFormat: 'hex'
}

export default ValueField
