import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import type { PopoverProps } from '@mui/material/Popover'
import ColorButton from '@components/ColorButton/ColorButton'
import ColorPopover from '@components/ColorPopover/ColorPopover'
import ColorPopoverBody from '@components/ColorPopoverBody/ColorPopoverBody'
import ColorTextField from '@components/ColorTextField/ColorTextField'
import { TinyColor } from '@ctrl/tinycolor'
import { COLOR_FALLBACK, FORMAT_FALLBACK } from '@shared/constants/fallback'
import {
  buildValueFromTinyColor,
  getSafeTinyColor,
  stringifyInputValue
} from '@shared/helpers/format'
import { assocRefToPropRef } from '@shared/helpers/ref'

import type {
  MuiColorInputColors,
  MuiColorInputFormat,
  MuiColorInputProps,
  MuiColorInputValue
} from './index.types'

export type {
  MuiColorInputFormat,
  MuiColorInputProps,
  MuiColorInputValue,
  MuiColorInputColors,
  TinyColor
}

export function matchIsValidColor(color: MuiColorInputValue): boolean {
  return new TinyColor(color).isValid
}

const MuiColorInput = React.forwardRef(
  (props: MuiColorInputProps, propRef: MuiColorInputProps['ref']) => {
    const {
      value,
      format,
      onChange,
      PopoverProps,
      fallbackValue,
      isAlphaHidden,
      disablePopover,
      ...restProps
    } = props
    const { onBlur, InputProps, ...restTextFieldProps } = restProps
    const { onClose, ...restPopoverProps } = PopoverProps || {}
    const fallbackValueSafe: MuiColorInputValue =
      fallbackValue || COLOR_FALLBACK
    const isDisabled =
      restTextFieldProps.disabled || InputProps?.disabled || false
    const textFieldRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)
    const currentFormat: MuiColorInputFormat = format || FORMAT_FALLBACK
    const currentTinyColor = getSafeTinyColor(value, fallbackValueSafe, {
      format: currentFormat
    })
    const [inputValue, setInputValue] =
      React.useState<MuiColorInputValue>(value)
    const [previousValue, setPreviousValue] =
      React.useState<MuiColorInputValue>(value)

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault()
      event.stopPropagation()

      if (!isDisabled && !disablePopover) {
        setAnchorEl(textFieldRef.current)
      }
    }

    const handleChange = (newValue: string) => {
      const tinyColor = new TinyColor(newValue)
      onChange?.(newValue, {
        hex: tinyColor.isValid ? tinyColor.toHexString() : '',
        hsv: tinyColor.isValid ? tinyColor.toHsvString() : '',
        hsl: tinyColor.isValid ? tinyColor.toHslString() : '',
        rgb: tinyColor.isValid ? tinyColor.toRgbString() : '',
        hex8: tinyColor.isValid ? tinyColor.toHex8String() : ''
      })
    }

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newInputValue = event.target.value
      setInputValue(newInputValue)
      if (newInputValue === '') {
        setPreviousValue('')
        handleChange('')
      } else {
        const tinyColor = new TinyColor(newInputValue)
        const newValue = buildValueFromTinyColor(tinyColor, currentFormat)
        setPreviousValue(newValue)
        handleChange(newValue)
      }
    }

    const handleClose = (
      ...args: Parameters<NonNullable<PopoverProps['onClose']>>
    ) => {
      onClose?.(...args)
      setAnchorEl(null)
      queueMicrotask(() => {
        inputRef.current?.focus()
      })
    }

    const handleBlur = (
      event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
    ) => {
      onBlur?.(event)
      const tinyColorOfInputValue = new TinyColor(inputValue)
      if (!tinyColorOfInputValue.isValid) {
        if (inputValue === '') {
          return
        }
        const tinyColor = new TinyColor(fallbackValueSafe)
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
        const tinyColor = getSafeTinyColor(value, fallbackValueSafe)
        const newValue = tinyColor.originalInput
        setPreviousValue(newValue)
        setInputValue(newValue)
      }
    }, [value, previousValue, fallbackValueSafe])

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

    const handleInputRef = (ref: HTMLInputElement | null): void => {
      // @ts-ignore
      inputRef.current = ref
      if (inputRef) {
        assocRefToPropRef(ref, inputRef)
      }
    }

    const isOpen = Boolean(anchorEl)
    const id = isOpen ? 'color-popover' : undefined

    return (
      <>
        <ColorTextField
          ref={handleRef}
          spellCheck="false"
          type="text"
          autoComplete="off"
          onChange={handleInputChange}
          value={stringifyInputValue(inputValue)}
          onBlur={handleBlur}
          inputRef={handleInputRef}
          disabled={isDisabled}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorButton
                  disabled={isDisabled}
                  aria-describedby={id}
                  disablePopover={disablePopover || false}
                  // @ts-ignore
                  component={disablePopover ? 'span' : undefined}
                  bgColor={currentTinyColor.toString()}
                  isBgColorValid={Boolean(
                    inputValue !== '' && currentTinyColor.isValid
                  )}
                  onClick={disablePopover ? undefined : handleClick}
                />
              </InputAdornment>
            ),
            ...InputProps
          }}
          {...restTextFieldProps}
        />
        {!disablePopover ? (
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
        ) : null}
      </>
    )
  }
)

export { MuiColorInput }
