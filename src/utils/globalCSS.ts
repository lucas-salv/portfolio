import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '$sizes$1',
      color: '$textColor',
      '&:focus-visible': {
        outline: '2px solid',
        outlineColor: 'rgba(52, 146, 235, 0.5)',
        outlineOffset: '5px'
      },
      '::-webkit-scrollbar, ::-moz-scrollbar': {
        width: '5px',
        height: '5px',
      },
      '::-webkit-scrollbar-track, ::-moz-scrollbar-track': {
        background: 'rgba(0,0,0,0.1)',
      },
      '::-webkit-scrollbar-thumb, ::-moz-scrollbar-thumb': {
        background: 'rgba(0,0,0,0.2)',
      },
  
    },
    'body': {
      overflowY: 'hidden',
      backgroundColor: '$mainBackgroundColor',
      '&.scrolled': {
        overflowY: 'scroll'
      }
    }
  });

  export default globalStyles;