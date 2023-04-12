import { styled } from "@/helpers/stitches.config"

export const HeaderComponent = styled('header', {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '54px',
    backgroundColor: '$headerColor',
    zIndex: 3
})