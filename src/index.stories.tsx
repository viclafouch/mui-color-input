import React from 'react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MuiColorInput, MuiColorInputProps, MuiColorInputValue } from './index'

export default {
  title: 'MuiColorInput',
  component: MuiColorInput
} as ComponentMeta<typeof MuiColorInput>

export const Primary: ComponentStory<typeof MuiColorInput> = () => {
  const [value, setValue] = React.useState<MuiColorInputValue>('black')

  const handleChange = (
    ...argsChange: Parameters<NonNullable<MuiColorInputProps['onChange']>>
  ) => {
    action('onChange')(argsChange)
    setValue(argsChange[0])
  }

  return <MuiColorInput value={value} format="rgb" onChange={handleChange} />
}
