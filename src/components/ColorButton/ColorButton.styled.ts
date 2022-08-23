import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Styled = {
  Button: styled(Button)(() => {
    return {
      backgroundImage: `
      linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(135deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(135deg, transparent 75%, #ccc 75%)`,
      backgroundSize: '8px 8px',
      backgroundPosition: '0 0, 4px 0, 4px -4px, 0px 4px',
      boxShadow:
        '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
      border: 0,
      borderRadius: 4,
      width: '24px',
      height: '24px'
    }
  })
}

export { Styled }
