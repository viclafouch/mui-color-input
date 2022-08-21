import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MuiColorInput } from './index'

export default {
  title: 'MuiColorInput',
  component: MuiColorInput
} as ComponentMeta<typeof MuiColorInput>

export const Primary: ComponentStory<typeof MuiColorInput> = () => {
  return <MuiColorInput />
}
