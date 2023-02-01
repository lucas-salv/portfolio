import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1
    }
});

const fadeOut = keyframes({
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0
    }
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

export const Modal = styled('dialog', {
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '100% !important',
    maxHeight: '100% !important',
    border: 'none',
    background: 'transparent',
    zIndex: 7,

    '&[closing]': {
        display: 'flex',
        pointerEvents: 'none',
        inset: 0,
        animation: `${fadeOut} .5s forwards !important`,

        '&::backdrop': {

        }
    },

    '&[open]': {
        display: 'flex',
        animation: `${fadeIn} .5s forwards`,
    },

    '&::backdrop': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(3px)',
    }

});