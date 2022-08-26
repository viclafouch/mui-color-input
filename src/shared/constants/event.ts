export const KEYBOARD_KEY: Record<string, KeyboardEvent['key']> = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight'
}

type ArrowColorSpace = {
  [key in typeof KEYBOARD_KEY[keyof typeof KEYBOARD_KEY]]: {
    type: 'hsvS' | 'hsvV'
    value: 1 | -1
  }
}

export const ARROW_COLOR_SPACE: ArrowColorSpace = {
  ArrowUp: {
    type: 'hsvV',
    value: +1
  },
  ArrowDown: {
    type: 'hsvV',
    value: -1
  },
  ArrowLeft: {
    type: 'hsvS',
    value: -1
  },
  ArrowRight: {
    type: 'hsvS',
    value: +1
  }
}
