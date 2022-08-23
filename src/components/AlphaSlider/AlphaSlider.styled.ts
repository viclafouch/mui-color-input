import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

const Styled = {
  Slider: styled(Slider)(() => {
    return {
      height: 8,

      '& .MuiSlider-rail': {
        opacity: 1,
        background:
          'linear-gradient(to right, rgba(255, 0, 4, 0) 0%, rgb(255, 0, 4) 100%)'
      },

      '& .MuiSlider-track': {
        color: 'transparent',
        border: 0
      },

      '& .MuiSlider-thumb': {
        backgroundColor: '#ffffff',
        border: '3px solid currentColor'
      }
    }
  })
}

export { Styled }
