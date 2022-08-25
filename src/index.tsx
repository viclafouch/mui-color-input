import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import type { PopoverProps } from '@mui/material/Popover'
import ColorButton from '@components/ColorButton/ColorButton'
import ColorPopover from '@components/ColorPopover/ColorPopover'
import ColorPopoverBody from '@components/ColorPopoverBody/ColorPopoverBody'
import ColorTextField from '@components/ColorTextField/ColorTextField'
import { TinyColor } from '@ctrl/tinycolor'
import { COLOR_FALLBACK } from '@shared/constants/formats'
import {
  buildValueFromTinyColor,
  getSafeTinyColor,
  stringifyInputValue
} from '@shared/helpers/format'
import { assocRefToPropRef } from '@shared/helpers/ref'

import type {
  ColorFormat,
  ColorInputValue,
  MuiColorInputProps
} from './index.types'

export type { ColorFormat, MuiColorInputProps, ColorInputValue, TinyColor }

export function matchIsValidColor(color: ColorInputValue): boolean {
  return new TinyColor(color).isValid
}

const MuiColorInput = React.forwardRef(
  (props: MuiColorInputProps, propRef: MuiColorInputProps['ref']) => {
    const {
      value,
      format,
      onChange,
      PopoverProps,
      isAlphaHidden,
      ...restProps
    } = props
    const { onBlur, InputProps, ...restTextFieldProps } = restProps
    const { onClose, ...restPopoverProps } = PopoverProps || {}
    const textFieldRef = React.useRef<HTMLDivElement>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)
    const currentFormat: ColorFormat = format || 'hex'
    const currentTinyColor = getSafeTinyColor(value, { format: currentFormat })
    const [inputValue, setInputValue] = React.useState<ColorInputValue>(
      currentTinyColor.toString()
    )
    const [previousValue, setPreviousValue] =
      React.useState<ColorInputValue>(value)

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault()
      event.stopPropagation()
      setAnchorEl(textFieldRef.current)
    }

    const handleChange = (newValue: string) => {
      const tinyColor = new TinyColor(newValue)
      onChange?.(newValue, {
        hex: tinyColor.toHexString(),
        hsv: tinyColor.toHsv(),
        hsl: tinyColor.toHsl(),
        rgb: tinyColor.toRgb()
      })
    }

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newInputValue = event.target.value
      setInputValue(newInputValue)
      const tinyColor = new TinyColor(newInputValue)
      const newValue = buildValueFromTinyColor(tinyColor, currentFormat)
      setPreviousValue(newValue)
      handleChange(newValue)
    }

    const handleClose = (
      ...args: Parameters<NonNullable<PopoverProps['onClose']>>
    ) => {
      onClose?.(...args)
      setAnchorEl(null)
    }

    const handleBlur = (
      event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
    ) => {
      onBlur?.(event)
      const tinyColorOfInputValue = new TinyColor(inputValue)
      if (!tinyColorOfInputValue.isValid) {
        const tinyColor = new TinyColor(COLOR_FALLBACK)
        const newValue = buildValueFromTinyColor(tinyColor, currentFormat)
        setInputValue(newValue)
        setPreviousValue(newValue)
        handleChange(newValue)
      } else if (tinyColorOfInputValue.format !== currentFormat) {
        setInputValue(
          buildValueFromTinyColor(tinyColorOfInputValue, currentFormat)
        )
      }
    }

    React.useEffect(() => {
      if (value !== previousValue) {
        const tinyColor = getSafeTinyColor(value)
        const newValue = tinyColor.originalInput
        setPreviousValue(newValue)
        setInputValue(newValue)
      }
    }, [value, previousValue])

    const handlePopoverChange = (newValue: string) => {
      setInputValue(newValue)
      setPreviousValue(newValue)
      handleChange(newValue)
    }

    const handleRef = (ref: HTMLDivElement | null): void => {
      // @ts-ignore
      textFieldRef.current = ref
      if (propRef) {
        assocRefToPropRef(ref, propRef)
      }
    }

    const isOpen = Boolean(anchorEl)
    const id = isOpen ? 'color-popover' : undefined

    return (
      <>
        <ColorTextField
          ref={handleRef}
          spellCheck="false"
          onChange={handleInputChange}
          value={stringifyInputValue(inputValue)}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorButton
                  aria-describedby={id}
                  bgColor={currentTinyColor.toString()}
                  isBgColorValid={currentTinyColor.isValid}
                  onClick={handleClick}
                />
              </InputAdornment>
            ),
            ...InputProps
          }}
          {...restTextFieldProps}
        />
        <ColorPopover
          id={id}
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          {...restPopoverProps}
        >
          <ColorPopoverBody
            onChange={handlePopoverChange}
            currentColor={currentTinyColor}
            format={currentFormat}
            isAlphaHidden={isAlphaHidden}
          />
        </ColorPopover>
      </>
    )
  }
)

export { MuiColorInput }
