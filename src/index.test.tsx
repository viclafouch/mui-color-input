import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  MuiColorInput,
  type MuiColorInputColors,
  type MuiColorInputFormat,
  type MuiColorInputProps
} from './index'

const MuiColorInputWrapper = (props: Partial<MuiColorInputProps>) => {
  const { onChange, ...rest } = props
  const [state, setState] = React.useState('')

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

const FormatSwitcher = ({
  initialValue,
  initialFormat,
  nextFormat
}: {
  initialValue: string
  initialFormat: MuiColorInputFormat
  nextFormat: MuiColorInputFormat
}) => {
  const [format, setFormat] = React.useState(initialFormat)

  return (
    <>
      <MuiColorInput value={initialValue} format={format} />
      <button
        type="button"
        data-testid="switch-format"
        onClick={() => {
          setFormat(nextFormat)
        }}
      >
        Switch
      </button>
    </>
  )
}

describe('components/MuiColorInput', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should render a text input with a color button', () => {
    render(<MuiColorInputWrapper />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should reformat the displayed value when the format prop changes', async () => {
    const user = userEvent.setup()

    render(
      <FormatSwitcher
        initialValue="#ff0000"
        initialFormat="hex"
        nextFormat="rgb"
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('#ff0000')

    await user.click(screen.getByTestId('switch-format'))

    await waitFor(() => {
      expect(input).toHaveValue('rgb(255, 0, 0)')
    })
  })
})
