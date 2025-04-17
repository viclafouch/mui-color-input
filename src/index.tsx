import React from 'react'
import ColorButton from '@components/ColorButton/ColorButton'
import ColorPopover from '@components/ColorPopover/ColorPopover'
import ColorPopoverBody from '@components/ColorPopoverBody/ColorPopoverBody'
import ColorTextField from '@components/ColorTextField/ColorTextField'
import { FORMAT_FALLBACK } from '@shared/constants/fallback'
import {
  buildValueFromTinyColor,
  getSafeTinyColor,
  stringifyInputValue
} from '@shared/helpers/format'
import { assocRefToPropRef } from '@shared/helpers/ref'
import { TinyColor } from '@ctrl/tinycolor'
import type { TextFieldProps } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import type { PopoverProps } from '@mui/material/Popover'
import type {
  MuiColorButtonProps,
  MuiColorInputColors,
  MuiColorInputFormat,
  MuiColorInputProps,
  MuiColorInputValue
} from './index.types'

export type {
  MuiColorButtonProps,
  MuiColorInputColors,
  MuiColorInputFormat,
  MuiColorInputProps,
  MuiColorInputValue,
  TinyColor
}

export { ColorButton as MuiColorInputButton }

export function matchIsValidColor(color: MuiColorInputValue): boolean {
  return new TinyColor(color).isValid
}

const MuiColorInput = React.forwardRef(
  (
    {
      value,
      format,
      onChange,
      adornmentPosition = 'start',
      PopoverProps,
      Adornment = ColorButton,
      fallbackValue,
      isAlphaHidden,
      disablePopover,
      ...restProps
    }: MuiColorInputProps,
    propRef: MuiColorInputProps['ref']
  ) => {
    const { onBlur, slotProps, ...restTextFieldProps } = restProps
    const { onClose, ...restPopoverProps } = PopoverProps || {}
    const isDisabled = restTextFieldProps.disabled || false
    const textFieldRef = React.useRef<HTMLDivElement | null>(null)
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)
    const currentFormat: MuiColorInputFormat = format || FORMAT_FALLBACK
    const currentTinyColor = getSafeTinyColor(value, {
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      onBlur?.(event)
      const tinyColorOfInputValue = new TinyColor(inputValue)

      if (!tinyColorOfInputValue.isValid) {
        if (inputValue === '') {
          return
        }

        if (fallbackValue) {
          const tinyColor = new TinyColor(fallbackValue)
          const newValue = buildValueFromTinyColor(tinyColor, currentFormat)
          setInputValue(newValue)
          setPreviousValue(newValue)
          handleChange(newValue)
        }
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
      textFieldRef.current = ref
      assocRefToPropRef(ref, propRef)
    }

    const handleInputRef = (ref: HTMLInputElement | null): void => {
      inputRef.current = ref
      assocRefToPropRef(ref, inputRef)
    }

    const isOpen = Boolean(anchorEl)
    const id = isOpen ? 'color-popover' : undefined

    const colorButton = (
      <InputAdornment position={adornmentPosition}>
        <Adornment
          disabled={isDisabled}
          aria-describedby={id}
          disablePopover={disablePopover || false}
          component={disablePopover ? 'span' : undefined}
          bgColor={currentTinyColor.toString()}
          isBgColorValid={Boolean(
            inputValue !== '' && currentTinyColor.isValid
          )}
          onClick={disablePopover ? undefined : handleClick}
        />
      </InputAdornment>
    )

    const { input, ...restSlotProps } = slotProps || {}

    const inputSlotProps: NonNullable<TextFieldProps['slotProps']>['input'] = {
      startAdornment: adornmentPosition === 'start' ? colorButton : undefined,
      endAdornment: adornmentPosition === 'end' ? colorButton : undefined,
      // eslint-disable-next-line @typescript-eslint/no-misused-spread
      ...input
    }

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
          slotProps={{
            input: inputSlotProps,
            ...restSlotProps
          }}
          {...restTextFieldProps}
        />
        {!disablePopover ? (
          <ColorPopover
            id={id}
            open={isOpen}
            position={adornmentPosition}
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
