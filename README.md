<div align="center">
<h1>MUI tel input</h1>
  <p>A color input designed for the React library <a href="https://mui.com/">MUI</a></p>
</div>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/viclafouch/mui-color-input/blob/master/LICENSE)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

</div>

<div align="center">
  <img src="https://github.com/viclafouch/mui-color-input/blob/master/mui-color-input.gif" width="100%" />
</div>

## Installation

```
// with npm
npm install mui-color-input

// with yarn
yarn add mui-color-input
```

The component uses [@ctrl/tinycolor](https://www.npmjs.com/package/@ctrl/tinycolor) for color parsing and formatting.

## Usage

```jsx
import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const MyComponent = () => {
  const [value, setValue] = React.useState('#ffffff')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return <MuiColorInput value={value} onChange={handleChange} />
}
```

### Color validation

```jsx
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MuiColorInput, matchIsValidColor } from 'mui-color-input'

const MyComponent = () => {
  const [value, setValue] = React.useState('#ffffff')
  const [isValid, setIsValid] = React.useState(false)

  const handleChange = (newValue) => {
    setIsValid(matchIsValidColor(newValue))
    setValue(newValue)
  }

  return (
    <Box>
      <Typography>This is valid ? {isValid ? 'yes' : 'no'}</Typography>
      <MuiColorInput value={value} onChange={handleChange} />
    </Box>
  )
}
```

## Props

| Name            | Type                            | Description                                                                                                                   |
| --------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `value`         | A [color value](#ColorValue)                        | The color value (**Required**)                                                                                                                   |
| `onChange?`    | `(value, colors) => void`                     | Gets called once the user updates the color value.                      | `format?`        | `'hex' | 'rgb' | 'hsl' | 'hsv' | 'hex8`                        | The color will be visible in this format
| `isAlphaHidden?`        | `boolean`                        | Whether to show input controls for a color’s alpha channel. Default `false`.
| `disablePopover?`        | `boolean`                        | No popover / The color button is a `span` instead of a `button`. Default `false`.
| `fallbackValue?`        |  A [color value](#ColorValue)        | A fallback in case the user updates the input with an invalid color value.
| `PopoverProps?`          | [Popover API](https://mui.com/api/popover)     | Props for the PopoverProps component.
| `ref?`          | `React.Ref<HTMLDivElement>`     | A ref pointing to the [Mui TextField component](https://mui.com/components/text-fields/).
| [TextField Props](#inheritance) | |

### Inheritance

While not explicitly documented above, the props of the [TextField](https://mui.com/api/text-field) component are also available on MuiColorInput.

## ColorValue

WIP

## CSS

| 	Global class                            | Description                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `.MuiTelInput-TextField`                        | 	Styles applied to the root element.                                                                                                                   |
| `.MuiTelInput-Button`                        | 	Styles applied to the [Button](https://mui.com/material-ui/api/button/) component                                                                                                                  |
| `.MuiColorInput-Popover`                        | 	Styles applied to the [Popover](https://mui.com/material-ui/api/popover/) component
| `.MuiColorInput-ColorSpace`                        | 	Styles applied to the ColorSpace component                                                                                                                  |
| `.MuiColorInput-HueSlider`                      | 	Styles applied to the Hue [Slider](https://mui.com/material-ui/api/slider/)
| `.MuiColorInput-AlphaSlider`                            | 	Styles applied to the Alpha [Slider](https://mui.com/material-ui/api/slider/)           |

## Changelog

Go to [Github Releases](https://github.com/viclafouch/mui-color-input/releases)

## TypeScript

This library comes with TypeScript "typings". If you happen to find any bugs in those, create an issue.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## LICENSE

MIT