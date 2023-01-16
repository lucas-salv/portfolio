import { createStitches } from "@stitches/react";

export const { 
  styled, 
  getCssText, 
  createTheme, 
  globalCss 
} = createStitches({ 
  theme: {
    colors: {
      text: "black",
      background: "white",
    },
    sizes: {
        1: '14px',
        2: '16px',
        3: '18px'
    },
    space: {
        1: '10px',
        2: '20px',
        3: '40px'
    }
  }
 });