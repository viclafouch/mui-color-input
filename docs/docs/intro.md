---
sidebar_position: 1
slug: /getting-started
---

# Getting Started

## Install
```bash
npm install mui-color-input --save
```
or you can use **yarn**
```bash
yarn add mui-color-input
```

We have completed installing the package.

## Next.js integration

Learn how to use MUI color input with Next.js

Once you have installed `MUI Color Input` in your next.js project, it is important to transpile it as it is an ESM package first.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['mui-color-input'],
 // your config
}

module.exports = nextConfig
```

## Simple usage

Here is a simple usage for using the component:

```jsx
import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const MyComponent = () => {
  const [color, setColor] = React.useState('#ffffff')

  const handleChange = (color) => {
    setColor(color)
  }

  return (
    <MuiColorInput value={color} onChange={handleChange} />
  )
}
```

## Congratulations !

That's all, now let's deep dive into the [props](/docs/api-reference).