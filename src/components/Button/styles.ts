import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const pulse = keyframes({
    '100%': {
        transform: 'scale(1.15, 1.5)',
        borderColor: '$textColor',
        opacity: 0
    }
});

export const Btn = styled('button', {
    padding: '10px 30px',
    height: '40px',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '$sizes$1',
    textDecoration: 'none',
    borderRadius: '40px',
    backgroundColor: '$btnBackgroundColor',
    color: '$textColor',
    border: '1px solid $btnBackgroundColor',
    transition: 'transform .2s ease-in-out',
    
    '&:hover': {
        transform: 'scale(95%, 95%)'
    },

    '&[disabled]': {
        opacity: '0.4',
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
        borderRadius: '40px',
        top: -1,
        left: -1,
        zIndex: -1,
    },

    '&.pulse-animation::after': {
        animation: `${pulse} .5s`
    },

    variants: {
        fullWidth: {
            true: {
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
            },
            false: {}
        },
    }
})