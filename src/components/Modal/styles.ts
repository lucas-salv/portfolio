import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
    '0%': {
        display: 'none',
    },
    '10%': {
        display: 'flex',
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

const fadeOut = keyframes({
    '0%': {
        opacity: 1
    },
    '80%': {
        display: 'flex',
        opacity: 0
    },
    '100%': {
        display: 'none',
    },
})

export const ModalContent = styled('div', {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '$secondaryColor',
    transition: 'transform .2s',

    '@bp2': {
        width: '500px',
        height: '250px',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    }
});

export const ModalOverlay = styled('div', {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    backdropFilter: 'blur(0) opacity(0)',
    transition: 'all .2s'
});

export const Modal = styled('div', {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 7,
    transition: 'opacity .5s',

    variants: {
        isOpen: {
            true: {
                [`& ${ModalContent}`]: {
                    transform: 'scale(1, 1)',
                },
                [`& ${ModalOverlay}`]: {
                    backdropFilter: 'blur(2px) opacity(1)',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                }
            },
            false: {
                [`& ${ModalContent}`]: {
                    transform: 'scale(0, 0)',
                }
                
            }
        }
    }
});