export function log(...args: Parameters<Console['error']>) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console -- development-only error logging
    console.error(...args)
  }
}
