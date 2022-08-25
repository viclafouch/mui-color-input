import { styled } from '@mui/material/styles'
import { BG_IMAGE_SPACE } from '@shared/constants/styles'

const Styled = {
  Space: styled('div')(() => {
    return {
      width: '100%',
      height: '180px',
      boxSizing: 'border-box',
      position: 'relative',
      backgroundImage: BG_IMAGE_SPACE
    }
  }),
  Thumb: styled('div')(() => {
    return {
      position: 'absolute',
      border: '3px solid #ffffff',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      marginLeft: '-10px',
      marginBottom: '-10px',
      boxSizing: 'border-box',
      willChange: 'left, bottom'
    }
  })
}

export { Styled }
