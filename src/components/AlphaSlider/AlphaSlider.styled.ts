import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

const Styled = {
  Slider: styled(Slider, {
    shouldForwardProp: (prop) => {
      return prop !== '$rgbaFrom' && prop !== '$rgbaTo'
    }
  })(() => {
    return {
      height: 8,

      '& .MuiSlider-rail': {
        opacity: 1,
        // TODO: find better way for perf
        background: `linear-gradient(to right, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 0) 0%, rgba(var(--rgb-r), var(--rgb-g), var(--rgb-b), 1) 100%)`
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
