export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}

export function matchIsNumber(value: unknown): value is number {
  return typeof value === 'number'
}
