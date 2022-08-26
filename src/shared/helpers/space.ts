import { clamp } from './number'

export function getNewThumbPosition(
  colorSpace: HTMLDivElement,
  clientX: number,
  clientY: number
): { x: number; y: number } {
  const boundingClientRect = colorSpace.getBoundingClientRect()
  const positionX = clientX - boundingClientRect.left
  const positionY = clientY - boundingClientRect.top
  return {
    x: clamp(positionX / boundingClientRect.width, 0, 1),
    y: clamp(1 - positionY / boundingClientRect.height, 0, 1)
  }
}
