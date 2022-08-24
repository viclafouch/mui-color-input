export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}

export function matchIsNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function round(
  value: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number
): number {
  const formattedValue = value.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits,
    maximumFractionDigits
  })
  return Number(formattedValue)
}
