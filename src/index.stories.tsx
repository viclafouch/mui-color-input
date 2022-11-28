import React from 'react'
import { Button, createTheme, Icon, ThemeProvider } from '@mui/material'
import { ColorButtonProps } from '@components/ColorButton/ColorButton'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import rtlPlugin from 'stylis-plugin-rtl'

import { MuiColorInput, MuiColorInputProps, MuiColorInputValue } from './index'

export default {
  title: 'MuiColorInput',
  component: MuiColorInput
} as ComponentMeta<typeof MuiColorInput>

const CustomAdornment = (props: ColorButtonProps) => {
  const { onClick, bgColor } = props
  return (
    <Button sx={{ backgroundColor: bgColor }} onClick={onClick}>
      <Icon />
    </Button>
  )
}

export const PrimaryLeft: ComponentStory<typeof MuiColorInput> = () => {
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
      AdornmentProps={{ position: 'start' }}
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
      onChange={handleChange}
      AdornmentProps={{ position: 'end' }}
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
      AdornmentProps={{ position: 'end', CustomAdornment }}
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

export const RTL: ComponentStory<typeof MuiColorInput> = PrimaryLeft.bind({})
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
