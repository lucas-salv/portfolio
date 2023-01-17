import { styled } from "@/helpers/stitches.config";
import { keyframes } from "@stitches/react";

const pulse = keyframes({
    '100%': {
        transform: 'scale(1.15, 1.6)',
        borderColor: '$black',
        opacity: 0
    }
});

export const Link = styled('a', {
    textDecoration: 'none',
})

export const Button = styled('button', {
    padding: '10px 30px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform .2s ease-in-out',
    position: 'relative',

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
                backgroundColor: '$black',
                [`${Link} &`]: {
                    color: '$white',
                },
                color: '$white',
                border: '1px solid $black',
                
                '&:hover': {
                    transform: 'scale(95%, 95%)'
                },
            },
            'outline': {
                backgroundColor: '$white',
                [`${Link} &`]: {
                    color: '$black',
                },
                color: '$black',
                border: '1px solid $black',

                '&:hover': {
                    transform: 'scale(95%, 95%)'
                },
            }
        }
    }
})