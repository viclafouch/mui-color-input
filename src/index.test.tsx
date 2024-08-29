import React from 'react'
import { render } from '@testing-library/react'
import {
  MuiColorInput,
  type MuiColorInputColors,
  type MuiColorInputProps
} from './index'

const MuiColorInputWrapper = (props: Partial<MuiColorInputProps>) => {
  const { onChange, ...rest } = props
  const [state, setState] = React.useState<string>('')

  const handleChange = (newValue: string, colors: MuiColorInputColors) => {
    setState(newValue)
    onChange?.(newValue, colors)
  }

  return (
    <MuiColorInput
      value={state}
      adornmentPosition="start"
      onChange={handleChange}
      {...rest}
    />
  )
}

describe('components/MuiColorInput', () => {
  test('should render correctly', () => {
    render(<MuiColorInputWrapper />)
  })
})
