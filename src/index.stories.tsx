import React from 'react'
import { action } from 'storybook/actions'
import type { ColorButtonProps } from '@components/ColorButton/ColorButton'
import { Button, createTheme, Icon, ThemeProvider } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  MuiColorInput,
  type MuiColorInputProps,
  type MuiColorInputValue
} from './index'

const meta = {
  title: 'MuiColorInput',
  component: MuiColorInput
} satisfies Meta<typeof MuiColorInput>

export default meta

const CustomAdornment = (props: ColorButtonProps) => {
  const { onClick, bgColor } = props

  return (
    <Button sx={{ backgroundColor: bgColor }} onClick={onClick}>
      <Icon />
    </Button>
  )
}

export const PrimaryLeft: StoryObj<typeof MuiColorInput> = () => {
  const [value, setValue] = React.useState<MuiColorInputValue>('')

  const handleChange = (
    ...argsChange: Parameters<NonNullable<MuiColorInputProps['onChange']>>
  ) => {
    action('onChange')(argsChange)
    setValue(argsChange[0])
  }

  return (
    <MuiColorInput
      color="warning"
      value={value}
      format="rgb"
      onChange={handleChange}
      adornmentPosition="start"
    />
  )
}

PrimaryLeft.decorators = [
  (Story) => {
    const theme = createTheme()

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]

export const PrimaryRight: StoryObj<typeof MuiColorInput> = () => {
  const [value, setValue] = React.useState<MuiColorInputValue>('black')

  const handleChange = (
    ...argsChange: Parameters<NonNullable<MuiColorInputProps['onChange']>>
  ) => {
    action('onChange')(argsChange)
    setValue(argsChange[0])
  }

  return (
    <MuiColorInput
      color="warning"
      value={value}
      format="hex"
      fullWidth
      onChange={handleChange}
      adornmentPosition="end"
    />
  )
}

PrimaryRight.decorators = [
  (Story) => {
    const theme = createTheme()

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]

export const CustomButton: StoryObj<typeof MuiColorInput> = () => {
  const [value, setValue] = React.useState<MuiColorInputValue>('black')

  const handleChange = (
    ...argsChange: Parameters<NonNullable<MuiColorInputProps['onChange']>>
  ) => {
    action('onChange')(argsChange)
    setValue(argsChange[0])
  }

  return (
    <MuiColorInput
      color="warning"
      value={value}
      format="hex"
      onChange={handleChange}
      adornmentPosition="end"
      Adornment={CustomAdornment}
    />
  )
}

CustomButton.decorators = [
  (Story) => {
    const theme = createTheme()

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]
