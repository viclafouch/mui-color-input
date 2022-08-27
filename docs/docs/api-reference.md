---
sidebar_position: 3
---

# API Reference

This article discusses the API and props of **MuiColorInput**. Props are defined within `MuiColorInputProps`.

## `value`

- Type: `MuiColorInputValue`
- Required: `true`

The string parsing is very permissive. It is meant to make typing a color as input as easy as possible. All commas, percentages, parenthesis are optional, and most input allow either 0-1, 0%-100%, or 0-n (where n is either 100, 255, or 360 depending on the value).

HSL and HSV both require either 0%-100% or 0-1 for the `S`/`L`/`V` properties. The `H` (hue) can have values between 0%-100% or 0-360.

RGB input requires either 0-255 or 0%-100%.

Source : https://github.com/scttcper/tinycolor#accepted-string-input

Here are some examples of string input:

### Hex, 8-digit (RGBA) Hex

```tsx
<MuiColorInput value="#000" />
<MuiColorInput value="000" />
<MuiColorInput value="#369C" />
<MuiColorInput value="#f0f0f6" />
<MuiColorInput value="#f0f0f688" />
<MuiColorInput value="f0f0f688" />
```

### RGB, RGBA

```tsx
<MuiColorInput value="rgb (255, 0, 0)" />
<MuiColorInput value="rgb 255 0 0" />
<MuiColorInput value="rgba (255, 0, 0, .5)" />
<MuiColorInput value={{ r: 255, g: 0, b: 0 }} />
```

### HSL, HSLA

```tsx
<MuiColorInput value="hsl(0, 100%, 50%)" />
<MuiColorInput value="hsla(0, 100%, 50%, .5)" />
<MuiColorInput value="hsl 0 1.0 0.5" />
<MuiColorInput value={{ h: 0, s: 1, l: 0.5 }} />
```

### HSV, HSVA

```tsx
<MuiColorInput value="hsv(0, 100%, 50%)" />
<MuiColorInput value="hsva(0, 100%, 50%, .5)" />
<MuiColorInput value="hsv (0 100% 100%)" />
<MuiColorInput value={{ h: 0, s: 100, v: 100 }} />
```

## `onChange`

- Default: `undefined`
- Type: `(color: string, colors: MuiColorInputColors) => void`
- Required: `false`

Gets called once the user updates the color value.

The callback gives you **2 parameters**:
  1. The new color [value](#value) stringified
  2. An object of the color value in different formats stringified (`hex`, `hex8`, `hsl`, `hsv`, `rgb`)

Example:

```tsx

const handleChange = (color, colors) => {
  /**
  color: "#ffffff"
  colors: {
    hex: "#ffffff",
    hex8: "#ffffffff",
    hsl: "hsl(0, 0%, 100%)",
    hsv: "hsv(0, 0%, 100%)",
    rgb: "rgb(255, 255, 255)"
  }
  **/
}

<MuiColorInput onChange={handleChange} />
```

## `format`

- Default: `"hex"`
- Type: `MuiColorInputFormat`
- Required: `false`

The format to use for the color [value](#value). The first parameter of `onChange` respects this format.

**Available formats**: `hex`, `hex8`, `hsl`, `hsv` and `rgb`.

```tsx
<MuiColorInput format="hex" />
<MuiColorInput format="hex8" />
<MuiColorInput format="rgb" />
<MuiColorInput format="hsv" />
<MuiColorInput format="hsl" />
```

## `fallbackValue`

- Default: `"black"`
- Type: `MuiColorInputValue`
- Required: `false`

A fallback color [value](#value) in case the user updates the input with an invalid color value.

```tsx
<MuiColorInput fallbackValue="#ffffff" />
<MuiColorInput fallbackValue="#ffffffff" />
<MuiColorInput fallbackValue="hsv(0, 0%, 100%)" />
<MuiColorInput fallbackValue="rgb(255, 255, 255)" />
<MuiColorInput fallbackValue={{ h: 0, s: 100, v: 100 }} />
```

## `isAlphaHidden`

- Default: `false`
- Type: `boolean`
- Required: `false`

Whether to show input controls for a color’s alpha channel.

```tsx
<MuiColorInput isAlphaHidden />
```

