import React from 'react'

// waiting for useEvent from React.18
// see https://github.com/reactjs/rfcs/pull/220

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => void

export function useEvent(fn: Fn): Fn {
  const fnRef = React.useRef<Fn>()

  fnRef.current = fn

  return React.useCallback((...args) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return fnRef.current?.(...args)
  }, [])
}
