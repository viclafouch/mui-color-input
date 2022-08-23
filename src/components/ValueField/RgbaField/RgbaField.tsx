import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Numberify, RGBA } from '@ctrl/tinycolor'

type RgbaFieldProps = {
  value: Numberify<RGBA>
}

const RgbaField = (props: RgbaFieldProps) => {
  const { value } = props
  // eslint-disable-next-line id-length
  const { r, g, b, a } = value

  return (
    <Box width="100%" display="flex" alignItems="center" columnGap="5px">
      <TextField
        label="R"
        size="small"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={r}
      />
      <TextField
        label="G"
        size="small"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={g}
      />
      <TextField
        label="B"
        size="small"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={b}
      />
      <TextField
        label="A"
        size="small"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={a}
      />
    </Box>
  )
}

export default RgbaField
