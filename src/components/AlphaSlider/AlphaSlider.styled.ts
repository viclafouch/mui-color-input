import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

type SliderProps = {
  $rgbaFrom: string
  $rgbaTo: string
}

const Styled = {
  Slider: styled(Slider, {
    shouldForwardProp: (prop) => {
      return prop !== '$rgbaFrom' && prop !== '$rgbaTo'
    }
  })((props: SliderProps) => {
    return {
      height: 8,

      '& .MuiSlider-rail': {
        opacity: 1,
        // TODO: find better way for perf
        background: `linear-gradient(to right, ${props.$rgbaFrom} 0%, ${props.$rgbaTo} 100%)`
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
