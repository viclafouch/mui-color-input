export function matchIsString(value: unknown): value is string {
  return typeof value === 'string'
}
