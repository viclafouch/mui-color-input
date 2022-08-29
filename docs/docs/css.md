---
sidebar_position: 5
---

# CSS

Like any component, if you want to override a component's styles using custom classes, you can use the `className` prop.

```jsx
<MuiColorInput className="my-class-name" />
```

Then, you can use the differents global class names (see below) to target an element of `MuiColorInput`.

| 	Global class                            | Description                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `.MuiColorInput-TextField`                        | 	Styles applied to the root element.                                                                                                                   |
| `.MuiColorInput-Button`                        | 	Styles applied to the [Button](https://mui.com/material-ui/api/button/) component                                                                                                                  |
| `.MuiColorInput-Popover`                        | 	Styles applied to the [Popover](https://mui.com/material-ui/api/popover/) component
| `.MuiColorInput-ColorSpace`                        | 	Styles applied to the ColorSpace component                                                                                                                  |
| `.MuiColorInput-HueSlider`                      | 	Styles applied to the Hue [Slider](https://mui.com/material-ui/api/slider/)
| `.MuiColorInput-AlphaSlider`                            | 	Styles applied to the Alpha [Slider](https://mui.com/material-ui/api/slider/)           |


For example: target the `.MuiColorInput-HueSlider` global class name to customize the Hue Slider.

## Example with styled-component / emotion

```jsx
import { styled } from 'styled-component' // or emotion
import { MuiColorInput } from 'mui-color-input'

const MuiColorInputStyled = styled(MuiColorInput)`
  & .MuiColorInput-AlphaSlider {
    margin-top: 10px;
  }
`

function MyComponent() {
  return <MuiColorInputStyled />
}
```