import { createStitches } from "@stitches/react";

export const { 
  styled, 
  getCssText, 
  createTheme, 
  globalCss 
} = createStitches({ 
  theme: {
    colors: {
      primaryColor: "black",
      secondaryColor: "white",
    },
    sizes: {
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px',
        5: '22px'
    },
    space: {
        1: '10px',
        2: '20px',
        3: '40px'
    },
  },
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
    bp0: '(max-width: 344px)'
  },
 });