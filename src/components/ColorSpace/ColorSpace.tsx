import React from 'react'
import { HSLA, Numberify } from '@ctrl/tinycolor'
import { clamp } from '@shared/helpers/number'
import type { Colors } from 'index.types'

import { Styled } from './ColorSpace.styled'

function getNewThumbPosition(
  colorSpace: HTMLDivElement,
  clientX: number,
  clientY: number
) {
  const boundingClientRect = colorSpace.getBoundingClientRect()
  const positionX = clientX - boundingClientRect.left
  const positionY = clientY - boundingClientRect.top
  return {
    x: clamp(positionX / boundingClientRect.width, 0, 1),
    y: clamp(1 - positionY / boundingClientRect.height, 0, 1)
  }
}

type ColorSpaceProps = {
  hsla: Numberify<HSLA>
  onChange: (s: Colors['hsl'][1], l: Colors['hsl'][2]) => void
}

const ColorSpace = (props: ColorSpaceProps) => {
  const { hsla, onChange } = props
  const isMouseDown = React.useRef<boolean>(false)
  const spaceRef = React.useRef<HTMLDivElement>(null)

  const moveThumb = React.useCallback((clientX: number, clientY: number) => {
    const newThumbPosition = getNewThumbPosition(
      spaceRef.current as HTMLDivElement,
      clientX,
      clientY
    )
    onChange(newThumbPosition.x, newThumbPosition.y)
  }, [])

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

  const { h, s, l } = hsla

  return (
    <Styled.Space
      onMouseDown={handleMouseDown}
      ref={spaceRef}
      style={{
        backgroundColor: `hsl(${h * 360} 100% 50%)`
      }}
    >
      <Styled.Thumb
        tabIndex={0}
        aria-label="Color space thumb"
        style={{
          left: `${s * 100}%`,
          bottom: `${l * 100}%`
        }}
      />
    </Styled.Space>
  )
}

export default ColorSpace
