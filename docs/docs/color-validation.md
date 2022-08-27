---
sidebar_position: 2
---

# Color validation

Maybe you need to validate the color value and check that it's correct. To do that, just import `matchIsValidColor` from the package and use this function, it will return a `boolean`.

```jsx
import React from 'react'
import { MuiColorInput, matchIsValidColor } from 'mui-color-input'

const MyComponent = () => {
  const [value, setValue] = React.useState('#ffffff')

  const handleChange = (newValue) => {
    matchIsValidColor(newValue) // boolean
  }

  return (
    <Box>
      <MuiColorInput value={value} onChange={handleChange} />
    </Box>
  )
}
```



