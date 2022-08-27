import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MuiColorInput, MuiColorInputProps, MuiColorInputValue } from './index'

export default {
  title: 'MuiColorInput',
  component: MuiColorInput
} as ComponentMeta<typeof MuiColorInput>

const theme = createTheme()

export const Primary: ComponentStory<typeof MuiColorInput> = () => {
  const [value, setValue] = React.useState<MuiColorInputValue>('black')

  const handleChange = (
    ...argsChange: Parameters<NonNullable<MuiColorInputProps['onChange']>>
  ) => {
    action('onChange')(argsChange)
    setValue(argsChange[0])
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiColorInput
        color="warning"
        value={value}
        format="rgb"
        onChange={handleChange}
      />
    </ThemeProvider>
  )
}
