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
        5: '22px',
        6: '24px'
    },
    space: {
        1: '10px',
        2: '20px',
        3: '40px'
    },
  },
  media: {
    bp0: '(max-width: 344px)',
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
    //bp5: '(max-width: 768px)',
    bph0: '(max-height: 570px)',
    bph1: '(max-height: 650px)',
    bph2: '(min-height: 768px)',
    bph3: '(min-height: 800px)',
    bph4: '(max-height: 768px) and (max-width: 1023px)'
  },
 });