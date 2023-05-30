import React from 'react'
import { Button, createTheme, Icon, ThemeProvider } from '@mui/material'
import { ColorButtonProps } from '@components/ColorButton/ColorButton'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createTheme, ThemeProvider } from '@mui/material'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import { MuiColorInput, MuiColorInputProps, MuiColorInputValue } from './index'

export default {
  title: 'MuiColorInput',
  component: MuiColorInput
} as Meta<typeof MuiColorInput>


const CustomAdornment = (props: ColorButtonProps) => {
  const { onClick, bgColor } = props
  return (
    <Button sx={{ backgroundColor: bgColor }} onClick={onClick}>
      <Icon />
    </Button>
  )
}

export const Primary: StoryFn<typeof MuiColorInput> = () => {
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

export const PrimaryRight: ComponentStory<typeof MuiColorInput> = () => {
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

export const CustomButton: ComponentStory<typeof MuiColorInput> = () => {
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

export const RTL: StoryFn<typeof MuiColorInput> = Primary.bind({})
RTL.decorators = [
  (Story) => {
    const rtlCache = createCache({
      key: 'muirtl',
      stylisPlugins: [rtlPlugin]
    })
    const rtlTheme = createTheme({ direction: 'rtl' })
    return (
      <CacheProvider value={rtlCache}>
        <div dir="rtl">
          <ThemeProvider theme={rtlTheme}>
            <Story />
          </ThemeProvider>
        </div>
      </CacheProvider>
    )
  }
]
