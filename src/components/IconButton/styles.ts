import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const pulse = keyframes({
    '100%': {
        transform: 'scale(1.3, 1.3)',
        borderColor: '$primaryColor',
        opacity: 0
    }
});

export const Button = styled('button', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform .1s ease-in-out',
    position: 'relative',
    textDecoration: 'none',

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
        },
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