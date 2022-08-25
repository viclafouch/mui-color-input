import React from 'react'
import Box from '@mui/material/Box'
import { TinyColor } from '@ctrl/tinycolor'

import type { ColorFormat } from '../../index.types'
import HexField from './HexField/HexField'
import RgbaField from './RgbaField/RgbaField'

type ValueFieldProps = {
  color: TinyColor
  format: ColorFormat
}

const ValueField = (props: ValueFieldProps) => {
  const { color, format } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap="10px"
      justifyContent="space-between"
    >
      {format === 'hex' ? (
        <HexField value={color.toHexString()} />
      ) : (
        <RgbaField value={color.toRgb()} />
      )}
    </Box>
  )
}

export default ValueField
