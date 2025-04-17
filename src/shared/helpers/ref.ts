import type React from 'react'
import { matchIsObject } from './object'

export function assocRefToPropRef<T extends Element | null>(
  ref: T,
  propRef: React.Ref<T> | undefined
): void {
  if (typeof propRef === 'function') {
    propRef(ref)
  } else if (propRef && matchIsObject(propRef) && 'current' in propRef) {
    propRef.current = ref
  }
}
