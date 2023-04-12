import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const pulse = keyframes({
    '100%': {
        transform: 'scale(1.3, 1.3)',
        borderColor: '$textColor',
        opacity: 0
    }
});

export const Button = styled('button', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '50%',
    textDecoration: 'none',
    backgroundColor: '$btnBackgroundColor',
    color: '$textColor',
    border: '1px solid $btnBackgroundColor',
    transition: 'all .2s ease-in-out',
    
    '&:hover': {
        transform: 'scale(90%, 90%)'
    },

    '&[disabled]': {
        opacity: '0.2',
        cursor: 'not-allowed',
        '&:hover': {
            transform: 'scale(1,1)'
        }
    },

    '&::after': {
        content: '',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        border: '1px solid transparent',
        borderRadius: '50%',
        top: -1,
        left: -1,
        zIndex: -1,
    },

    '&.pulse-animation::after': {
        animation: `${pulse} .5s`
    },

    variants: {
        size: {
            'md': {
                width: '45px',
                height: '45px'
            },
            'lg': {
                width: '75px',
                height: '75px'
            }
        }

    }
})