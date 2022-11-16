import { styled } from '@mui/material/styles'
import { BG_IMAGE_SPACE } from '@shared/constants/styles'

const Styled = {
  Space: styled('div')(() => {
    return {
      width: '100%',
      height: '180px',
      boxSizing: 'border-box',
      outline: 0,
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
      marginLeft: '-10px /*! @noflip */',
      marginBottom: '-10px /*! @noflip */',
      outline: 0,
      boxSizing: 'border-box',
      willChange: 'left, bottom',
      transition: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

      '&:hover': {
        boxShadow: `0px 0px 0px 4px rgba(255 255 255 / 0.16)`
      },

      '&.MuiColorInput-Thumb-active': {
        boxShadow: `0px 0px 0px 8px rgba(255 255 255 / 0.16)`
      },

      '@media (hover: none)': {
        boxShadow: 'none'
      }
    }
  })
}

export { Styled }
