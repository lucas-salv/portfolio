import { styled } from "@/helpers/stitches.config"

export const HeaderComponent = styled('header', {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '54px',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: '$secondaryColor',
    zIndex: 3
})