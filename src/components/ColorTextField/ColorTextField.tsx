import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

type ColorTextFieldProps = TextFieldProps

const ColorTextField = React.forwardRef(
  (props: ColorTextFieldProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <TextField ref={ref} {...props} />
  }
)

export default ColorTextField
