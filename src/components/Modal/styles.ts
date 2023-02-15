import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
});

const fadeOut = keyframes({
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0
    }
});

const scaleIn = keyframes({
    '0%': {
        transform: 'scale(0.5, 0.5)'
    },
    '80%': {
        transform: 'scale(1.05, 1.05)'
    },
    '100%': {
        transform: 'scale(1, 1)'
    }
});

const scaleOut = keyframes({
    '0%': {
        transform: 'scale(1, 1)'
    },
    '20%': {
        transform: 'scale(1.05, 1.05)',
        opacity: 1
    },
    '100%': {
        transform: 'scale(0.5, 0.5)',
        opacity: 0
    }
})

export const ModalContent = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '$secondaryColor',
    padding: '80px $space$2 0 $space$2',
    transition: 'transform .2s',
    
    '@bp2': {
        width: 'auto',
        height: '100%',
        transform: 'scale(0.5, 0.5)',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    },

    '@bp3': {
        flexDirection: 'row',
        width: '900px',
        height: 'auto',
        padding: '$space$3',
        gap: 20
    },

    '@bp4': {
        width: '1024px',
        gap: 40
    },

    '@bph0': {
        height: '100%',
        overflowY: 'auto'
    },

    '@bph4': {
        height: '100%',
        overflowY: 'auto'
    }
});

export const ModalComponent = styled('dialog', {
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '100% !important',
    maxHeight: '100% !important',
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
    zIndex: 7,

    '&[closing]': {
        display: 'flex',
        pointerEvents: 'none',
        inset: 0,
        animation: `${fadeOut} .5s forwards !important`,

        [`& ${ModalContent}`]: {
            animation: `${scaleOut} .2s forwards !important`
        }
    },

    '&[closing]::backdrop': {
        animation: `${fadeOut} .2s forwards !important`,
        backdropFilter: 'blur(0)'
    },

    '&[open]': {
        display: 'flex',
        animation: `${fadeIn} .5s forwards`,
        [`& ${ModalContent}`]: {
            animation: `${scaleIn} .2s forwards`
        },
    },

    '&[open]::backdrop': {
        animation: `${fadeIn} .2s forwards`,
        backdropFilter: 'blur(2px)'
    }

});