import { styled } from "@/helpers/stitches.config";

export const CardSlider = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    '& > .cardContainer': {
        overflowX: 'scroll',
        overflowY: 'hidden',

        

        '@bp4': {
            overflowX: 'hidden'
        },

        '& > .slider': {
            display: 'flex',
            gap: 20,
            flexWrap: 'nowrap',
            width: '700%',
            marginLeft: '20px',
            pointerEvents: 'none',
            '& > div': {
                pointerEvents: 'auto'
            },
    
            '&:hover > div:not(:hover)': {
                opacity: 0.5
            },

            '@bp2': {
                marginLeft: '100px'
            },
            '@bp3': {
                margin: '30px 100px',
            },
            '@bp4': {
                marginLeft: '300px'
            }
        },
    },
});

export const CardSliderHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '20px 20px 0 20px',

    '@bp2': {
        margin: '20px 100px 0 100px'
    },
    '@bp3': {
        margin: '20px 100px -35px 100px'
    },
    '@bp4': {
        margin: '20px 300px -35px 300px'
    },
})

export const CardSliderTitle = styled('h2', {
    fontSize: '$sizes$1',
    fontWeight: 'normal',
});

export const CardSliderContainerButtons = styled('div', {
    display: 'none',
    gap: 10,

    '@bp2': {
        display: 'flex'
    }
})