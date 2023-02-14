import React from 'react'
import type { HSV, Numberify } from '@ctrl/tinycolor'
import { ARROW_COLOR_SPACE } from '@shared/constants/event'
import { matchIsArrowKey } from '@shared/helpers/event'
import { clamp, round } from '@shared/helpers/number'
import { getNewThumbPosition } from '@shared/helpers/space'
import { useEvent } from '@shared/hooks/useEvent'

import { Styled } from './ColorSpace.styled'

type ColorSpaceProps = {
  hsv: Numberify<HSV>
  currentHue: number
  onChange: (args: Pick<Numberify<HSV>, 's' | 'v'>) => void
}

const ColorSpace = (props: ColorSpaceProps) => {
  const { hsv, onChange, currentHue } = props
  const isPointerDown = React.useRef<boolean>(false)
  const spaceRef = React.useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = React.useState<boolean>(false)

  const moveThumb = useEvent((clientX: number, clientY: number) => {
    if (!spaceRef.current) {
      return
    }
    const { x, y } = getNewThumbPosition(spaceRef.current, clientX, clientY)
    onChange({
      s: x,
      v: y
    })

    if (spaceRef.current && document.activeElement !== spaceRef.current) {
      spaceRef.current.focus()
    }
  })

  const handlePointerUp = React.useCallback(() => {
    if (isPointerDown.current) {
      isPointerDown.current = false
      setIsActive(false)
    }
  }, [])

  const handlePointerMove = React.useCallback((event: PointerEvent) => {
    if (isPointerDown.current) {
      moveThumb(event.clientX, event.clientY)
    }
    // moveThumb is a useEvent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    document.addEventListener('pointermove', handlePointerMove, false)
    document.addEventListener('pointerup', handlePointerUp, false)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove, false)
      document.removeEventListener('pointerup', handlePointerUp, false)
    }
  }, [handlePointerUp, handlePointerMove])

  const handlePointerDown = (
    event: React.MouseEvent<HTMLDivElement, PointerEvent>
  ) => {
    event.preventDefault()
    isPointerDown.current = true
    moveThumb(event.clientX, event.clientY)
    setIsActive(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (matchIsArrowKey(event.key)) {
      event.preventDefault()
      const { type, value } = ARROW_COLOR_SPACE[event.key]
      const step = event.shiftKey ? 10 : 1
      const previousHsvTypeValue = type === 'hsvS' ? hsv.s : hsv.v
      const newHsvTypeValue = clamp(
        previousHsvTypeValue + value * step * 0.01,
        0,
        1
      )
      setIsActive(true)
      onChange({
        s: type === 'hsvS' ? newHsvTypeValue : hsv.s,
        v: type === 'hsvV' ? newHsvTypeValue : hsv.v
      })
    }
  }

  const saturationInPercent = hsv.s * 100
  const valueInPercent = hsv.v * 100

  return (
    <Styled.Space
      onPointerDown={handlePointerDown}
      ref={spaceRef}
      className="MuiColorInput-ColorSpace"
      style={{
        backgroundColor: `hsl(${currentHue} 100% 50%)`,
        touchAction: 'none'
      }}
      role="slider"
      aria-valuetext={`Saturation ${round(
        saturationInPercent,
        0,
        0
      )}%, Brightness ${round(valueInPercent, 0, 0)}%`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Styled.Thumb
        aria-label="Color space thumb"
        className={isActive ? 'MuiColorInput-Thumb-active' : ''}
        style={{
          left: `${saturationInPercent}%`,
          bottom: `${valueInPercent}%`
        }}
      />
    </Styled.Space>
  )
}

export default ColorSpace
