import React from 'react'
import { render } from '@testing-library/react'
import { MuiColorInput, MuiColorInputColors, MuiColorInputProps } from './index'
import '@testing-library/jest-dom'

const MuiColorInputWrapper = (props: Partial<MuiColorInputProps>) => {
  const { onChange, ...rest } = props
  const [state, setState] = React.useState<string>('')

  const handleChange = (newValue: string, colors: MuiColorInputColors) => {
    setState(newValue)
    onChange?.(newValue, colors)
  }

  return <MuiColorInput value={state} onChange={handleChange} {...rest} />
}

describe('components/MuiColorInput', () => {
  test('should render correctly', () => {
    render(<MuiColorInputWrapper />)
  })
})
