import { styled } from '@mui/material/styles'

const Styled = {
  Space: styled('div')(() => {
    return {
      width: '100%',
      height: 180,
      boxSizing: 'border-box',
      position: 'relative',
      backgroundImage:
        'linear-gradient(to top, #000000, transparent), linear-gradient(to right, #ffffff, transparent)'
    }
  }),
  Thumb: styled('div')(() => {
    return {
      position: 'absolute',
      border: '3px solid #ffffff',
      borderRadius: '50%',
      width: 24,
      height: 24,
      marginLeft: -12,
      marginBottom: -12,
      boxSizing: 'border-box',
      willChange: 'left, bottom'
    }
  })
}

export { Styled }
