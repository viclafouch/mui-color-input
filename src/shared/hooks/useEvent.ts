import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic callback type requires flexible argument types
type Fn = (...args: any[]) => void

export function useEvent(fn: Fn): Fn {
  const fnRef = React.useRef<Fn>(undefined)

  React.useLayoutEffect(() => {
    fnRef.current = fn
  })

  // eslint-disable-next-line no-restricted-syntax -- stable callback wrapping a ref, required to avoid re-subscribing event listeners
  return React.useCallback((...args) => {
    return fnRef.current?.(...args)
  }, [])
}
