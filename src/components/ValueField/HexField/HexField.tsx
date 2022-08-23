import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type HexFieldProps = {
  value: string
}

const HexField = (props: HexFieldProps) => {
  const { value } = props

  return (
    <Box width="100%">
      <TextField
        label="HEX"
        size="small"
        InputLabelProps={{ shrink: true }}
        fullWidth
        value={`#${value}`}
      />
    </Box>
  )
}

export default HexField
