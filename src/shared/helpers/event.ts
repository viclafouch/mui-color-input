import type { ARROW_COLOR_SPACE } from '@shared/constants/event'
import { KEYBOARD_KEY } from '@shared/constants/event'

export function matchIsArrowKey(
  key: string
): key is keyof typeof ARROW_COLOR_SPACE {
  return (
    key === KEYBOARD_KEY.up ||
    key === KEYBOARD_KEY.down ||
    key === KEYBOARD_KEY.left ||
    key === KEYBOARD_KEY.right
  )
}
