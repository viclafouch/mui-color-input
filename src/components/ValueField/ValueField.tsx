import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { TinyColor } from '@ctrl/tinycolor'
import type { ColorFormat } from 'index.types'

import HexField from './HexField/HexField'
import RgbaField from './RgbaField/RgbaField'

type ValueFieldProps = {
  color: TinyColor
  format: ColorFormat
  visibleFormats: ColorFormat[]
  onFormatChange: () => void
}

const ValueField = (props: ValueFieldProps) => {
  const { color, format, onFormatChange, visibleFormats } = props

  const handleChangeColorFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    onFormatChange()
  }

  const matchIsColorFormatVisible = (colorFormat: ColorFormat) => {
    return visibleFormats.includes(colorFormat)
  }

  const visibleFormatsCount = visibleFormats.length

  return visibleFormatsCount > 0 ? (
    <Box
      display="flex"
      alignItems="center"
      columnGap="10px"
      justifyContent="space-between"
    >
      {format === 'hex' ? (
        <Box width="100%">
          {matchIsColorFormatVisible('hex') ? (
            <HexField value={color.toHexString()} />
          ) : null}
        </Box>
      ) : (
        <Box width="100%">
          {matchIsColorFormatVisible('rgb') ? (
            <RgbaField value={color.toRgb()} />
          ) : null}
        </Box>
      )}
      {visibleFormatsCount > 1 ? (
        <IconButton size="small" onClick={handleChangeColorFormat}>
          <UnfoldMoreIcon />
        </IconButton>
      ) : null}
    </Box>
  ) : null
}

export default ValueField
