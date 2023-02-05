import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const pulse = keyframes({
    '100%': {
        transform: 'scale(1.15, 1.5)',
        borderColor: '$primaryColor',
        opacity: 0
    }
});

export const Button = styled('button', {
    padding: '10px 30px',
    height: '40px',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '$sizes$1',
    textDecoration: 'none',
    transition: 'transform .2s ease-in-out',

    '&::after': {
        content: '',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        border: '1px solid transparent',
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
        variant: {
            'solid': {
                backgroundColor: '$primaryColor',
                color: '$secondaryColor',
                border: '1px solid $primaryColor',
                
                '&:hover': {
                    transform: 'scale(95%, 95%)'
                },
            },
            'outline': {
                backgroundColor: '$secondaryColor',
                color: '$primaryColor',
                border: '1px solid $primaryColor',

                '&:hover': {
                    transform: 'scale(95%, 95%)'
                },
            }
        }
    }
})