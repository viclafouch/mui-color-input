import React from 'react'
import type { HSV, Numberify } from '@ctrl/tinycolor'
import { round } from '@shared/helpers/number'
import { getNewThumbPosition } from '@shared/helpers/space'

import { Styled } from './ColorSpace.styled'

type ColorSpaceProps = {
  hsv: Numberify<HSV>
  currentHue: number
  onChange: (s: number, l: number) => void
}

const ColorSpace = (props: ColorSpaceProps) => {
  const { hsv, onChange, currentHue } = props
  const isMouseDown = React.useRef<boolean>(false)
  const spaceRef = React.useRef<HTMLDivElement>(null)

  // waiting for useEvent from React.18
  const moveThumb = React.useCallback(
    (clientX: number, clientY: number) => {
      if (!spaceRef.current) {
        return
      }
      const { x, y } = getNewThumbPosition(spaceRef.current, clientX, clientY)
      onChange(round(x, 0, 5), round(y, 0, 5))
    },
    [onChange]
  )

  const handleMouseUp = React.useCallback(() => {
    if (isMouseDown.current) {
      isMouseDown.current = false
    }
  }, [])

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      if (isMouseDown.current) {
        moveThumb(event.clientX, event.clientY)
      }
    },
    [moveThumb]
  )

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, false)
    document.addEventListener('mouseup', handleMouseUp, false)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, false)
      document.removeEventListener('mouseup', handleMouseUp, false)
    }
  }, [handleMouseUp, handleMouseMove])

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    isMouseDown.current = true
    moveThumb(event.clientX, event.clientY)
  }

  return (
    <Styled.Space
      onMouseDown={handleMouseDown}
      ref={spaceRef}
      style={{
        backgroundColor: `hsl(${currentHue} 100% 50%)`
      }}
    >
      <Styled.Thumb
        tabIndex={0}
        aria-label="Color space thumb"
        style={{
          left: `${hsv.s * 100}%`,
          bottom: `${hsv.v * 100}%`
        }}
      />
    </Styled.Space>
  )
}

export default ColorSpace
